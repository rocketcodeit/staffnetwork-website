import React, {useEffect, useRef, useState} from 'react';
import PostItem from "./PostItem";
import {IPost} from "../../models/IPost";
import {motion, useInView} from "framer-motion";
import {containerSlideUp} from "../../animations";
import {posts} from "../../pages/api/post/PostData";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {set} from "immutable";

export interface IPostProps{
    itemsCount? : number,
    pageCount?: number,
    currentPage? : number
    data: IPost[],
}

function PostList (props : IPostProps){

    const [posts,setPosts] = useState<IPost[]>(props.data);

    useEffect(() => {
        if(props.itemsCount){
            setPosts(props.data.slice(0,+props.itemsCount));
        }
    },[])





    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show"
                    className="PostListArray grid lg:grid-cols-3 grid-cols-1 gap-5">
            {posts.map((item, index) =>{
                    return <PostItem key={index} {...item} />
                })
            }
        </motion.div>
    )
}




export default PostList;