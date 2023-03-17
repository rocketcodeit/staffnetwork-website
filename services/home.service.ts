import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {PostCategory} from "../models/post-category";
import {HomeData} from "../models/home-data";

export class HomeService extends BaseStrapiService<HomeData> {

    constructor() {
        super("home", StrapiResourceType.single);
    }

    mapForSingle(res: any): HomeData {
        return {
            title: res.attributes.title,
            callToAction: res.attributes.callToAction,
            descriptionAboveTheFold: res.attributes.descriptionAboveTheFold,
            datiStatistici: res.attributes.datiStatistici,
            imgAboveTheFold: res.attributes.imgAboveTheFold,
            imgAree: res.attributes.imgAree,
            imgDati: res.attributes.imgDati,
            imgPartnership: res.attributes.imgPartnership,
            partnership: res.attributes.partnership,
            servizi: res.attributes.servizi,
            staff: res.attributes.staff,
            dataSeo: {
                title : res.attributes.datiSeo.title,
                description: res.attributes.datiSeo.description,
                keyWords : res.attributes.datiSeo.keyWords?.map((item : any) =>  item.keyWord)
            }
        };
    }
}
