import { NextApiRequest, NextApiResponse} from "next";
import {IAnnouncement} from "../../../models/IAnnouncement";
import {announcements} from "./announcementData";

export default  (req:NextApiRequest, res:NextApiResponse) => {
    const {limit} = req.query;

    res.status(200).json(Array.isArray(limit) || !limit ? announcements : announcements.slice(0,+limit) );
}