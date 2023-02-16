export interface IArea {
    id?:number,
    slug: string,
    name: string,
    img? : string,
    short_description : string,
    description? : string,
    activities? : IAreaMethod[],
    methods? : IAreaMethod[],
    results? : IAreaResult[],
    url? : string
}

export interface IAreaMethod{
    title: string,
    description: any
}

export interface IAreaResult{
    number: number,
    term : string,
    title?: string
    description?: string
}
