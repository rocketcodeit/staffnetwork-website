import React from "react";
import {IArea} from "../../config/models/IArea";
import styles from "../../styles/Area.module.css";
import {blockTextReveal, itemSlideUp} from "../../animations";
import {motion} from "framer-motion";
import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

interface IAreaItemProps{
    img?: string | null,
    link: string,
    title:string,
    subtitle?: string,
    summary:string
}
function AreaItem(props : IAreaItemProps){
    return(

            <motion.div variants={itemSlideUp} className={styles.item}>
                {props.img && <img src={props.img} /> }
                <div className={"lg:px-8 px-6"}>
                    <h4 className={styles.title}>{props.title}</h4>
                    <motion.div className={styles.except} dangerouslySetInnerHTML={{__html:props.summary}}/>
                </div>

                <Link href={`${props.link}`} className={`btn-arrow ${styles.button}`}>
                    <p>Scopri di più</p>
                    <ArrowRightIcon className="w-6 stroke-primary-600"/>
                </Link>
            </motion.div>


    );
}

export default AreaItem;