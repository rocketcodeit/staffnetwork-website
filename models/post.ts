import {PostCategory} from "./post-category";

export interface Post {
    slug: string,
    name : string,
    date? : string,
    img : string,
    categories : PostCategory[] ,
    description : string,
    featured? : boolean
}

