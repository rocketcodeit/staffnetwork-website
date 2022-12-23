import React, {useEffect, useState} from 'react';
import PostItem from "./PostItem";
import {IPost} from "../../models/IPost";
import {motion} from "framer-motion";
import {containerSlideUp} from "../../animations";

export interface IPostProps{
    itemsCount? : number
    //come faccio per il featured
    onPostsLoaded?: () => void;
}

function PostList (props : IPostProps){

    const [posts,setPosts] = useState<IPost[]>([]);
    useEffect(
        () => {
            let url="/api/post"
            if(props.itemsCount){
                url+="?limit="+props.itemsCount;
            }
            fetch(url)
                .then((res) => {
                    res.json().then((res2) => {
                        setPosts(res2)
                    })
                    if(props.onPostsLoaded)
                        props.onPostsLoaded();
                })
        }, []);

    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show" viewport={{once:true}} className="PostListArray grid lg:grid-cols-3 grid-cols-1 gap-5">
            {posts.map((item) =>{
                    return <PostItem {...item} />
                })
            }
        </motion.div>
    )
}


export default PostList;