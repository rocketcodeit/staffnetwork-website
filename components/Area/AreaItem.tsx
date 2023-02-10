import React from "react";
import {IArea} from "../../config/models/IArea";
import styles from "../../styles/Area.module.css";
import {blockTextReveal, itemSlideUp} from "../../animations";
import {motion} from "framer-motion";
import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

function AreaItem(props : IArea){
    return(

            <motion.div variants={itemSlideUp} className={styles.item}>
                <h4 className={styles.title}>{props.name}</h4>
                <motion.div className={styles.except} dangerouslySetInnerHTML={{__html:props.short_description}}/>
                <Link href={`/area/${props.slug}`} className={`btn-arrow ${styles.button}`}>
                    <p>Scopri di più</p>
                    <ArrowRightIcon className="w-6 stroke-primary-600"/>
                </Link>
            </motion.div>


    );
}

export default AreaItem;