import React from "react";
import {IPost, IPostCategory} from "../../models/IPost";
import {useRouter} from "next/router";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {notFound} from "next/navigation";
import {posts} from "../api/post/PostData";
import moment from "moment/moment";
import BreadCrumbs, {IBreadCrumbsMapLabel} from "../../components/Breadcrumbs/BreadCrumbs";
import {config} from "../../config/breadcrumbs.config";
import {motion} from "framer-motion";
import styles from "../../styles/Post.module.css";
import {blockReveal, blockTextReveal, fadeInUp} from "../../animations";
import Head from "next/head";
import configuration from "../../config/WebsiteConfig"
import {IWebsiteConfiguration} from "../../config/models/IWebsiteConfiguration";
import post from "../api/post";
import Link from "next/link";

export default function PostPage({post} : InferGetServerSidePropsType<typeof getServerSideProps>){
    //const dataConfiguration : IWebsiteConfiguration = configuration;

    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.4,ease: "easeOut"}}>
            <Head>
                <title>{post.name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>
                <div className="container">

                    <motion.img variants={fadeInUp} initial="initial" whileInView="final"  viewport={{ once: true }} className={`${styles.image} relative top-[80px] opacity-0`} src={post.img} />
                    <BreadCrumbs mappedPaths={config} showHome={true} transformDynamicPath={path => {
                        if(path === "[slug]"){
                            return post.name
                        }
                        return path;
                    }} />
                    <div className={"w-fit relative"}>
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                        <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="mb-4">{post.name}</motion.h1>
                    </div>


                    <div className={styles.content}>
                        <div className={"md:w-8/12 w-12/12 relative"}>
                            <div className={"flex flex-row justify-between items-center mb-4"}>
                                <div className={styles.date}>{moment(post.date).format('DD.MM.yyyy')}</div>
                                <div className={styles.shareLinks}>
                                    {configuration.shareSocial?.map((item,index) => {
                                        return <Link key={index} href={item.url}><img className="mx-auto" src={item.name} /> </Link>
                                    })}

                                </div>
                            </div>

                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.div dangerouslySetInnerHTML={{__html:post.description}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="max-w-5xl" />
                        </div>

                        <div className="md:w-3/12 w-12/12 md:mt-0 mt-5">
                            <div className={"w-fit relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.h3 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >Categorie</motion.h3>
                            </div>
                            <div className={styles.categories}>
                                {
                                    post.categories.map((category : IPostCategory,index : any) => {
                                        return  <motion.div key={index} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={styles.category}> {category.slug} </motion.div>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </main>

        </motion.section>
    )
}


export const getServerSideProps: GetServerSideProps<{post : IPost}> = async (context) => {

    const { slug } = context.query
    let url ="http://localhost:1337";
    const res = await fetch(url+"/api/posts/"+slug+"?populate=*");
    const data  =  await res.json();
    if(!data.data) {
        return {
            notFound: true,
        }
    }

    const postFound : IPost = {
        slug : data.data.attributes.slug,
        name : data.data.attributes.title,
        img : url + data.data.attributes.cover.data.attributes.url,
        description : data.data.attributes.content,
        featured : data.data.attributes.featured,
        categories :
            data.data.attributes.post_categories.data.map((category : any) => {
                return {
                    name: category.attributes.name,
                    slug: category.attributes.slug
                }
            })
    }


    return{
        props : {
            post : postFound
        }
    }


}