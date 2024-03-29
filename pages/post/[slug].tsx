import React from "react";
import {PostDetail} from "../../models/postDetail";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import moment from "moment/moment";
import BreadCrumbs, {IBreadCrumbsMapLabel} from "../../components/Breadcrumbs/BreadCrumbs";
import {config} from "../../config/breadcrumbs.config";
import {motion} from "framer-motion";
import styles from "../../styles/Post.module.css";
import {blockReveal, blockTextReveal, fadeInUp} from "../../animations";
import Head from "next/head";
import configuration from "../../config/WebsiteConfig"
import Link from "next/link";
import {PostCategory} from "../../models/post-category";
import {PostService} from "../../services/post.service";
import {NextjsUtils} from "../../services/nextjs-utils";
import {ConfigurationService} from "../../services/configuration.service";
import {ConfigurationData} from "../../models/configuration-data";

interface  PostPageProps{
    post : PostDetail,
    configData : ConfigurationData
}
export default function PostPage({post, configData} : PostPageProps){
    //const dataConfiguration : IWebsiteConfiguration = configuration;

    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}} >
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
                                    {configData.shareLinks?.map((item,index) => {
                                        return <Link key={index} href={item.href + post.slug} target="_blank"><img className="mx-auto" src={item.icon} /> </Link>
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
                                    post.categories.map((category : PostCategory, index : any) => {
                                        return  <motion.div key={index} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={styles.category}> {category.name} </motion.div>
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


export const getServerSideProps: GetServerSideProps<{post : PostDetail}> = async (context) => {

    const { slug } = context.query

    const postService = new PostService();

    const configService = new ConfigurationService();

    if (!slug)
        return NextjsUtils.returnNotFoundObject();

    const postData = await postService.getBySlug(slug.toString());

    const configData = await  configService.getSingle({
        populate:[
            {value:'*'},
            {value: 'socialLink,contattoLink,logoHeader,logoFooter,shareLinks,headerLinks,favicon,footerLinks,conditionLinks', level: 0},
            {value: 'socialLink.icon,contattoLink.icon,shareLinks.icon', level : 1}
        ]
    });

    if (!postData || !configData)
        return NextjsUtils.returnNotFoundObject();

    return NextjsUtils.returnServerSidePropsObject({
        post: postData,
        configData : configData
    });

}
