import {BaseStrapiService, BaseStrapiService2Types, StrapiResourceType} from "./base-strapi.service";
import {Post, PostDetail} from "../models/postDetail";

export class PostService extends BaseStrapiService2Types<PostDetail, Post> {

    constructor() {
        super("posts", StrapiResourceType.collection);
    }

    mapForSingle(res: any): PostDetail {
        return {
            slug : res.attributes.slug,
            name : res.attributes.title,
            date : res.attributes.date,
            img: res.attributes.cover.data.attributes.url,
            description : res.attributes.content,
            featured : res.attributes.featured,
            categories: res.attributes.post_categories.data.map((category : any) => {
                return {
                    name : category.attributes.name,
                    slug : category.attributes.slug,
                }
            })
        }
    }

    mapForFind(res: any): Post {
        return {
            slug : res.attributes.slug,
            name : res.attributes.title,
            date : res.attributes.date,
            img: res.attributes.cover.data && res.attributes.cover.data.attributes.url,
            description : res.attributes.content,
            featured : res.attributes.featured,
            except : res.attributes.riassunto
        }
    }
}
