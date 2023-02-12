import React, {useEffect, useState} from "react";
import styles from "../../styles/Service.module.css"
import {containerSlideUp} from "../../animations";
import {motion} from "framer-motion";
import {IService, IServiceArea} from "../../models/IService";
import {AnnouncementItem} from "./AnnouncementItem";
import {IAnnouncement} from "../../models/IAnnouncement";

export interface IAnnouncementListProps {
    itemsCount? : number,
    pageCount?: number,
    currentPage? : number
    areaCategory? : IServiceArea
    announcements: IAnnouncement[],
    loading? : boolean
}

export function AnnouncementList (props : IAnnouncementListProps){


    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show" viewport={{once:true}} className={styles.list} >
            {props.announcements.map((item, index) => {
                return <AnnouncementItem key={item.slug} img={item.img} link={`/bandi/${item.slug}`} title={item.title} subtitle={item.title} summary={item.details.summary}  />
                }
            )}
        </motion.div>
    )
}



