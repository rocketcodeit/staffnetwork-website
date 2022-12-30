import type { NextApiRequest, NextApiResponse } from 'next'
import {ITeamMember} from "../../../models/ITeamMember";
import {team} from "../teamMember/teamMemberData"


export default (req: NextApiRequest, res: NextApiResponse) => {
    const {limit} = req.query;

    res.status(200).json(Array.isArray(limit) || !limit ? team : team.slice(0,+limit) );
}