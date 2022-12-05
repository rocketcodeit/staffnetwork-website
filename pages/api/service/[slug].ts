import type { NextApiRequest, NextApiResponse } from 'next'
import {services} from "./ServiceData"

export default (req:NextApiRequest, res:NextApiResponse) => {
    const {slug} = req.query;

    const service = services.find( (service) => service.slug === slug   );

    if(service){
        res.status(200).json(service);
    }
    res.status(404);


}