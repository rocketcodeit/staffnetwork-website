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

export default function AreasPage({areas} : InferGetServerSidePropsType<typeof getServerSideProps>){
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}} className={styles.container}>

            <section className={"mb-16"}>
                <div className="container">
                    <BreadCrumbs mappedPaths={config} showHome={true}  />
                    <h1 className={"mb-3"}>Aree</h1>
                    <AreaList services={areas} />
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
    const resAreas = await fetch(`${url}/api/areas?populate=*&sort=id&pagination[page]=${effectivePage}`);
    const areasData  =  await resAreas.json();
    //const pageCount = resServices.meta.pagination.pageCount; effectivePage > pageCount ||


    if(effectivePage <= 0 ){
        return {
            notFound: true
        }
    }
    const areas :  IArea[] =  areasData.data.map((item : any) =>{
        return {
            slug : item.attributes.slug,
            name : item.attributes.titolo,
            short_description : item.attributes.summary,
            description : item.attributes.description,

        }
    })


    const result: any = {
        areas: areas,
        currentPage : +effectivePage,
    }

    // Pass data to the page via props
    return {
        props: result
    };
}
