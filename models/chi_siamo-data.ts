import {TeamMember} from "./team-member";

export interface ChiSiamoData {
    title: string,
    descriptionAboveTheFold: string,
    img?: string
    story: {
        title: string,
        description : string
    },
    staff: {
        title: string,
        description : string,
    }
}
