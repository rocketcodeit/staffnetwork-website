export interface AnnouncementDetails {
    publicationDate?: string,
    summary: string
    startDate?: string,
    expirationDate?: string,
    financialCosts?: string,
    other?: {
        id: string,
        title: string
        value: any
    } []
}
