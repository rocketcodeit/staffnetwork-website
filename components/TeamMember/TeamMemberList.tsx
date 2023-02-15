import React from "react";
import {ITeamMember} from "../../models/ITeamMember";
import TeamMemberSingle from "./TeamMemberItem";
import styles from "../../styles/TeamMember.module.css"
import {containerSlideUp} from "../../animations";
import {motion} from "framer-motion";

export interface TeamMemberListProps{
    members : ITeamMember[],
}

export default function TeamMemberList (props : TeamMemberListProps){
    return(
        <motion.div variants={containerSlideUp} initial="hidden" whileInView="show" viewport={{once:true}} className={styles.list} >
            {props.members.map((item, index ) => {
                return <TeamMemberSingle key={index} member={item} />
            })}
        </motion.div>
    )
}





