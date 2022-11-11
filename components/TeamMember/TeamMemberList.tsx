import React, {useEffect, useState} from "react";
import {ITeamMember} from "../../models/ITeamMember";
import TeamMember from "./TeamMember";

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
        <div className="container TeamMemberListArray flex flex-flow flex-wrap" >
            {teamMembers.map((item) => {
               // return <TeamMember key={item.nimpame}>{item}</TeamMember>
                return <TeamMember  {...item} />
            })}
        </div>
    )
}

export default TeamMemberList;

