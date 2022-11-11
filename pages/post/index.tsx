import React from "react";
import styles from "../../styles/Home.module.css";
import PostList from "../../components/Post/PostList";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";

export default function Index(){
    return (
        <div className={styles.container}>

            <section>
                <div className="container">
                    <BreadCrumbs mappedPaths={config} showHome={true}  />
                    <h1 className="text-4xl">Articoli</h1>
                    <PostList />
                </div>

            </section>

        </div>
    )
}