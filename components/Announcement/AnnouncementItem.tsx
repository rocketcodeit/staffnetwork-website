import React from "react";
import styles from "../../styles/Announcement.module.css"
import {itemFade, itemSlideUp} from "../../animations";
import {motion} from "framer-motion";
import Link from "next/link";
import {CalendarIcon, UserIcon} from "@heroicons/react/24/outline";

interface IAnnouncementItemProps{
    img?: string,
    link: string,
    title:string,
    subtitle?: string,
    summary:any,
    date: string,
    list?: string[]
}

export function AnnouncementItem(props : IAnnouncementItemProps){
    return(

        <motion.div variants={itemFade} className={styles.item}>
            <div className={styles.itemBoxText}>
                <Link className={"h-full block"} href={`${props.link}`}>

                    <h4 className={styles.itemTitle}>{props.title}</h4>
                    {props.subtitle && <h5  className={styles.itemArea}>{props.subtitle}</h5>}
                    <div className={styles.itemDetails}>

                        <div className={styles.itemSingleDetail}>
                            <CalendarIcon className="w-5 stroke-primary stroke-[2px]"/>
                            <div dangerouslySetInnerHTML={{__html:props.date}} />
                        </div>
                        {props.list && <div className={styles.itemSingleDetail}>
                            <UserIcon className="w-5 stroke-primary stroke-[2px]"/>
                            <div>
                                {props.list.join(',')}
                            </div>
                        </div> }
                    </div>

                    <div className={"flex flex-row justify-between align-bottom items-end gap-8"}>
                        <div className={styles.itemDescription} dangerouslySetInnerHTML={{__html:props.summary}} />
                        <div className={`linkItem linkItemPrimary text-end w-2/12`}>
                            <div className={"text-primary-600 w-fit mr-0 ml-auto"}>Scopri di più</div>
                        </div>
                    </div>

                </Link>
            </div>
            <img className={styles.itemImg} src={props.img}/>


        </motion.div>

    );
}

