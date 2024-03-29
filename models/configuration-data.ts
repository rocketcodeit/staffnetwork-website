
export interface ConfigurationData {
    positionOffice? : string,
    openingDaysHours? : string,
    emailContact?: Link,
    phoneContact?: Link,
    socialLinks?: Link[],
    contactLinks?: Link[],
    shareLinks?: Link[],
}

export interface ConfigurationDataFull extends ConfigurationData{
    headerLogo: string,
    faviconLogo?: string
    footerLogo?: string,
    headerLinks?: Link[],
    footerLinks?: any[],
    conditionLinks?: any[],
}
interface Link {
    href : string,
    id?: any
    beforeTitle?: string,
    title: string,
    icon?: string
    afterTitle?: string,
    button?: boolean,
    subItems?: Link[]
}