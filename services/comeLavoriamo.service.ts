import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {PostCategory} from "../models/post-category";
import {HomeData} from "../models/home-data";
import {ComeLavoriamoData} from "../models/come-lavoriamo-data";

export class ComeLavoriamoService extends BaseStrapiService<ComeLavoriamoData> {

    constructor() {
        super("come-lavoriamo", StrapiResourceType.single);
    }

    mapForSingle(res: any): ComeLavoriamoData {
        const data = {
            title: res.attributes.titolo,
            descriptionAboveTheFold: res.attributes.descrizione,
            img : process.env.BACKEND_URL + res.attributes.img.data.attributes.url,
            bloccoMetodo: {
                title : res.attributes.metodo.titoloMetodo,
                description : res.attributes.metodo.descrizioneMetodo,
                step : res.attributes.metodo.step?.map((s : any,i : number) =>{
                    return {
                        title : s.titolo,
                        description: s.descrizione
                    }
                })
            },
            bloccoDirettiva: {
                title : res.attributes.metodo.titoloDirettive,
                description : res.attributes.metodo.descrizioneDirettive,
                img: process.env.BACKEND_URL + res.attributes.imgDirettiva.data.attributes.url,
                direttiva : res.attributes.metodo.direttiva?.map((d : any,i : number) =>{
                    return {
                        title : d.titolo,
                        description: d.descrizione
                    }
                })
            },
            contatti:{
                title: res.attributes.contatti.titolo,
                description:  res.attributes.contatti.descrizione,
            }
        };

        console.log(data);
        return data;
    }
}
