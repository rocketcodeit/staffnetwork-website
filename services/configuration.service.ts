import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {ConfigurationData} from "../models/configuration-data";

export class ConfigurationService extends BaseStrapiService<ConfigurationData> {

    constructor() {
        super("configurazione", StrapiResourceType.single);
    }

    mapForSingle(res: any): ConfigurationData {
        return{
            positionOffice : res.attributes.indirizzo,
            openingDaysHours: res.attributes.orariApertura,
            contactLinks : res.attributes.contattoLink.map((contact : any,index: number) => {
                return {
                    href: contact.href,
                    title: contact.title,
                }
            }),
            socialLinks: res.attributes.socialLink.map((social: any, index: number) => {
                return {
                    href: social.href,
                    beforeTitle: social.beforeTitle,
                    title: social.title,
                    afterTitle: social.afterTitle,
                    icon: process.env.BACKEND_URL + social.icon.data.attributes.url
                }
            })
        }
    }
}
