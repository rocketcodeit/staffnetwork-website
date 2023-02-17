import {AnnouncementDetails} from "./announcement-details";
import {AnnouncementaArea} from "./announcementa-area";
import {AnnouncementeCost} from "./announcemente-cost";
import {AnnouncementRecipient} from "./announcement-recipient";

export interface IAnnouncement extends IAnnouncementList{
    area? : AnnouncementaArea,
    provinces? :  string[],
    investimentType : string,
    contributionType : string,
    link?: {
        text: string,
        href: string
    }[],
    obj?: {
        id: string,
        title: string
        value: any
    }[],
    buyable?:AnnouncementeCost,
    requestForm?:{
        title:string,
        text: string,
        field:{
            id: string,
            type: string,
            size: 100 | 50 | 33,
            placeholder?: string,
            required: boolean,
            pattern?: string        //for phone number input field
            options?:{              //for select field
                option:{
                    id?:string,
                    title:string,
                    value:string,
                    selected:boolean
                    disabled?: boolean
                }[]
            }
        }[]
        button:{
            id:string,
            type:string,
            text:string,
            icon?: any

        }[]
    }
}


export interface IAnnouncementList {
    title: string,
    slug: string,
    img?: string
    details : AnnouncementDetails,
    description: string,
    recipients?: AnnouncementRecipient[],
    regions? :  string[],
}
