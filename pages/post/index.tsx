import React, {useEffect, useState} from "react";
import styles from "../../styles/Post.module.css";
import PostList from "../../components/Post/PostList";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {PostDetail} from "../../models/postDetail";
import {PostService} from "../../services/post.service";
import { useRouter } from 'next/router';
import {PaginatedResult} from "../../models/paginated-result";
import {NextjsUtils} from "../../services/nextjs-utils";
import {PostCategoriesService} from "../../services/post-categories.service";

export default function PostsPage({posts, pageCount,currentPage, categories} : InferGetServerSidePropsType<typeof getServerSideProps>){

    const [effectivePage,setEffectivePage] = useState(currentPage);
    const [loading, setLoading] = useState(false);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const [data, setData] = useState<PostDetail[]>(posts);
    const navigation = useRouter();

    const [blogFilter, setBlogFilter] = useState<{category: any[], pageNumber: number}>({
        category: [],
        pageNumber: 1
    })

    useEffect(() => {
        setData(posts);
    }, [posts])

    useEffect(() => {
        if(!firstLoad) {
            setLoading(true);
            navigation.replace('?page=' + effectivePage)
                .then(() => {
                    setLoading(false);
                })
        } else {
            setFirstLoad(false);
        }
    }, [effectivePage])

    return (
        <>
            <div className={styles.container}>
                <section className={"mt-8"}>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}} className="container">
                        <BreadCrumbs mappedPaths={config} showHome={true} transformDynamicPath={path => {
                            return path;
                        }} />
                        <h1 className={"mb-6"}>Articoli</h1>

                        <PostList posts={data!} />

                        <ul className={styles.paginationItems}>
                            {[...Array(pageCount)].map((e, i) =>
                                <li onClick={() => {
                                    setEffectivePage(i+1)
                                }} className={`${styles.paginationItem} ${effectivePage==(i+1) ? styles.selected : ''}`} key={i}>
                                    <div className="w-full" >{i+1}</div>
                                </li>)
                            }
                        </ul>

                    </motion.div>

                </section>
            </div>
        </>
    );
}
export const getServerSideProps: GetServerSideProps<any> = async (context) =>{

    const {page} = context.query;

    const currentPage = +(page ?? 1);

    const postService = new PostService();
    const postCategoriesService = new PostCategoriesService();

    const posts = await postService.find({pagination: {page: currentPage, pageSize: 2}});
    const categories = await postCategoriesService.find();

    if(currentPage > (posts?.paginationInfo.pageCount ?? 1))
        return NextjsUtils.returnNotFoundObject();

    if(currentPage === 1 && page)
        return NextjsUtils.returnRedirectObject('/blog');

}
