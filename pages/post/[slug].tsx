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

export default function PostPage(props : { post : IPost}){



    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.4,ease: "easeOut"}}>
            <div className="container">
                <BreadCrumbs mappedPaths={config} showHome={true} transformDynamicPath={path => {
                    if(path === "[slug]"){
                        return props.post.name
                    }
                    return path;
                }} />
                <img className="postPage__image" src={props.post.img} />
                <h1 className="font-medium text-4xl mb-4">{props.post.name}</h1>
                <span className="postPage__data">{moment(props.post.date).format('DD.MM.yyyy')}</span>

                <div className="postPage__content">
                    <p className="max-w-5xl w-8/12">{props.post.description}</p>
                    <div className="w-3/12">
                        <h3 className="font-medium text-2xl">Categorie</h3>
                        <div className="postPage__categories">
                            {
                                props.post.categories.map((category) => {
                                    return  <div className="postPage__category"> {category.name} </div>
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
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