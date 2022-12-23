import React, {useEffect, useState} from "react";
import {ITeamMember} from "../../models/ITeamMember";
import TeamMember from "./TeamMember";
import styles from "../../styles/TeamMember.module.css"
import {containerSlideUp} from "../../animations";
import {motion} from "framer-motion";

export interface ITeamMemberProps{
    itemsCount? : number
     //chiedere a ignazio
}

function TeamMemberList (props : ITeamMemberProps){

    const [teamMembers,setTeamMembers] = useState<ITeamMember[]>([]);

    useEffect(() => {
        let url = "/api/teamMember"
        if(props.itemsCount){
            url+="?limit="+props.itemsCount;
        }
        fetch(url)
            .then((res) => {
                res.json().then((res2) =>{
                    setTeamMembers(res2);
                })
            })
    },[]);
    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show" viewport={{once:true}} className={styles.list} >
            {teamMembers.map((item) => {
               // return <TeamMember key={item.nimpame}>{item}</TeamMember>
                return <TeamMember  {...item} />
            })}
        </motion.div>
    )
}

export default TeamMemberList;

