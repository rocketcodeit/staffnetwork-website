import React, {useEffect, useState} from "react";
import styles from "../../styles/Service.module.css"
import {containerSlideUp} from "../../animations";
import {motion} from "framer-motion";
import {Service} from "../../models/service";
import {ServiceItem} from "./ServiceItem";
import {Post} from "../../models/post";
import {ServiceArea} from "../../models/service-area";
import {PostCategory} from "../../models/post-category";

export interface IServiceListProps {
    itemsCount? : number,
    pageCount?: number,
    currentPage? : number
    areaCategory? : ServiceArea
    services: Service[],
    loading? : boolean
}

export function ServiceList (props : IServiceListProps){


    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show" viewport={{once:true}} className={styles.list} >
            {props.services.map((item, index) => {
                return <ServiceItem key={item.slug} img={item.img} link={`/servizi/${item.slug}`} title={item.title} subtitle={item.title} summary={item.details.summary}  />
                }
            )}
        </motion.div>
    )
}



