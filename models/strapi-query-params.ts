export interface StrapiQueryParams {
    pagination?: {page: number, pageSize: number},
    populate?: {value: string, level?: number}[],
    sort?: string[]
}
