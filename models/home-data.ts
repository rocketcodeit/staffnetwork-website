import {HeadData} from "./head-data";

export interface HomeData {
    title: string,
    descriptionAboveTheFold: string,
    callToAction: {link: string, title: string},
    datiStatistici: any,
    staff: any,
    partnership: any,
    servizi: any,
    imgAboveTheFold: any,
    imgAree: any,
    imgDati: any,
    imgPartnership: any
    dataSeo : HeadData,

    sliderShow?: {
       title: string,
       description: string,
       buttons : {link: string, title: string}[]
    }[]
}
