import React from "react";
import {ITeamMember} from "../../models/ITeamMember";
import styles from "../../styles/TeamMember.module.css"

function TeamMember(props : ITeamMember){
    return(
      <div className={styles.item}>
        <img src={props.img}/>
        <h4 className={styles.item__name}>{props.name +" "+ props.surname}</h4>
        <h5 className={styles.item__profession}>{props.profession}</h5>
      </div>
    );
}

export default TeamMember;