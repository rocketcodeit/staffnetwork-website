import React from "react";
import styles from "../../styles/Service.module.css"
import {itemFade, itemSlideUp} from "../../animations";
import {motion} from "framer-motion";
import Link from "next/link";

interface IServiceItemProps{
    img?: string,
    link: string,
    title:string,
    subtitle?: string,
    summary:string
}

export function ServiceItem(props : IServiceItemProps){
    return(

        <motion.div variants={itemFade} className={styles.item}>
            <div className={styles.itemBoxText}>
                <Link className={"h-full block relative"} href={`${props.link}`}>
                    <h4 className={styles.itemTitle}>{props.title}</h4>
                    {props.subtitle && <h5  className={styles.itemArea}>{props.subtitle}</h5>}

                    <div className={"flex flex-wrap flex-row gap-3 w-full justify-between"}>
                        <div className={styles.itemDescription} dangerouslySetInnerHTML={{__html:props.summary}} />
                        <div className={`linkItem linkItemPrimary ${styles.itemLink}`}>
                            <div className={"text-primary-600 w-fit mr-0 ml-auto"}>Scopri di più</div>
                        </div>
                    </div>

                </Link>
            </div>

        </motion.div>

    );
}

