import post from "../pages/api/post";
import * as url from "url";

export interface IPost{
    slug: string,
    name : string,
    date? : string,
    img : string,
    categories : IPostCategory[] ,
    description : string,
    featured? : boolean
}

 export interface IPostCategory{
    id?: number,
    name : string,
    slug : string,
    description?: string
}