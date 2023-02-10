import React, {useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";
import PostList from "../../components/Post/PostList";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";
import {AnnouncementList} from "../../components/Announcement/AnnouncementList";
import {GetServerSideProps} from "next";
import {IPost, IPostCategory} from "../../models/IPost";

export default function PostsPage(){
    const [loading, setLoading] = useState(false);

    return (
        <>

                <div className={styles.container}>
                    <section>
                        <p></p>
                        <div className="container">
                            <BreadCrumbs mappedPaths={config} showHome={true}  />
                            <h1 className="text-4xl">Bandi</h1>
                            <AnnouncementList   />
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
    const resService = await fetch(`${url}/api/services?populate=*&pagination[page]=${effectivePage}`);

    //const resPosts = await fetch(`${url}/api/posts?populate=*&pagination[page]=${effectivePage}&pagination[pageSize]=1`);
    const serviceData  =  await resService.json();
    const pageCount = serviceData.meta.pagination.pageCount;

    if(!serviceData.data) {
        return {
            notFound: true,
        }
    }


    const result: any = {
        data: serviceData.data.attributes
    }



    // Pass data to the page via props
    return {
        props: result
    };
}
