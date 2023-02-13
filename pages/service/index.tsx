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

let url ="http://localhost:1337";

export default function ServicesPage({data} : InferGetServerSidePropsType<typeof getServerSideProps>){

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


    return (
        <>

                <div className={styles.container}>
                    <section className={"mt-8"}>
                        <div className="container">
                            <BreadCrumbs mappedPaths={config} showHome={true}  />
                            <h1 className="mb-6">Servizi</h1>
                            <ServiceList services={services} />
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

    if(!serviceData.data) {
        return {
            notFound: true,
        }
    }


    const result: any = {
        data: serviceData.data
    }


    // Pass data to the page via props
    return {
        props: result
    };
}
