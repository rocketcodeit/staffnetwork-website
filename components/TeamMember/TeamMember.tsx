import React from "react";
import {ITeamMember} from "../../models/ITeamMember";

function TeamMember(props : ITeamMember){
    return(
      <div className="teamMemberItem w-4/12">
        <img src={props.img}/>
        <h4 className="text-2xl font-medium">{props.name +" "+ props.surname}</h4>
        <h5 className="text-primary-dark">{props.profession}</h5>
      </div>
    );
}

export default TeamMember;