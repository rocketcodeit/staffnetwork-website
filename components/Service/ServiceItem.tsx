import React from "react";
import {IService} from "../../models/IService";
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
            {props.img && <img className={styles.itemImg} src={props.img}/> }
            <div className={styles.itemBoxText}>
                <Link className={"h-full block"} href={`${props.link}`}>
                    <h4 className={styles.itemTitle}>{props.title}</h4>
                    {props.subtitle && <h5  className={styles.itemArea}>{props.subtitle}</h5>}

                    <div className={styles.itemDescription} dangerouslySetInnerHTML={{__html:props.summary}} />
                    <div className={`linkItem linkItemPrimary ${styles.itemLink}`}>
                        <a className={"text-primary-600"}>Scopri di più</a>
                    </div>
                </Link>
            </div>

        </motion.div>

    );
}
