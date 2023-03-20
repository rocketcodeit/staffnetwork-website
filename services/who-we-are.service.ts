import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {ChiSiamoData} from "../models/chi_siamo-data";

export class WhoWeAreService extends BaseStrapiService<ChiSiamoData> {

    constructor() {
        super("chi-siamo", StrapiResourceType.single);
    }

    mapForSingle(res: any): ChiSiamoData {
        return {
            title: res.attributes.titolo,
            descriptionAboveTheFold: res.attributes.descrizione,
            img: res.attributes.media.data && res.attributes.media.data.attributes.url,
            story:{
                title: res.attributes.storia.titolo,
                description: res.attributes.storia.descrizione
            },
            staff:{
                title: res.attributes.staff.titolo,
                description: res.attributes.staff.descrizione
            }
        };
    }
}
