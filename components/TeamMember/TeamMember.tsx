import React from "react";
import {ITeamMember} from "../../models/ITeamMember";
import styles from "../../styles/TeamMember.module.css"
import {itemFade, itemSlideUp} from "../../animations";
import {motion} from "framer-motion";

function TeamMember(props : ITeamMember){
    return(
      <motion.div variants={itemFade} className={styles.item}>
        <img src={props.img}/>
        <h4 className={styles.item__name}>{props.name +" "+ props.surname}</h4>
        <h5 className={styles.item__profession}>{props.profession}</h5>
      </motion.div>
    );
}

export default TeamMember;