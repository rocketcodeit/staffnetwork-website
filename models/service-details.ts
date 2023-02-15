export interface ServiceDetails {
    territory?: string,
    publicationDate?: string,
    summary: string
    expirationDate?: string,
    recipients?: string,
    financialCosts?: string,
    obj?: {
        id: string,
        title: string
        value: any
    } []
}
