import {NextApiRequest, NextApiResponse} from "next";
import {posts} from "./PostData";

export default (req:NextApiRequest, res:NextApiResponse) => {
    const {slug} = req.query;

    const post = posts.find( (post) => post.slug === slug   );

    if(post){
        res.status(200).json(post);
    }
    res.status(404);


}