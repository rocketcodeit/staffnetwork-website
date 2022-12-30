
export interface ITeamMember{
    slug: string,
    name : string,
    surname : string,
    img : string,
    profession : string,
    experience? : string,
    education? : string,
    link?: ICommercialLink[],
    linkedin? : string,


}

export interface ICommercialLink {
    name: string,
    icon? : string,
    text : string,
    url : string,
}
