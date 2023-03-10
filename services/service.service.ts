import {BaseStrapiService, BaseStrapiService2Types, StrapiResourceType} from "./base-strapi.service";
import {IService, IServiceList} from "../models/IService";

export class ProductService extends BaseStrapiService2Types<IService, IServiceList> {

    constructor() {
        super("services", StrapiResourceType.collection);
    }

    mapForFind(res: any): IServiceList {
        return{
            slug : res.attributes.slug,
            title: res.attributes.title,
            details:{
                summary: res.attributes.summary
            },
            description: res.attributes.description,
            area: res.attributes.aree && res.attributes.aree.data?.map((area : any) => {
                return{
                    slug:area.attributes.slug,
                    title:area.attributes.titolo
                }
            }),
        }
    }


    mapForSingle(res: any): IService {
        return {
            slug : res.attributes.slug,
            title: res.attributes.title,
            area: res.attributes.aree && res.attributes.aree.data?.map((area : any) => {
                    return{
                        slug:area.attributes.slug,
                        title:area.attributes.titolo
                    }
                }),
            details:{
                summary : res.attributes.summary,
                obj: res.attributes.dettagli?.map((det : any, index: number) => {
                    return {
                        id: +index,
                        title: det.titolo,
                        value : det.descrizione
                    }
                })
            },
            description : res.attributes.description,
            img : res.attributes.image.data && process.env.BACKEND_URL + res.attributes.image.data.attributes.url,
            obj : res.attributes.specifiche?.map((spec : any, index : number) => {
                return{
                    id: index,
                    title : spec.titolo,
                    value : spec.descrizione,
                }
            }),
            buyable : res.attributes.prezzo && {
                title: res.attributes.prezzo.titolo,
                description: res.attributes.prezzo.descrizione,
                price : res.attributes.prezzo?.prezzo,
                discountPrice : res.attributes.prezzo?.prezzoScontato,
                currency : "€"
            },
            requestForm:{
                title: res.attributes.titoloForm,
                text: res.attributes.descrizioneForm
            }
        }
    }
}
