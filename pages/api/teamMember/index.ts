import type { NextApiRequest, NextApiResponse } from 'next'
import {ITeamMember} from "../../../models/ITeamMember";

const team : ITeamMember[] = [
    { name : "Nicola" , surname : "Ciano" , img :"/assets/img/person1.png", profession: "UX Designer" },
    { name : "Ignazio" , surname : "Catanzaro" , img :"/assets/img/person1.png", profession: "Capo Supremo" },
    { name : "Nicola" , surname : "Ciano" , img :"/assets/img/person1.png", profession: "UX Designer" },
    { name : "Ignazio" , surname : "Catanzaro" , img :"../assets/img/person1.png", profession: "Capo Supremo" },
    { name : "Nicola" , surname : "Ciano" , img :"/assets/img/person1.png", profession: "UX Designer" },
    { name : "Ignazio" , surname : "Catanzaro" , img :"/assets/img/person1.png", profession: "Capo Supremo" },
    { name : "Nicola" , surname : "Ciano" , img :"/assets/img/person1.png", profession: "UX Designer" },
    { name : "Ignazio" , surname : "Catanzaro" , img :"/assets/img/person1.png", profession: "Capo Supremo" },
];


export default (req: NextApiRequest, res: NextApiResponse) => {
    const {limit} = req.query;

    res.status(200).json(Array.isArray(limit) || !limit ? team : team.slice(0,+limit) );
}