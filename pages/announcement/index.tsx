import React, {useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";
import PostList from "../../components/Post/PostList";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";
import {AnnouncementList} from "../../components/Announcement/AnnouncementList";

export default function PostsPage(){
    const [loading, setLoading] = useState(false);

    return (
        <>

                <div className={styles.container}>
                    <section>
                        <p></p>
                        <div className="container">
                            <BreadCrumbs mappedPaths={config} showHome={true}  />
                            <h1 className="text-4xl">Bandi</h1>
                            <AnnouncementList   />
                        </div>

                    </section>
                </div>
        </>
    );
}