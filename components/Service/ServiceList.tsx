import React, {useEffect, useRef, useState} from "react";
import {IService} from "../../config/models/IService";
import Service from "./Service";
import {container, containerSlideUp} from "../../animations";
import {motion, useInView} from "framer-motion";


export interface IServiceProps{
    itemsCount? : number
    currentPage? : number,
    services : IService[]
    //chiedere a ignazio
}

function ServiceList (props : IServiceProps){
    // Stato per tenere traccia dello stato del fetch dei dati
    const [loading, setLoading] = useState(true);

    const [services,setServices] = useState<IService[]>([]);

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });


    useEffect(() => {
        let url = "/api/service"
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
                    return <Service key={index} {...item} />
                })}
            </motion.div>


    )
}

export default ServiceList;

