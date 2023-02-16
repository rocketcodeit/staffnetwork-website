import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {PostCategory} from "../models/post-category";

export class PostCategoriesService extends BaseStrapiService<PostCategory> {

    constructor() {
        super("post-categories", StrapiResourceType.collection);
    }

    mapForFind(res: any): PostCategory {
        return {
            id: res.id,
            name: res.attributes.name,
            slug: res.attributes.slug,
        }
    }
}
