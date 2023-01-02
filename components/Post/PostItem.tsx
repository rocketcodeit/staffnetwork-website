import React from "react";
import {IPost} from "../../models/IPost";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

import moment from "moment";
import Link from "next/link";
import {motion} from "framer-motion";
import {itemFade} from "../../animations";
import styles from "../../styles/Post.module.css";

function PostItem(props : IPost){
    return(
        <motion.div variants={itemFade} className={styles.item}>
            <img className="w-full pr-8" src={props.img}/>

            <div className={styles.text}>
                <span>{moment(props.date).format('DD.MM.yyyy')}</span>
                <h4 className="text-2xl font-medium">{props.name}</h4>
                <p className="line-clamp-3 mt-3">{props.description}</p>

                <Link className={styles.link} href={`/post/${props.slug}`}><p>Continua a leggere </p>
                    <ArrowRightIcon className="ml-1 w-4 stroke-[2.5px] mb-[3px]"/></Link>
            </div>


        </motion.div>
    );
}

export default PostItem;