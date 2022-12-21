import React, {useEffect, useState} from "react";
import {IService} from "../../config/models/IService";
import Service from "./Service";
import {container} from "../../animations";
import {motion} from "framer-motion";


export interface IServiceProps{
    itemsCount? : number
    //chiedere a ignazio
}

function ServiceList (props : IServiceProps){

    const [services,setServices] = useState<IService[]>([]);

    useEffect(() => {
        let url = "/api/service"
        if(props.itemsCount){
            url+="?limit="+props.itemsCount;
        }
        fetch(url)
            .then((res) => {
                res.json().then((res2) =>{
                    setServices(res2);
                })
            })
    },[]);
    return(

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true}} className="grid xl:grid-cols-3 md:grid-cols-2 gap-4" >
                {services.map((item) => {
                    // return <TeamMember key={item.nimpame}>{item}</TeamMember>
                    return <Service  {...item} />
                })}
            </motion.div>


    )
}

export default ServiceList;

