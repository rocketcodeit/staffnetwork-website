export interface StrapiQueryParams {
    pagination?: {page: number, pageSize: number},
    populate?: {value: string, level?: number}[],
    sort?: string[],
    filter? : {field:string[],operator: FilterOperator, value:string}[],
}


export enum FilterOperator{
    equal = "eq",
    equalCaseInsensitive = "eqi",
    contains = "contains" ,
    containsCaseInsensitive = "containsi"
}