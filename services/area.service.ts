import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {IArea} from "../config/models/IArea";

export class AreaService extends BaseStrapiService<IArea> {

    constructor() {
        super("areas", StrapiResourceType.collection);
    }

    mapForFind(res: any): IArea {
        return {
            slug : res.attributes.slug,
            name : res.attributes.titolo,
            short_description : res.attributes.summary,
            description : res.attributes.description,
            img : res.attributes.image.data && process.env.BACKEND_URL + res.attributes.image.data.attributes.url,
            activities : res.attributes.servizi?.map((activity: any, index : number) =>{
                return {
                    title: activity.titolo,
                    description: activity.descrizione
                }
            })
        }
    }
}
