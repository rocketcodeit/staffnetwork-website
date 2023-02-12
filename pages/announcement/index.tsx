import React, {useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";
import {ServiceList} from "../../components/Service/ServiceList";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {IAnnouncement} from "../../models/IAnnouncement";
import {AnnouncementList} from "../../components/Announcement/AnnouncementList";

let url ="http://localhost:1337";

export default function AnnouncementPage({data} : InferGetServerSidePropsType<typeof getServerSideProps>){

    const announcements : IAnnouncement[] = data.map((i : any) => {
        return {
            title: i.attributes.titolo,
            slug: i.attributes.slug,
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
            territory: i.attributes.regioni.data?.map((regione: any) => {
                return {
                    region: regione.attributes.nome
                }
            })
        }
    })


    return (
        <>

                <div className={styles.container}>
                    <section>
                        <p></p>
                        <div className="container">
                            <BreadCrumbs mappedPaths={config} showHome={true}  />
                            <h1 className="text-4xl">Bandi</h1>
                            <AnnouncementList announcements={announcements} />
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
    const resAnnouncements = await fetch(`${url}/api/announcements?populate=*&pagination[page]=${effectivePage}`);

    //const resPosts = await fetch(`${url}/api/posts?populate=*&pagination[page]=${effectivePage}&pagination[pageSize]=1`);
    const announcementsData  =  await resAnnouncements.json();
    const pageCount = announcementsData.meta.pagination.pageCount;

    if(!announcementsData.data) {
        return {
            notFound: true,
        }
    }


    const result: any = {
        data: announcementsData.data
    }


    // Pass data to the page via props
    return {
        props: result
    };
}
