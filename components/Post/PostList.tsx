import React, {useEffect, useRef, useState} from 'react';
import PostItem from "./PostItem";
import {IPost, IPostCategory} from "../../models/IPost";
import {motion, useInView} from "framer-motion";
import {containerSlideUp} from "../../animations";
import {posts} from "../../pages/api/post/PostData";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {set} from "immutable";

export interface IPostProps{
    itemsCount? : number,
    pageCount?: number,
    currentPage? : number
    categories? : IPostCategory[]
    posts: IPost[],
    loading? : boolean
}


function PostList (props : IPostProps){

    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show"
                    className="PostListArray grid min-h-[600px] lg:grid-cols-3 grid-cols-1 gap-5">
            {props.loading && (<motion.div
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.3}}
                            className={"h-full w-full flex items-center justify-center text-center justify-items-center"}>sta caricando..</motion.div>)}
            {!props.loading && props.posts.map((item, index) =>{
                    return <PostItem key={index} {...item} />
                })
            }
        </motion.div>
    )
}




export default PostList;