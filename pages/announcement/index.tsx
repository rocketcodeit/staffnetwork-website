import React, {useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";
import {ServiceList} from "../../components/Service/ServiceList";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {IAnnouncement} from "../../models/IAnnouncement";
import {AnnouncementList} from "../../components/Announcement/AnnouncementList";
import {IPost} from "../../models/IPost";
import Checkbox from "../../models/Checkbox";

let url ="http://localhost:1337";

export default function AnnouncementPage({data, pageCount, currentPage, regions} : InferGetServerSidePropsType<typeof getServerSideProps>){

    const [categories,setCategories] = useState<string[]>([]);

    const [effectivePage,setEffectivePage] = useState(currentPage);
    const [loading, setLoading] = useState(false);

    const castAnnouncementData = (dataEntry: any): IAnnouncement[] => {
          return dataEntry?.map((i : any) => {
            return {
                title: i.attributes.titolo,
                slug: i.attributes.slug,
                img : i.attributes.image.data && url + i.attributes.image.data.attributes.url,
                details:{
                    summary: i.attributes.summary,
                    startDate : i.attributes.inizio ?? i.attributes.inizio,
                    expirationDate : i.attributes.scadenza ??  i.attributes.scadenza,

                },
                description: i.attributes.descrizione,
                recipients : i.attributes.destinatari.data?.map((d: any, index : number) => {
                    return {
                        id: d.id,
                        title: d.attributes.descrizione
                    }
                }),
                regions:  i.attributes.regioni.data &&  i.attributes.regioni.data?.map((regione: any) => {
                    return regione.attributes.nome
                }),
                provinces :  i.attributes.province.data &&  i.attributes.province.data?.map((provincia : any) => {
                    return provincia.attributes.nome
                }),
                investimentType : i.attributes.tipoInvestimento.data?.attributes.descrizione,
                contributionType : i.attributes.tipoContributo.data?.attributes.descrizione,
                buyable :  i.attributes.prezzo && {
                    price :  i.attributes.prezzo?.prezzo,
                    discountPrice :  i.attributes.prezzo?.prezzoScontato,
                    currency : "€"
                }

            };
        });

    };


    const announcementsData = castAnnouncementData(data);


    const filterCategories = (event : any) => {
        if (event.target.checked) {
            setCategories(array => [...array, event.target.name]);
        } else {
            setCategories( categories.filter(element  => element !== event.target.name));
        }

    }



    const [announcements, setAnnouncements] = useState<IAnnouncement[]>(announcementsData);

    useEffect(() => {

        setLoading(true);
        console.log(categories)


        fetch(`${url}/api/announcements?populate=*${categories?.map((i: any) => `&filters[regioni][nome][$containsi]=${i}`).join('')}&pagination[page]=${effectivePage}`)
            .then((res) => {

                res.json().then((dataFiltered) => {

                    const announcementsFiltered = castAnnouncementData(dataFiltered.data);
                    setAnnouncements(announcementsFiltered);
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
                            <h1 className="mb-6">Bandi</h1>

                            <div className={"flex flex-row flex-wrap justify-between"}>
                                <div className={"w-full w-3/12"}>
                                    <div className={"filters"}>
                                        <h4 className={"mb-3"}>Filtri</h4>
                                        {regions?.map((i: string) =>
                                            <div key={i}>
                                                <Checkbox
                                                    title={i}
                                                    name={i.toLowerCase()}
                                                    handleChange={filterCategories}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={"w-full lg:w-8/12"}>
                                    {loading && <motion.div  initial={{opacity:0}}  animate={{opacity:1}} transition={{duration:0.3}}
                                                             className={"h-full w-full  flex l-0 bg-white items-center justify-center text-center justify-items-center"}>sta caricando..</motion.div>}

                                    {!loading &&  <AnnouncementList announcements={announcements} /> }
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
    const resAnnouncements = await fetch(`${url}/api/announcements?populate=*api/announcements?populate=*&populate[0]=tipoContributo,tipoInvestimento,destinatari,regioni,province,specifiche,image,localizations&pagination[page]=${effectivePage}`);

    //const resPosts = await fetch(`${url}/api/posts?populate=*&pagination[page]=${effectivePage}&pagination[pageSize]=1`);
    const announcementsData  =  await resAnnouncements.json();


    const pageCount = announcementsData.meta.pagination.pageCount;

    if(!announcementsData.data) {
        return {
            notFound: true,
        }
    }

    const resRegions =  await fetch(`${url}/api/regions?populate=*`);
    const regionsData = await resRegions.json();


    const regions : string[] = regionsData.data?.map((region : any) => {
        return region.attributes.nome;
    })
    const result: any = {
        data: announcementsData.data,
        pageCount : pageCount,
        currentPage : +effectivePage,
        regions : regions
    }


    // Pass data to the page via props
    return {
        props: result
    };
}
