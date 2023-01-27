import React, {useEffect, useState} from "react";
import styles from "../../styles/Post.module.css";
import PostList, {IPostProps} from "../../components/Post/PostList";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {AnimatePresence, motion} from "framer-motion";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {IPost, IPostCategory} from "../../models/IPost";
import Link from "next/link";
import {useRouter} from "next/router";
import Select from 'react-select'
import {useQuery,useQueryClient} from 'react-query'


const handleCategories = (values : any) =>{
    console.log(values);
}


export default function PostsPage({posts, pageCount,currentPage, categories} : InferGetServerSidePropsType<typeof getServerSideProps>){
    const [effectivePage,setEffectivePage] = useState(currentPage);
    const [loading, setLoading] = useState(false);

    let url ="http://localhost:1337";
    const [data, setData] = useState<IPost[]>(posts);

    const [blogFilter, setBlogFilter] = useState<{category: any[], pageNumber: number}>({
        category: [],
        pageNumber: 1
    })

    useEffect(() => {

        setLoading(true);
        fetch(`${url}/api/posts?populate=*&pagination[page]=${effectivePage}&pagination[pageSize]=1`)
            .then((res) => {

                res.json().then((data) => {

                    setData(data.data.map((item: any) => {
                        return {
                            slug : item.attributes.slug,
                            name : item.attributes.title,
                            date : item.attributes.date,
                            img: url + item.attributes.cover.data.attributes.url,
                            description : item.attributes.content,
                            featured : item.attributes.featured
                        }
                    }));
                    setLoading(false);
                })
            });

    }, [effectivePage,])


    return (
        <>

                <div className={styles.container}>
                    <section>

                        <p></p>
                        <div className="container">
                            <BreadCrumbs mappedPaths={config} showHome={true}  />
                            <h1 className="text-4xl">Articoli</h1>
                            <Select
                                options={categories}
                                isMulti
                                placeholder="Filtra per categoria"
                                onChange={values => handleCategories(values.map((category : any) => category.name))}
                            />


                            <PostList loading={loading} posts={data} />

                            <ul className={styles.paginationItems}>
                                {[...Array(pageCount)].map((e, i) =>
                                    <li onClick={() => {
                                        setEffectivePage(i+1)
                                    }} className={`${styles.paginationItem} ${effectivePage==(i+1) ? styles.selected : ''}`} key={i}>
                                        <div className="w-full" >{i+1}</div>
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
export const getServerSideProps: GetServerSideProps<any> = async (context) =>{
    // Fetch data from external API
    const {page} = context.query;

    const effectivePage = page ?? 1;
    let url ="http://localhost:1337";
    const resPosts = await fetch(`${url}/api/posts?populate=*&pagination[page]=${effectivePage}&pagination[pageSize]=1`);
    const postsData  =  await resPosts.json();
    const pageCount = postsData.meta.pagination.pageCount;

    const resCategories =  await fetch(`${url}/api/post-categories`);
    const categoriesData = await resCategories.json();

    if(effectivePage > pageCount || effectivePage <= 0 ){
        return {
            notFound: true
        }
    }
     const posts :  IPost[] =  postsData.data.map((item : any) =>{
        return {
            slug : item.attributes.slug,
            name : item.attributes.title,
            date : item.attributes.date,
            img: url + item.attributes.cover.data.attributes.url,
            description : item.attributes.content,
            featured : item.attributes.featured
        }
    })

    const categories : IPostCategory[] = categoriesData.data.map((category : any) =>{
      return {
          id:category.id,
          name: category.attributes.name,
          slug: category.attributes.slug,
      }
    })
    const result: any = {
        posts: posts,
        pageCount : pageCount,
        currentPage : +effectivePage,
        categories : categories
    }

    // Pass data to the page via props
    return {
        props: result
    };
}
