import React, {useState} from "react";
import styles from "../../styles/Home.module.css";
import PostList from "../../components/Post/PostList";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";

export default function I2ndex(){

    const [postLoaded, setPostLoaded] = useState(false);

    return (

        <motion.div className={styles.container}>

            <section>
                <div className="container">
                    <BreadCrumbs mappedPaths={config} showHome={true}  />
                    <h1 className="text-4xl">Articoli</h1>
                    <PostList  />
                </div>

            </section>

        </motion.div>
    )
}