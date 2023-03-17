import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {IDataForm, IDataQuote, IDataRequest} from "../models/dataForm";
import {AxiosResponse} from "axios/index";
import {IService} from "../models/IService";

export class RequestsService extends BaseStrapiService<IDataRequest>{
    constructor(baseUrl? : string) {
        super("requests", StrapiResourceType.collection, baseUrl);
    }

    mapForSingle(res: any): IDataRequest {
        return res;
    }

    public bindData (data:IDataForm) : IDataRequest{
        const dataInfo : IDataRequest = {
            Nome: data.name,
            Cognome: data.surname,
            Email: data.email,
            Telefono: data.phone,
            Messaggio: data.message,
            PaginaProvenienza: data.pageFrom,
            Categoria: data.category
        }
        return dataInfo;
    }

    postData(data:IDataRequest): Promise<AxiosResponse<any> | void> {
        return super.postData(data);
    }




}