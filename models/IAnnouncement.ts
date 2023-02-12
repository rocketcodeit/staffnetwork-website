export interface IAnnouncement {
    title: string,
    slug: string,
    area? : IAnnouncementArea,
    img?: string
    details : IAnnouncementDetails,
    description: string,
    recipients?: IAnnouncementRecipient[],
    regions? :  string[],
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
    buyable?:IAnnouncementeCost,
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

export interface IAnnouncementDetails {
    publicationDate?: string,
    summary: string
    startDate?:string,
    expirationDate?:string,
    financialCosts?: string,
    other?:{
        id: string,
        title: string
        value: any
    } []
}

export interface IAnnouncementArea {
    id?: number,
    slug?: string,
    title:string,
    default?: boolean
}

export interface IAnnouncementeCost{
    title?: string,
    description?: string,
    price : number,
    discountPrice?: number
    currency : string
}

export interface IAnnouncementRecipient{
    id?:number,
    title: string | any
    description?: string,
}

export interface IAnnouncementTerritory{
    id?: number,
    slug?: string,
    region: string,
    province?: string,
}