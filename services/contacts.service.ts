import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {ContattiData} from "../models/contatti-data";

export class ContactsService extends BaseStrapiService<ContattiData> {

    constructor() {
        super("contatti", StrapiResourceType.single);
    }

    mapForSingle(res: any): ContattiData {
        return {
            title: res.attributes.titolo,
            descriptionAboveTheFold: res.attributes.descrizione,
            form: {
                title: res.attributes.titoloForm,
                description: res.attributes.descrizioneForm
            },
            map:{
                accessToken:res.attributes.mappa.accessToken,
                style: res.attributes.mappa.style,
                zoom: res.attributes.mappa.zoom,
                position:{
                    latitude: res.attributes.mappa.latitudine,
                    longitude: res.attributes.mappa.longitudine
                }
            }
        };
    }
}
