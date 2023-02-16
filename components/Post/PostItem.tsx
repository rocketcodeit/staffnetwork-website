import React from "react";
import {PostDetail} from "../../models/postDetail";
            import {ArrowRightIcon} from "@heroicons/react/24/outline";

            import moment from "moment";
            import Link from "next/link";
            import {motion} from "framer-motion";
            import {itemFade} from "../../animations";
            import styles from "../../styles/Post.module.css";

            function PostItem(props : PostDetail){

            return(
            <motion.div animate variants={itemFade} className={styles.item}>
            <img className={styles.imgItem} src={props.img}/>

            <div  className={styles.textItem}>
                <span>{moment(props.date).format('DD.MM.yyyy')}</span>
                <h4 className="text-2xl font-medium">{props.name}</h4>
                <div dangerouslySetInnerHTML={{__html:props.description}} className="line-clamp-3 mt-3" />

                <Link className={styles.linkItem} href={`/post/${encodeURIComponent(props.slug)}`}><p>Continua a leggere </p>
                    <ArrowRightIcon className="ml-1 w-4 stroke-[2.5px] mb-[3px]"/></Link>
                </div>


        </motion.div>
    );
}

export default PostItem;
