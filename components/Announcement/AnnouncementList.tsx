import React, {useEffect, useState} from "react";
import styles from "../../styles/Service.module.css"
import {containerSlideUp} from "../../animations";
import {motion} from "framer-motion";
import {IService} from "../../models/IService";
import {AnnouncementItem} from "./AnnouncementItem";
import {IAnnouncement} from "../../models/IAnnouncement";
import moment from "moment/moment";
import {ServiceArea} from "../../models/service-area";

export interface IAnnouncementListProps {
    itemsCount? : number,
    pageCount?: number,
    currentPage? : number
    areaCategory? : ServiceArea
    announcements: IAnnouncement[],
    loading? : boolean
}

export function AnnouncementList (props : IAnnouncementListProps){


    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show" viewport={{once:true}} className={styles.list} >
            {props.announcements.map((item, index) => {

                const listsTitle = item.recipients?.map((i) =>  i.title);
                return <AnnouncementItem key={index}
                                         link={`/bandi/${item.slug}`}
                                         title={item.title}
                                         subtitle={item.contributionType ? item.contributionType.join(',') : ''}
                                         date={item.details.expirationDate ? moment(item.details.expirationDate).format('DD.MM.yyyy') : "Nessuna scadenza"}
                                         summary={item.details.summary}
                                         list={listsTitle}
                        />
                }
            )}
        </motion.div>
    )
}



