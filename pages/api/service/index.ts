import type { NextApiRequest, NextApiResponse } from 'next'

import {services} from "./ServiceData"

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {limit} = req.query;

    res.status(200).json(Array.isArray(limit) || !limit ? services : services.slice(0,+limit) );
}