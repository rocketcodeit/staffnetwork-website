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
import {IService} from "../../models/IService";
import Link from "next/link";
import {ServiceArea} from "../../models/service-area";
import {AreaService} from "../../services/area.service";
import {NextjsUtils} from "../../services/nextjs-utils";
import {ProductService} from "../../services/service.service";
import {FilterOperator} from "../../models/strapi-query-params";
import Head from "next/head";

let url = "http://localhost:1337";

interface AreaPageProps{
    area : IArea,
    services :  IService[]
}

export default function AreaPage({area,services} : AreaPageProps){
    let stringToConcat ="bello";
    console.log(stringToConcat.concat("fds"))
    return(
        <motion.section variants={opacityAnimation} initial="initial" animate="final" className="overflow-hidden mt-4 mb-12">
            <Head>
                <title>{area.name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section id={"abo"}>
                <motion.div className="containerRight flex flex-wrap justify-between">
                    <motion.div variants={fadeInUp} className="w-full order-1">
                        <BreadCrumbs  mappedPaths={config} showHome={true} transformDynamicPath={path => {
                            if(path === "[slug]"){
                                return area.slug
                            }
                            return path;
                        }} />
                        <div className="relative w-fit">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}> {area.name}</motion.h1>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="w-full lg:w-6/12 order-2 lg:order-2">
                        <div className={"w-fit relative mt-2"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.div dangerouslySetInnerHTML={{__html:area.description ? area.description : ""}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={""} />
                        </div>
                        <div className={"w-fit relative mt-2"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <ul className={styles.activities}>{area.activities?.map((activity : any, index : number) =>{
                                return  <li key={index} className={styles.activity}>
                                    <div className={styles.content}>
                                        <h5>{activity.title}</h5>
                                        <motion.div dangerouslySetInnerHTML={{__html:activity.description}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={""} />
                                    </div>

                                </li>
                            })}</ul>
                        </div>

                    </motion.div>
                    <motion.div variants={fadeInUp} className={"w-full relative lg:w-5/12 bg-cover bg-center flex flex-row items-start order-last lg:order-3"}>
                        <img className={"max-h-[500px] w-full object-cover"} src={area.img} />
                    </motion.div>
                </motion.div>
            </section>

            <section id={"services"} className={"mt-16"}>
                <div className={"container"}>
                    <div className={"w-full lg:w-8/12"}>
                        <motion.h3 className={"mb-3"}>Servizi</motion.h3>
                        <ServiceList services={services} />
                    </div>
                </div>
            </section>

        </motion.section>
    )
}


// This gets called on every request
export const getServerSideProps: GetServerSideProps<any> = async (context) =>{

    const {slug} = context.query;

    const areaService = new AreaService();

    if(!slug)
        return NextjsUtils.returnNotFoundObject();

    const areaData = await areaService.getBySlug(slug.toString());

    if(!areaData)
        return NextjsUtils.returnNotFoundObject();

    const productService = new ProductService();
    const services = await productService
        .find({
            populate: [ {value: "aree,dettagli", level: 0 }],
            filter : [{field:["aree","slug"],operator:FilterOperator.containsCaseInsensitive, value:slug.toString()}]
        })


    if(!services)
        return NextjsUtils.returnNotFoundObject();


    const result: any = {
        area: areaData,
        services : services.data
    }


    // Pass data to the page via props
    return {
        props: result
    };
}
