import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";

export interface ICustomerTarget{
    description : string
}
export class CustomerTargetService extends BaseStrapiService<ICustomerTarget>{

    constructor() {
        super('customertargets', StrapiResourceType.collection);
    }

    mapForSingle(res: any): ICustomerTarget {
        return{
            description: res.attributes.descrizione
        }
    }
}