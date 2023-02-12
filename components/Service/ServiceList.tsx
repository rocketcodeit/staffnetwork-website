import React, {useEffect, useState} from "react";
import styles from "../../styles/Service.module.css"
import {containerSlideUp} from "../../animations";
import {motion} from "framer-motion";
import {IService, IServiceArea} from "../../models/IService";
import {ServiceItem} from "./ServiceItem";
import {IPost, IPostCategory} from "../../models/IPost";

export interface IServiceListProps {
    itemsCount? : number,
    pageCount?: number,
    currentPage? : number
    areaCategory? : IServiceArea
    services: IService[],
    loading? : boolean
}

export function ServiceList (props : IServiceListProps){


    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show" viewport={{once:true}} className={styles.list} >
            {props.services.map((item, index) => {
                return <ServiceItem key={item.slug} img={item.img} link={`/service/${item.slug}`} title={item.title} subtitle={item.title} summary={item.details.summary}  />
                }
            )}
        </motion.div>
    )
}


