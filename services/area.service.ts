import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {IArea} from "../config/models/IArea";

export class AreaService extends BaseStrapiService<IArea> {

    constructor() {
        super("areas", StrapiResourceType.collection);
    }

    mapServerResultToModel(res: any): IArea {
        return {
            slug : res.attributes.slug,
            name : res.attributes.titolo,
            short_description : res.attributes.summary,
            description : res.attributes.description,

        }
    }
}
