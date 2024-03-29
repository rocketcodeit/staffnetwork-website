import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {PostCategory} from "../models/post-category";
import {HomeData} from "../models/home-data";
import {ComeLavoriamoData} from "../models/come-lavoriamo-data";

export class HowWeWorkService extends BaseStrapiService<ComeLavoriamoData> {

    constructor() {
        super("come-lavoriamo", StrapiResourceType.single);
    }

    mapForSingle(res: any): ComeLavoriamoData {
        const data : ComeLavoriamoData = {
            title: res.attributes.titolo,
            descriptionAboveTheFold: res.attributes.descrizione,
            img :res.attributes.img.data && res.attributes.img.data.attributes.url,
            bloccoMetodo: {
                title : res.attributes.metodo.titoloMetodo,
                description : res.attributes.metodo.descrizioneMetodo,
                step: res.attributes.metodo.step.map((i : any) => {
                    return{
                        title: i.titolo,
                        description: i.descrizione
                    }
                })

            },
            bloccoDirettiva: {
                title : res.attributes.metodo.titoloDirettive,
                description : res.attributes.metodo.descrizioneDirettive,
                img:res.attributes.metodo.imgDirettiva.data && res.attributes.metodo.imgDirettiva.data.attributes.url,
                direttiva: res.attributes.metodo.direttiva.map((i : any) => {
                    return{
                        title: i.titolo,
                        description: i.descrizione
                    }
                })
            },
            contatti:{
                title: res.attributes.contatti.titolo,
                description:  res.attributes.contatti.descrizione,
            },
            dataSeo: {
                title : res.attributes.datiComeLavoriamoSeo.title,
                description: res.attributes.datiComeLavoriamoSeo.description,
            }
        };

        console.log(data.contatti);
        return data;
    }
}
