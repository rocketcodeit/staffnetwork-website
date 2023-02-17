export interface ComeLavoriamoData {
    title: string,
    descriptionAboveTheFold: any,
    img : string,
    callToAction?: {link: string, title: string},
    bloccoMetodo: {
        title? : string,
        description? : any,
        img? : string,
        step : {
            img? : string,
            title: string,
            description : any,
        }[],
    },
    bloccoDirettiva: {
        title? : string,
        description : any,
        img? : string,
        direttiva : {
            img? : string,
            title: string,
            description : any,
        }[],
    },

    contatti: {
        title: string,
        description : any,
    },
}
