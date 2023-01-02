import React from "react";
import {IPost} from "../../models/IPost";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
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

export default function PostPage(props : { post : IPost} ){
    //const dataConfiguration : IWebsiteConfiguration = configuration;

    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.4,ease: "easeOut"}}>
            <Head>
                <title>{props.post.name}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>
                <div className="container">

                    <motion.img variants={fadeInUp} initial="initial" whileInView="final"  viewport={{ once: true }} className={`${styles.image} relative top-[80px] opacity-0`} src={props.post.img} />
                    <BreadCrumbs mappedPaths={config} showHome={true} transformDynamicPath={path => {
                        if(path === "[slug]"){
                            return props.post.name
                        }
                        return path;
                    }} />
                    <div className={"w-fit relative"}>
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                        <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="mb-4">{props.post.name}</motion.h1>
                    </div>


                    <div className={styles.content}>
                        <div className={"md:w-8/12 w-12/12 relative"}>
                            <div className={"flex flex-row justify-between items-center mb-4"}>
                                <div className={styles.date}>{moment(props.post.date).format('DD.MM.yyyy')}</div>
                                <div className={styles.shareLinks}>
                                    {configuration.shareSocial?.map((item) => {
                                        return <a href={item.url}><img className="mx-auto" src={item.name} /> </a>
                                    })}

                                </div>
                            </div>

                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.p variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="max-w-5xl" >{props.post.description}</motion.p>
                        </div>

                        <div className="md:w-3/12 w-12/12 md:mt-0 mt-5">
                            <div className={"w-fit relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.h3 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >Categorie</motion.h3>
                            </div>
                            <div className={styles.categories}>
                                {
                                    props.post.categories.map((category) => {
                                        return  <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={styles.category}> {category.name} </motion.div>
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


export const getServerSideProps: GetServerSideProps = async (context) => {

    const { slug } = context.query

    const postFound = posts.find( (post) => post.slug === slug);

    if(postFound){
        return{
            props : {
                post : postFound
            }
        }
    }

    return {
        notFound : true
    };
   // return {props : { a : 3 }}
}