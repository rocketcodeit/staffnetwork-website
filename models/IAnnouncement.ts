export interface IAnnouncement{
    title: string,
    slug: string,
    area : IAnnouncementArea[],
    img?: string
    details : IAnnouncementDetails,
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
          placeholder?: string
        }[]
        price : number,
        discountPrice?: number
    }
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

export interface IAnnouncementDetails{
    territory?:string,
    publicationDate?: string,
    summary: string
    expirationDate?:string,
    recipients?: string,
    financialCosts?: string,
    obj?:{
        id: string,
        title: string
        value: any
    } []
}

export interface IAnnouncementArea{
    id?: number,
    slug: string,
    title:string,
    default?: boolean
}