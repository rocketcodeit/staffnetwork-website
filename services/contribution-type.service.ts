import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";

export interface IContributionType{
    description : string
}
export class ContributionTypeService extends BaseStrapiService<IContributionType>{

    constructor() {
        super('contribution-types', StrapiResourceType.collection);
    }

    mapForSingle(res: any): IContributionType {
        return{
            description: res.attributes.descrizione
        }
    }
}