import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {PostCategory} from "../models/post-category";

export class ConfigurationService extends BaseStrapiService<any> {

    constructor() {
        super("configurazione", StrapiResourceType.single);
    }

    mapForFind(res: any): any {
        return res;
    }
}
