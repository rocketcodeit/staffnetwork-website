import {PostCategory} from "./post-category";

export interface PostDetail extends Post{
    categories : PostCategory[],
}

export interface Post {
    slug: string,
    name : string,
    date? : string,
    img : string,
    description : string,
    featured? : boolean
}
