import React from "react";
import styles from "../../styles/Home.module.css";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import ServiceList from "../../components/Service/ServiceList";

export default function I2ndex(){
    return (
        <div className={styles.container}>

            <section>
                <div className="container">
                    <BreadCrumbs mappedPaths={config} showHome={true}  />
                    <h1>Servizi</h1>
                    <ServiceList />
                </div>

            </section>

        </div>
    )
}