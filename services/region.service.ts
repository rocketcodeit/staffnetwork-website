import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {AnnouncementTerritory} from "../models/announcement-territory";

export class RegionService extends BaseStrapiService<AnnouncementTerritory> {

    constructor() {
        super("regions", StrapiResourceType.collection);
    }

    mapForSingle(res: any): AnnouncementTerritory {
        return {
            region: res.attributes.nome
        };
    }

}