import React from "react";
import {TeamMember} from "../../models/team-member";
import styles from "../../styles/TeamMember.module.css"
import {itemFade} from "../../animations";
import {motion} from "framer-motion";
import Link from "next/link";

export interface TeamMemberItemProps {
    member: TeamMember,
}

function TeamMemberItem(props : TeamMemberItemProps){
    return(
      <motion.div variants={itemFade} className={styles.item}>
        <img src={props.member.img}/>
        <Link href={`/team-member/${props.member.slug}`}>
            <h4 className={styles.name}>{props.member.name +" "+ props.member.surname}</h4>
            <h5 className={styles.profession}>{props.member.profession}</h5>
        </Link>
      </motion.div>
    );
}

export default TeamMemberItem;
