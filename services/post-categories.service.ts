import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {PostCategory} from "../models/post-category";
import {Post, PostDetail} from "../models/postDetail";

export class PostCategoriesService extends BaseStrapiService<PostCategory> {

    constructor() {
        super("post-categories", StrapiResourceType.collection);
    }

    mapForSingle(res: any): PostCategory {
        return {
            id: res.id,
            name: res.attributes.name,
            slug: res.attributes.slug,
        }
    }
}
