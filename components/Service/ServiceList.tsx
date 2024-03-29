import React, {useEffect, useState} from "react";
import styles from "../../styles/Service.module.css"
import {containerSlideUp} from "../../animations";
import {motion} from "framer-motion";
import {IService} from "../../models/IService";
import {ServiceItem} from "./ServiceItem";
import {ServiceArea} from "../../models/service-area";
import {ServiceBuyableItem} from "./ServiceBuyableItem";

export interface IServiceListProps {
    itemsCount? : number,
    pageCount?: number,
    currentPage? : number
    areaCategory? : ServiceArea
    services: IService[],
    loading? : boolean,
    cartList?: boolean
}

export function ServiceList (props : IServiceListProps){


    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show" viewport={{once:true}} className={styles.list} >

            {props.services.map((item, index) => {

                if(props.cartList && item.buyable)
                    return <ServiceBuyableItem key={item.slug} link={`/servizi/${item.slug}`} title={item.title} price={item.buyable?.price} discountPrice={item.buyable?.discountPrice} />

                return <ServiceItem key={item.slug} img={item.img} link={`/servizi/${item.slug}`} title={item.title}
                                    subtitle={item.area?.map((item) => item.title).join(',')}
                                    summary={item.details.summary}  />
                }
            )}
        </motion.div>
    )
}



