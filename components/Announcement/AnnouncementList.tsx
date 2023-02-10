import React, {useEffect, useState} from "react";
import styles from "../../styles/Announcement.module.css"
import {containerSlideUp} from "../../animations";
import {motion} from "framer-motion";
import {IAnnouncement, IAnnouncementArea} from "../../models/IAnnouncement";
import {AnnouncementItem} from "./Announcement";
import {IPost, IPostCategory} from "../../models/IPost";

export interface IAnnouncementProps{
    itemsCount? : number,
    pageCount?: number,
    currentPage? : number
    areaCategory? : IAnnouncementArea
    services: IAnnouncement[],
    loading? : boolean
}

export function AnnouncementList (props : IAnnouncementProps){


    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show" viewport={{once:true}} className={styles.list} >
            {props.services.map((item) => {
                return <AnnouncementItem key={item.slug} img={item.img} link={`/bandi/${item.slug}`} title={item.title} subtitle={item.title} summary={item.details.summary}  />
                }
            )}
        </motion.div>
    )
}



