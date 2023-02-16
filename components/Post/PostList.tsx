import React, {useEffect, useRef, useState} from 'react';
import PostItem from "./PostItem";
import {PostDetail} from "../../models/postDetail";
import {motion, useInView} from "framer-motion";
import {containerSlideUp} from "../../animations";
import {posts} from "../../pages/api/post/PostData";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {set} from "immutable";
import {PostCategory} from "../../models/post-category";

export interface IPostProps{
    itemsCount? : number,
    pageCount?: number,
    currentPage? : number
    categories? : PostCategory[]
    posts: PostDetail[],
    loading? : boolean
}


function PostList (props : IPostProps){

    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show"
                    className="PostListArray grid min-h-[600px] lg:grid-cols-3 grid-cols-1 gap-5">

            {props.posts.map((item, index) =>{
                    return <PostItem key={index} {...item} />
                })
            }
        </motion.div>
    )
}




export default PostList;
