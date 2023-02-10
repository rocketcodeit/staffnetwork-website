import React from "react";
import styles from "../../styles/Home.module.css";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import AreaList from "../../components/Area/AreaList";
import {motion} from "framer-motion";
import {opacityAnimation} from "../../animations";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {IPost, IPostCategory} from "../../models/IPost";
import {IArea} from "../../config/models/IArea";

export default function ServicesPage({services} : InferGetServerSidePropsType<typeof getServerSideProps>){
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}} className={styles.container}>

            <section className={"mb-16"}>
                <div className="container">
                    <BreadCrumbs mappedPaths={config} showHome={true}  />
                    <h1 className={"mb-3"}>Aree</h1>
                    <AreaList services={services} />
                </div>

            </section>

        </motion.div>
    )
}




// This gets called on every request
export const getServerSideProps: GetServerSideProps<any> = async (context) =>{
    // Fetch data from external API
    const {page} = context.query;

    const effectivePage = page ?? 1;
    let url ="http://localhost:1337";
    const resServices = await fetch(`${url}/api/areas?populate=*&pagination[page]=${effectivePage}`);
    const servicesData  =  await resServices.json();
    //const pageCount = resServices.meta.pagination.pageCount; effectivePage > pageCount ||


    if(effectivePage <= 0 ){
        return {
            notFound: true
        }
    }
    const services :  IArea[] =  servicesData.data.map((item : any) =>{
        return {
            slug : item.attributes.slug,
            name : item.attributes.titolo,
            short_description : item.attributes.summary,
            description : item.attributes.description,

        }
    })


    const result: any = {
        services: services,
        currentPage : +effectivePage,
    }

    // Pass data to the page via props
    return {
        props: result
    };
}