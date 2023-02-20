export interface FilterProps{
    id?: number,
    title: string,
    nameFilter: string,
    categoriesFilter : FilterOption[],
}

interface FilterOption {
    title: string,
    type : "string" | "checkbox",
    items: any[]
}


export default function Filters(props : FilterProps){

}

