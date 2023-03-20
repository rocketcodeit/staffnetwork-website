import {BaseStrapiService, BaseStrapiService2Types, StrapiResourceType} from "./base-strapi.service";
import {IService, IServiceList} from "../models/IService";
import {IDataForm, IDataQuote} from "../models/dataForm";
import {number} from "prop-types";
import {AxiosResponse} from "axios";
import {StrapiQueryParams} from "../models/strapi-query-params";


export class CartService extends BaseStrapiService<IDataQuote>{
    constructor() {
        super("preventivis", StrapiResourceType.collection);
    }

    mapForSingle(res: any): IDataQuote {
        return res;
    }

    public bindData (data:IDataForm, services: IService[]) : IDataQuote{
        const dataInfo : IDataQuote = {
            name: data.name,
            surname: data.surname,
            email: data.email,
            phone: data.phone,
            CodiceFiscale: data.fiscalCode,
            PartitaIva: data.vatNumber,
            RagioneSociale: data.companyName,
            ServiziAcquistati : services.map((item) => {
                return{
                    slug: item.slug,
                    titolo: item.title,
                    prezzo: item.buyable?.discountPrice ?? item.buyable?.price
                }
            })
        }

        return dataInfo;
    }
    postData(data:IDataQuote): Promise<AxiosResponse<any> | void> {

        return super.postData(data);
    }




}
