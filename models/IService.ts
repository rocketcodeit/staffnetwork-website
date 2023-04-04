import {ServiceDetails} from "./service-details";
import {ServiceArea} from "./service-area";

export interface IService {
    title: string,
    slug: string,
    area?: ServiceArea[],
    img?: string
    details : ServiceDetails,
    description: string,
    recipients?: string,
    link?: {
        text: string,
        href: string
    }[],
    obj?: {
        id: string,
        title: string
        value: any
    }[],
    buyable?:{
        field?:{
          id: string,
          type: string,
          description?: string
        }[],
        title?:string,
        description?: string
        price : number,
        discountPrice?: number
    }
    requestForm?:{
        title:string,
        text: string,
        field?:{
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
        button?:{
            id:string,
            type:string,
            text:string,
            icon?: any

        }[]
    }
}

export interface IServiceList{
    title: string,
    slug: string,
    img? : string,
    area?: ServiceArea[],
    details : ServiceDetails,
    description: string,
}