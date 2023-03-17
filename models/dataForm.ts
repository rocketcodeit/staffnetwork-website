export interface IDataForm{
    name?: string,
    surname?: string,
    email: string,
    phone: string,
    vatNumber?: string,
    fiscalCode?:string,
    companyName?:string,
    message?:string
    category?:string,
    pageFrom?: string

}

export interface IDataQuote{
    name?: string,
    surname?: string,
    email: string,
    phone: string,
    CodiceFiscale?: string,
    PartitaIva?:string,
    RagioneSociale?:string,
    ServiziAcquistati: {
        slug: string,
        titolo: string,
        prezzo: number | undefined
    } [],
}


export interface IDataRequest{
    PaginaProvenienza?: string
    Nome?: string,
    Cognome?: string,
    Email: string,
    Telefono: string,
    Messaggio?: string,
    Categoria?: string,

}