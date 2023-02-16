import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {Post} from "../models/post";

export class PostService extends BaseStrapiService<Post> {

    constructor() {
        super("posts", StrapiResourceType.collection);
    }

    mapForFind(res: any): Post {
        return {
            slug : res.attributes.slug,
            name : res.attributes.title,
            date : res.attributes.date,
            img: process.env.BACKEND_URL + res.attributes.cover.data.attributes.url,
            description : res.attributes.content,
            featured : res.attributes.featured,
            categories: [
                {name: '', slug: '', description: '', id: 2}
            ]
        }
    }
}
