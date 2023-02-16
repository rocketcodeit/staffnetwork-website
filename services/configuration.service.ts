import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {PostCategory} from "../models/post-category";

export class ConfigurationService extends BaseStrapiService<any> {

    constructor() {
        super("configurazione", StrapiResourceType.single);
    }

    mapServerResultToModel(res: any): any {
        return res;
    }
}
