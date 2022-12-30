import type { NextApiRequest, NextApiResponse } from 'next'
import {team} from "./teamMemberData"

export default (req:NextApiRequest, res:NextApiResponse) => {
    const {slug} = req.query;

    const member = team.find( (member) => member.slug === slug   );

    if(member){
        res.status(200).json(member);
    }
    res.status(404);


}