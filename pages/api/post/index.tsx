import { NextApiRequest, NextApiResponse} from "next";
import {Post} from "../../../models/post";
import {posts} from "./PostData"

export default  (req:NextApiRequest, res:NextApiResponse) => {
    const {limit} = req.query;

    res.status(200).json(Array.isArray(limit) || !limit ? posts : posts.slice(0,+limit) );
}
