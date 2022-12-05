export interface IService {
    slug: string,
    name: string,
    img? : string,
    short_description : string,
    description? : string,
    methods? : IServiceMethod[],
    results? : IServiceResult[],
    url? : string
}

export interface IServiceMethod{
    title: string,
    description: string
}

export interface IServiceResult{
    number: string,
    title?: string
    description: string
}