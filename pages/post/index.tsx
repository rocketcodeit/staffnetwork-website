import React, {useEffect, useState} from "react";
import styles from "../../styles/Post.module.css";
import PostList, {IPostProps} from "../../components/Post/PostList";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {IPost} from "../../models/IPost";
import Link from "next/link";
import {useRouter} from "next/router";

export default function PostsPage({data, pageCount,currentPage} : InferGetServerSidePropsType<typeof getServerSideProps>){
    const [loading, setLoading] = useState(false);
    const [posts,setPosts] = useState(data);
    const route = useRouter();
    const {page} = route.query;



    useEffect(() => {
        console.log(currentPage)
        let url ="http://localhost:1337";
        const res = `${url}/api/posts?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=1`;

        fetch(res)
            .then((res) => {
                res.json().then((res2) =>{
                    setPosts(res2);
                })
            })
    },[currentPage]);




    return (
        <>

                <div className={styles.container}>
                    <section>
                        <p></p>
                        <div className="container">
                            <BreadCrumbs mappedPaths={config} showHome={true}  />
                            <h1 className="text-4xl">Articoli</h1>
                            <PostList data={data}  />
                            <ul className={styles.paginationItems}>
                                {[...Array(pageCount)].map((e, i) =>
                                    <li className={`${styles.paginationItem} ${currentPage==(i+1) ? styles.selected : ''}`} key={i}>
                                        <Link className="w-full"  onClick={() => console.log(i+1)} href={`/blog?page=${i+1}`}>{i+1}</Link>
                                    </li>)
                                }
                            </ul>

                        </div>

                    </section>
                </div>


        </>
    );
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps<IPostProps> = async (context) =>{
    // Fetch data from external API
    const {page} = context.query;

    const effectivePage = page ?? 1;
    let url ="http://localhost:1337";
    const res = await fetch(`${url}/api/posts?populate=*&pagination[page]=${effectivePage}&pagination[pageSize]=1`);
    const data  =  await res.json();
    const pageCount = data.meta.pagination.pageCount;

    if(effectivePage > pageCount || effectivePage <= 0 ){
        return {
            notFound: true
        }
    }
    const posts :  IPost[] =  data.data.map((item : any) =>{
        return {
            slug : item.attributes.slug,
            name : item.attributes.title,
            date : item.attributes.date,
            img: url + item.attributes.cover.data.attributes.url,
            description : item.attributes.content,
            featured : item.attributes.featured
        }
    })

    const result: IPostProps = {
        data: posts,
        pageCount : pageCount,
        currentPage : +effectivePage,
    }

    // Pass data to the page via props
    return {
        props: result
    };
}
