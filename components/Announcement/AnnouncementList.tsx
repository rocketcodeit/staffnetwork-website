import React, {useEffect, useState} from "react";
import styles from "../../styles/Announcement.module.css"
import {containerSlideUp} from "../../animations";
import {motion} from "framer-motion";
import {IAnnouncement, IAnnouncementArea} from "../../models/IAnnouncement";
import {Announcement} from "./Announcement";

export interface IAnnouncementProps{
    itemsCount? : number,
    areaCategory? : IAnnouncementArea
    //chiedere a ignazio
}

export function AnnouncementList (props : IAnnouncementProps){

    const [announcements,setAnnouncements] = useState<IAnnouncement[]>([]);

    useEffect(() => {
        let url = "/api/announcement"
        if(props.itemsCount){
            url+="?limit="+props.itemsCount;
        }
        fetch(url)
            .then((res) => {
                res.json().then((res2) =>{
                    setAnnouncements(res2);
                })
            })
    },[]);
    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show" viewport={{once:true}} className={styles.list} >
            {announcements.map((item) => {
                const areaFound = item.area.find((a) =>  a.id === props.areaCategory?.id);

                if(areaFound != undefined ){
                    return <Announcement key={item.slug} img={item.img} link={`/bandi/${item.slug}`} title={item.title} subtitle={areaFound.title} summary={item.details.summary}  />
                }
            })}
        </motion.div>
    )
}



