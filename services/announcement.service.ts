import {BaseStrapiService2Types, StrapiResourceType} from "./base-strapi.service";
import {IAnnouncement, IAnnouncementList} from "../models/IAnnouncement";

export class AnnouncementService extends BaseStrapiService2Types<IAnnouncement, IAnnouncementList> {

    constructor() {
        super("announcements", StrapiResourceType.collection);
    }

    mapForFind(res: any): IAnnouncementList {
        return {
            slug: res.attributes.slug,
            title: res.attributes.titolo,
            img : res.attributes.image.data && res.attributes.image.data.attributes.url,
            details:{
                summary: res.attributes.summary,
                startDate : res.attributes.inizio ?? res.attributes.inizio,
                expirationDate : res.attributes.scadenza ??  res.attributes.scadenza,

            },
            description: res.attributes.descrizione,
            recipients : res.attributes.destinatari.data?.map((d: any, index : number) => {
                return {
                    id: d.id,
                    title: d.attributes.descrizione
                }
            }),
            regions:  res.attributes.regioni.data &&  res.attributes.regioni.data?.map((regione: any) => {
                return regione.attributes.nome
            }),
        }
    }

    mapForSingle(res: any): IAnnouncement {
        return {
            slug: res.attributes.slug,
            title: res.attributes.titolo,
            img : res.attributes.image.data && res.attributes.image.data.attributes.url,
            details:{
                summary: res.attributes.summary,
                startDate : res.attributes.inizio ?? res.attributes.inizio,
                expirationDate : res.attributes.scadenza ??  res.attributes.scadenza,

            },
            description: res.attributes.descrizione,
            recipients : res.attributes.destinatari.data?.map((d: any, index : number) => {
                return {
                    id: d.id,
                    title: d.attributes.descrizione
                }
            }),
            regions:  res.attributes.regioni.data &&  res.attributes.regioni.data?.map((regione: any) => {
                return regione.attributes.nome
            }),
            provinces :  res.attributes.province.data &&  res.attributes.province.data?.map((provincia : any) => {
                return provincia.attributes.nome
            }),
            investimentType : res.attributes.tipoInvestimento.data?.attributes.descrizione,
            contributionType : res.attributes.tipoContributo && res.attributes.tipoContributo.data?.map((contribute : any) => {
                return contribute.attributes.descrizione
            }),

            obj : res.attributes.specifiche.map((spec : any, index : number) => {
                return{
                    id: index,
                    title : spec.titolo,
                    value : spec.descrizione,
                }
            })
        }
    }

}
