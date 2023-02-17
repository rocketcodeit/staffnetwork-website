import {IMenuItem} from "../config/models/IMenuItem";


export interface ConfigurationData {
    headerLinks?: any[],
    footerLinks?: any[],
    positionOffice? : string,
    openingDaysHours? : string,
    emailContact?: Link,
    phoneContact?: Link,
    socialLinks?: Link[],
    contactLinks?: Link[]
}


interface Link {
    href : string,
    id?: any
    beforeTitle?: string,
    title: string,
    icon?: string
    afterTitle?: string,
}