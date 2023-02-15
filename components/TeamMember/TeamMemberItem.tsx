import React from "react";
import {ITeamMember} from "../../models/ITeamMember";
import styles from "../../styles/TeamMember.module.css"
import {itemFade} from "../../animations";
import {motion} from "framer-motion";
import Link from "next/link";

export interface TeamMemberItemProps {
    member: ITeamMember,
}

function TeamMemberItem(props : TeamMemberItemProps){
    return(
      <motion.div variants={itemFade} className={styles.item}>
        <img src={props.member.img}/>
        <Link href={`/teamMember/${props.member.slug}`}>
            <h4 className={styles.item__name}>{props.member.name +" "+ props.member.surname}</h4>
            <h5 className={styles.item__profession}>{props.member.profession}</h5>
        </Link>
      </motion.div>
    );
}

export default TeamMemberItem;
