import React from "react";
import {IArea} from "../../config/models/IArea";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {services} from "../api/service/ServiceData";
import styles from "../../styles/Area.module.css";
import {motion} from "framer-motion";
import {blockReveal, blockTextReveal, fadeInUp, opacityAnimation} from "../../animations";
import {ServiceList} from "../../components/Service/ServiceList";
import {IService, IServiceArea} from "../../models/IService";
import Link from "next/link";

let url = "http://localhost:1337";


export default function AreaPage({data,services} : InferGetServerSidePropsType<typeof getServerSideProps>){
    const areaFound : IArea ={
        slug:data.slug,
        name:data.titolo,
        short_description:data.summary,
        description: data.description ? data.description : undefined ,
        img: data.image.data ? url+data.image.data.attributes.url : undefined,
    }


    const servicesFound : IService[] = services.map((i : any) => {
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

    return(
        <motion.section variants={opacityAnimation} initial="initial" animate="final" className="overflow-hidden mt-4 mb-12">
            <section id={"abo"}>
                <motion.div className="containerRight flex flex-wrap justify-between">
                    <motion.div variants={fadeInUp} className="w-full order-1">
                        <BreadCrumbs  mappedPaths={config} showHome={true} transformDynamicPath={path => {
                            if(path === "[slug]"){
                                return areaFound.slug
                            }
                            return path;
                        }} />
                        <div className="relative w-fit">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}> {areaFound.name}</motion.h1>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="w-full lg:w-6/12 order-2 lg:order-2">
                        <div className={"w-fit relative mt-2"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.div dangerouslySetInnerHTML={{__html:areaFound.description ? areaFound.description : ""}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={""} />
                        </div>
                        <div className={"w-fit relative mt-2"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <ul className={styles.activities}>{data.servizi?.map((service : any, index : number) =>{
                                return  <li key={index} className={styles.activity}>
                                    <div className={styles.content}>
                                        <h5>{service.titolo}</h5>
                                        <motion.div dangerouslySetInnerHTML={{__html:service.descrizione}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={""} />
                                    </div>

                                </li>
                            })}</ul>
                        </div>

                    </motion.div>
                    <motion.div variants={fadeInUp} className={"w-full relative lg:w-5/12 containerRightBefore flex flex-row items-start order-last lg:order-3"}>
                        <Link  className={"btn !sticky top-6 "} href={"Contattaci"} >Contattaci</Link>
                    </motion.div>
                </motion.div>
            </section>

            <section id={"services"} className={"mt-16"}>
                <div className={"container"}>
                    <div className={"w-full lg:w-8/12"}>
                        <motion.h3 className={"mb-3"}>Servizi</motion.h3>
                        <ServiceList services={servicesFound} />
                    </div>
                </div>
            </section>

        </motion.section>
    )
}


// This gets called on every request
export const getServerSideProps: GetServerSideProps<any> = async (context) =>{

    const {slug} = context.query;

    let url ="http://localhost:1337";
    const resArea = await fetch(`${url}/api/areas/${slug}?populate=*`);
    const areaData  =  await resArea.json();
    //const pageCount = resServices.meta.pagination.pageCount; effectivePage > pageCount ||


    if(!areaData.data) {
        return {
            notFound: true,
        }
    }


    const resServices = await fetch(`${url}/api/services?populate=*&&populate[0]=aree&filters[aree][slug][$containsi]=${areaData.data.attributes.slug}`);
    const servicesData  =  await resServices.json();




    const result: any = {
        data: areaData.data.attributes,
        services : servicesData.data
    }


    // Pass data to the page via props
    return {
        props: result
    };
}
