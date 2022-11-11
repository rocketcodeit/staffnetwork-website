import {IPostCategory} from "./IPostCategory";

export interface IPost{
    slug: string,
    name : string,
    date? : string,
    img : string,
    categories : IPostCategory[],
    description : string,
    featured? : boolean
}