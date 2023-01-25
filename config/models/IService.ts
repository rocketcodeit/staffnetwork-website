export interface IService {
    id?:number,
    slug: string,
    name: string,
    img? : string,
    short_description : string,
    description? : string,
    activities? : IServiceMethod[],
    methods? : IServiceMethod[],
    results? : IServiceResult[],
    url? : string
}

export interface IServiceMethod{
    title: string,
    description: string
}

export interface IServiceResult{
    number: number,
    term : string,
    title?: string
    description?: string
}
