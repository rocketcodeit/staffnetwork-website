import {NextApiRequest, NextApiResponse} from "next";
import {announcements} from "./announcementData";

export default (req:NextApiRequest, res:NextApiResponse) => {
    const {slug} = req.query;

    const announcement = announcements.find( (announcement) => announcement.slug === slug   );

    if(announcement){
        res.status(200).json(announcement);
    }
    res.status(404);
}