import {StrapiUrlBuilder} from "./strapi-url-builder";
import httpClient from "./http-client";
import {PaginatedResult} from "../models/paginated-result";
import {StrapiQueryParams} from "../models/strapi-query-params";

export abstract class BaseStrapiService<T, K> {
    private _strapiResource: string;
    private readonly _resourceType: StrapiResourceType;

    protected constructor(strapiResource: string, resourceType: StrapiResourceType) {
        this._strapiResource = strapiResource;
        this._resourceType = resourceType;
    }

    public getBySlug(slug: string, params?: StrapiQueryParams): Promise<T | undefined> {

        if(this._resourceType == StrapiResourceType.single)
            throw new Error('Cannot call getBySlug with single resource type')

        const url =
            new StrapiUrlBuilder(this._strapiResource)
                .addPathParameter(slug)
                .setPopulate(params?.populate ?? [{value: '*'}])
                .build();

        return httpClient.get(url)
            .then((res: any) => {
                return this.mapForSingle(res.data.data);
            })
            .catch(() => {
                return undefined;
            });
    }

    public find(params?: StrapiQueryParams): Promise<PaginatedResult<T> | undefined> {

        if(this._resourceType == StrapiResourceType.single)
            throw new Error('Cannot call getBySlug with single resource type')

        const urlBuilder =
            new StrapiUrlBuilder(this._strapiResource)
                .setPopulate(params?.populate ?? [{value: '*'}])
                .setPagination(params?.pagination ?? undefined);

        if(params?.sort && params?.sort.length > 0) {
            params.sort.forEach((sortValue) => {
                urlBuilder.addSort(sortValue);
            })
        }


        if(params?.filter && params.filter.length > 0){
            params.filter.forEach((i, index) => {
                urlBuilder.addFilter(i.field,i.operator,i.value);
            })
        }



        const url = urlBuilder.build();


        return httpClient.get(url)
            .then((res: any) => {
                const data = res.data.data.map((member: any) => this.mapForFind(member));
                return {
                    data: data,
                    paginationInfo: res.data.meta.pagination
                }
            })
            .catch((err) => {
                return {
                    data: [],
                    paginationInfo: {page: 1, pageCount: 1, pageSize: 1, total: 1}
                };
            });
    }

    public getSingle(params?: StrapiQueryParams): Promise<T | undefined> {
        if(this._resourceType == StrapiResourceType.collection)
            throw new Error('Cannot call getSingle with collection resource type')

        const url =
            new StrapiUrlBuilder(this._strapiResource)
                .setPopulate(params?.populate ?? [{value: '*'}])
                .build();

        return httpClient.get(url)
            .then((res: any) => {
                const data = this.mapForSingle(res.data.data);
                return data;
            })
            .catch((err) => {
                return undefined;
            });
    }

    abstract mapForFind(res: any): T;

    abstract mapForSingle(res:any): T;
}

export enum StrapiResourceType {
    single = 0,
    collection = 1,
}
