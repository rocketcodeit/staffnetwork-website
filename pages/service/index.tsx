import React, {useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";
import PostList from "../../components/Post/PostList";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";
import {ServiceList} from "../../components/Service/ServiceList";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {PostDetail} from "../../models/postDetail";
import {IService, IServiceList} from "../../models/IService";
import {Announcement} from "../../models/announcement";
import {IArea} from "../../config/models/IArea";
import Checkbox from "../../components/Checkbox/Checkbox";
import {AnnouncementList} from "../../components/Announcement/AnnouncementList";
import {PostCategory} from "../../models/post-category";
import {useRouter} from "next/router";
import {ProductService} from "../../services/service.service";
import {NextjsUtils} from "../../services/nextjs-utils";
import {PostCategoriesService} from "../../services/post-categories.service";
import {AreaService} from "../../services/area.service";


interface ServicesProps{
    services: IService[],
    pageCount?: number,
    currentPage : number,
    areas?: IArea[]
}
export default function ServicesPage({services, pageCount, currentPage, areas} : ServicesProps){

    const [effectivePage,setEffectivePage] = useState(currentPage);
    const [loading, setLoading] = useState(false);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const [data, setData] = useState<IService[]>(services);
    const navigation = useRouter();
    const [categories,setCategories] = useState<any[]>([areas]);


    const [blogFilter, setBlogFilter] = useState<{category: any[], pageNumber: number}>({
        category: [],
        pageNumber: 1
    })

    useEffect(() => {
        setData(services);
    }, [services])

    useEffect(() => {
        if(!firstLoad) {
            setLoading(true);
            navigation.replace('?page=' + effectivePage)
                .then(() => {
                    setLoading(false);
                })
        } else {
            setFirstLoad(false);
        }
    }, [effectivePage,categories])



    const filterCategories = (event : any) => {
        if (event.target.checked) {
            setCategories(array => [...array, event.target.name]);
        } else {
            setCategories( categories.filter(element  => element !== event.target.name));
        }

    }
/*

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
*/

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

    const currentPage = page ?? 1;

    const productsService = new ProductService();
    const services = await productsService.find();


    const areaProductService = new AreaService();
    const areas = await areaProductService.find({ sort: ['id']});


    if(currentPage > (services?.paginationInfo.pageCount ?? 1))
        return NextjsUtils.returnNotFoundObject();

    if(currentPage === 1 && page)
        return NextjsUtils.returnRedirectObject('/servizi');

    return NextjsUtils.returnServerSidePropsObject({
        services: services?.data,
        pageCount : services?.paginationInfo.pageCount,
        currentPage : currentPage,
        areas : areas?.data
    });

}
