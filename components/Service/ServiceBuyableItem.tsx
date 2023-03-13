import {itemFade} from "../../animations";
import styles from "../../styles/Service.module.css";
import Link from "next/link";
import {motion} from "framer-motion";
import React from "react";

export interface IServiceBuyableProps{
    img? : string,
    link : string,
    title: string,
    price : number,
    discountPrice? : number,
}

export function ServiceBuyableItem(props: IServiceBuyableProps){
    return (
        <motion.div variants={itemFade} className={styles.item}>
            <div className={styles.itemBoxText}>
                <Link className={"h-full block"} href={`${props.link}`}>
                    <h4 className={styles.itemTitle}>{props.title}</h4>
                    <div className={"flex flex-wrap flex-row gap-3 w-full justify-end"}>
                        {props.discountPrice ?
                            <div className={"flex flex-row items-center gap-1"}>
                                <del className={"text-gray-600"}>{props.price}€</del>
                                <h4>{props.discountPrice}€</h4>
                            </div> :
                            <div>{props.price}€</div> }
                    </div>

                </Link>
            </div>

        </motion.div>
    )
}