import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {TermsConditionsData} from "../models/terms_conditions-data";

export class TermsConditionsService extends BaseStrapiService<TermsConditionsData> {
    constructor() {
        super("termini-e-condizioni", StrapiResourceType.single);
    }

    mapForSingle(res: any): TermsConditionsData {
        return {
            title: res.attributes.title,
            description: res.attributes.description,
            dataSeo:{
                title : res.attributes.datiSeo.title,
                description: res.attributes.datiSeo.description,
            }
        }
    }
}