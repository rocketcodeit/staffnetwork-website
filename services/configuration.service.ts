import {BaseStrapiService, BaseStrapiService2Types, StrapiResourceType} from "./base-strapi.service";
import {ConfigurationData, ConfigurationDataFull} from "../models/configuration-data";
import getConfig from "next/config";

export class ConfigurationService extends BaseStrapiService2Types<ConfigurationDataFull, ConfigurationData> {

    constructor() {
        super("configurazione", StrapiResourceType.single);
    }

    mapForSingle(res: any): ConfigurationDataFull {
        return{
            headerLinks : res.attributes.headerLinks.map((headerLink : any) => {
                return{
                    href: headerLink.href,
                    title: headerLink.title,
                    afterTitle:  headerLink.afterTitle,
                    beforeTitle: headerLink.beforeTitle,
                    button : headerLink.button,
                    subItems : headerLink.subItems ? headerLink.subItems.map((subItem : any) => {
                        return {
                            href: subItem.href,
                            title: subItem.title
                        }
                    }) : null
                }
            }),
            footerLogo : res.attributes.logoFooter.data.attributes.url,
            footerLinks : res.attributes.footerLinks.map((footerLink : any) => {
                return{
                    href: footerLink.href,
                    title: footerLink.title,
                    afterTitle:  footerLink.afterTitle,
                    beforeTitle: footerLink.beforeTitle,
                    button : footerLink.button,
                }
            }),
            socialLinks: res.attributes.socialLink.map((social: any, index: number) => {
                return {
                    href: social.href,
                    beforeTitle: social.beforeTitle,
                    title: social.title,
                    afterTitle: social.afterTitle,
                    icon: social.icon.data.attributes.url
                }
            }),
            conditionLinks : res.attributes.conditionLinks.map((conditionLink : any) => {
                return{
                    href: conditionLink.href,
                    title: conditionLink.title,
                    afterTitle:  conditionLink.afterTitle,
                    beforeTitle: conditionLink.beforeTitle,
                    button : conditionLink.button,
                }
            }),

            headerLogo : res.attributes.logoHeader.data.attributes.url,
            faviconLogo : res.attributes.favicon.data.attributes.url,
            positionOffice : res.attributes.indirizzo,
            openingDaysHours: res.attributes.orariApertura,
            contactLinks : res.attributes.contattoLink.map((contact : any,index: number) => {
                return {
                    href: contact.href,
                    title: contact.title,
                }
            })

        }
    }

    mapForLayout(res: any) : ConfigurationDataFull{
        return {
            ...this.mapForSingle(res),
            headerLinks : res.attributes.headerLinks.map((headerLink : any) => {
                return{
                    href: headerLink.href,
                    title: headerLink.title,
                    afterTitle:  headerLink.afterTitle,
                    beforeTitle: headerLink.beforeTitle,
                    button : headerLink.button,
                    subItems : headerLink.subItems.map((subItem : any) => {
                                return {
                                    href: subItem.href,
                                    title: subItem.title
                                }
                        })
                }
            }),
            footerLogo : res.attributes.logoFooter.data.attributes.url,
            footerLinks : res.attributes.footerLinks.map((footerLink : any) => {
                return{
                    href: footerLink.href,
                    title: footerLink.title,
                    afterTitle:  footerLink.afterTitle,
                    beforeTitle: footerLink.beforeTitle,
                    button : footerLink.button,
                }
            }),
            socialLinks: res.attributes.socialLink.map((social: any, index: number) => {
                return {
                    href: social.href,
                    beforeTitle: social.beforeTitle,
                    title: social.title,
                    afterTitle: social.afterTitle,
                    icon: social.icon.data.attributes.url
                }
            }),
            conditionLinks : res.attributes.conditionLinks.map((conditionLink : any) => {
                return{
                    href: conditionLink.href,
                    title: conditionLink.title,
                    afterTitle:  conditionLink.afterTitle,
                    beforeTitle: conditionLink.beforeTitle,
                    button : conditionLink.button,
                }
            }),
        }
    }
    mapForFind(res: any): ConfigurationData {
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
