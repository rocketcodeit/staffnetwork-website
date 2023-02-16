import React, {useEffect, useRef, useState} from "react";
import {IArea} from "../../config/models/IArea";
import AreaItem from "./AreaItem";
import {container, containerSlideUp} from "../../animations";
import {motion, useInView} from "framer-motion";


export interface IAreaProps{
    itemsCount? : number
    currentPage? : number,
    areas : IArea[]
    //chiedere a ignazio
}

function AreaList (props : IAreaProps){
    // Stato per tenere traccia dello stato del fetch dei dati
    const [loading, setLoading] = useState(true);

    const [services,setServices] = useState<IArea[]>([]);

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    return(

            <motion.div variants={containerSlideUp}
                        initial="hidden" whileInView="show" viewport={{once:true}}
                        className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
                {props.areas.map((item, index) => {
                    return <AreaItem key={index} {...item} />
                })}
            </motion.div>


    )
}

export default AreaList;

