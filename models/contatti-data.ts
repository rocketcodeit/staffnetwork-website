import {TeamMember} from "./team-member";

export interface ContattiData {
    title: string,
    descriptionAboveTheFold: string,
    img?: string
    form :{
        title: string,
        description : string,
    },
    map?: {
        accessToken : string
        style:  string,
        zoom : number,
        position?:{
            longitude: number,
            latitude: number
        },
        containerStyle?:{
            height: string,
            width: string,
        }
    }
}
