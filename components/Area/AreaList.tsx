import React, {useEffect, useRef, useState} from "react";
import {IArea} from "../../config/models/IArea";
import AreaItem from "./AreaItem";
import {container, containerSlideUp} from "../../animations";
import {motion, useInView} from "framer-motion";


export interface IServiceProps{
    itemsCount? : number
    currentPage? : number,
    services : IArea[]
    //chiedere a ignazio
}

function AreaList (props : IServiceProps){
    // Stato per tenere traccia dello stato del fetch dei dati
    const [loading, setLoading] = useState(true);

    const [services,setServices] = useState<IArea[]>([]);

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });


    useEffect(() => {
        let url = "/api/area"
        if(props.itemsCount){
            url+="?limit="+props.itemsCount;
        }
        fetch(url)
            .then((res) => {
                res.json().then((res2) =>{
                    setServices(res2);
                    setLoading(false);
                })
            })
    },[loading]);
    return(

            <motion.div variants={containerSlideUp}
                        initial="hidden" whileInView="show" viewport={{once:true}}
                        className="grid xl:grid-cols-3 md:grid-cols-2 gap-4"
                        style={{
                            opacity: isInView ? 1 : 0,
                        }}>
                {props.services.map((item, index) => {
                    return <AreaItem key={index} {...item} />
                })}
            </motion.div>


    )
}

export default AreaList;

