import React, {useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";
import PostList from "../../components/Post/PostList";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";
import {ServiceList} from "../../components/Service/ServiceList";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {IPost, IPostCategory} from "../../models/IPost";
import {IService} from "../../models/IService";
import {IAnnouncement} from "../../models/IAnnouncement";
import {IArea} from "../../config/models/IArea";
import Checkbox from "../../models/Checkbox";
import {AnnouncementList} from "../../components/Announcement/AnnouncementList";

let url ="http://localhost:1337";

export default function ServicesPage({data, pageCount, currentPage, areas} : InferGetServerSidePropsType<typeof getServerSideProps>){

    const [categories,setCategories] = useState<string[]>([]);
    const [effectivePage,setEffectivePage] = useState(currentPage);
    const [loading, setLoading] = useState(false);


    const castServicesData = (dataEntry : any) : IService[] => {
        return dataEntry?.map((i : any) => {
            return {
                title: i.attributes.title,
                slug: i.attributes.slug,
                area:
                    i.attributes.aree.data.map((area : any) => {
                        return{
                            slug:area.attributes.slug,
                            title:area.attributes.title
                        }
                    }),
                details:{
                    summary: i.attributes.summary
                },
                description: i.attributes.description
            }
        })
    }

    const servicesData = castServicesData(data);
    const [services, setServices] = useState<IService[]>(servicesData);

    const filterCategories = (event : any) => {
        if (event.target.checked) {
            setCategories(array => [...array, event.target.name]);
        } else {
            setCategories( categories.filter(element  => element !== event.target.name));
        }

    }

    useEffect(() => {

        setLoading(true);

        fetch(`${url}/api/services?populate=*${categories?.map((i: any) => `&filters[aree][titolo][$containsi]=${i}`).join('')}&pagination[page]=${effectivePage}`)
            .then((res) => {

                res.json().then((dataFiltered) => {

                    const servicesFiltered = castServicesData(dataFiltered.data);
                    setServices(servicesFiltered);
                    setLoading(false);
                })
            });

    }, [effectivePage,categories])


    return (
        <>

                <div className={styles.container}>
                    <section className={"mt-8"}>
                        <div className="container">
                            <BreadCrumbs mappedPaths={config} showHome={true}  />
                            <h1 className="mb-6">Servizi</h1>

                            <div className={"flex flex-row flex-wrap justify-between"}>
                                <div className={"w-full lg:w-3/12 mb-6 lg:mb-0 relative h-fit"}>
                                    <div className={"filters containerLeftBefore"}>
                                        <h4 className={"mb-3"}>Filtri</h4>
                                        {areas?.map((i: any) =>
                                            <div key={i}>
                                                <Checkbox
                                                    title={i.name}
                                                    name={i.name.toLowerCase()}
                                                    handleChange={filterCategories}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={"w-full lg:w-8/12"}>
                                    {loading && <motion.div  initial={{opacity:0}}  animate={{opacity:1}} transition={{duration:0.3}}
                                                             className={"h-full w-full  flex l-0 bg-white items-center justify-center text-center justify-items-center"}>sta caricando..</motion.div>}

                                    {!loading &&  <ServiceList services={services} />  }
                                </div>

                                <div className={"w-full"}>
                                    <ul className={'paginationItems'}>
                                        {[...Array(pageCount)].map((e, i) =>
                                            <li onClick={() => {
                                                setEffectivePage(i+1)
                                            }} className={` paginationItem ${effectivePage==(i+1) ? 'selected' : ''}`} key={i}>
                                                <div className="w-full" >{i+1}</div>
                                            </li>)
                                        }
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </section>
                </div>
        </>
    );
}


// This gets called on every request
export const getServerSideProps: GetServerSideProps<any> = async (context) =>{
    // Fetch data from external API
    const {page} = context.query;

    const effectivePage = page ?? 1;
    let url ="http://localhost:1337";
    const resService = await fetch(`${url}/api/services?populate=*&populate[0]=aree&pagination[page]=${effectivePage}`);

    //const resPosts = await fetch(`${url}/api/posts?populate=*&pagination[page]=${effectivePage}&pagination[pageSize]=1`);
    const serviceData  =  await resService.json();
    const pageCount = serviceData.meta.pagination.pageCount;

    const resAreas = await fetch(`${url}/api/areas?populate=*&sort=id&pagination[page]=${effectivePage}`);
    const areasData  =  await resAreas.json();


    const areas :  IArea[] =  areasData.data.map((item : any) =>{
        return {
            slug : item.attributes.slug,
            name : item.attributes.titolo,
            short_description : item.attributes.summary,
            description : item.attributes.description,

        }
    })

    if(!serviceData.data) {
        return {
            notFound: true,
        }
    }


    const result: any = {
        data: serviceData.data,
        pageCount : pageCount,
        currentPage: +effectivePage,
        areas : areas
    }


    // Pass data to the page via props
    return {
        props: result
    };
}
