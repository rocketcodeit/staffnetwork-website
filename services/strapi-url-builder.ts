export class StrapiUrlBuilder {
    private _resource: string;
    private _parameters: string[] | undefined = [];
    private _pagination: {page: number, pageSize: number} | undefined;
    private _populate: {value: string, level?: number}[] = [];

    private _sort: string[] = [];

    constructor(resource: string) {
        this._resource = resource;
    }

    public addPathParameter(parameter: string) {
        this._parameters?.push(parameter);
        return this;
    }

    public setPagination(pagination?: {page: number, pageSize: number}) {
        this._pagination = pagination;
        return this;
    }

    public addPopulate(populate: string, level?: number) {
        this._populate?.push({value: populate, level: level});
        return this;
    }

    public addSort(field?: string) {

        if(!field)
            return this;

        this._sort.push(field);
    }

    public setPopulate(populate?: { value: string, level?: number }[]) {

        if(!populate)
            return this;

        this._populate = populate;
        return this;
    }

    public build(): string {
        return this.generateStrapiEndpoint();
    }

    private generateStrapiEndpoint(): string {

        let url = `/api/${this._resource}`

        if(this._parameters && this._parameters.length > 0) {
            url += '/';
            this._parameters.forEach((p, i) => {
                url += p;

                if(i < (this._parameters!.length - 1))
                    url += '/';
            })
        }

        const queryParams: string[] = [];

        if(this._pagination || this._populate || this._sort)
            url += '?';
        else
            return url;

        if(this._pagination)
            queryParams.push(`pagination[page]=${this._pagination.page}&pagination[pageSize]=${this._pagination.pageSize}`);

        if(this._populate.length > 0) {
            this._populate.forEach((populateValue, i) => {
                queryParams.push(populateValue.level !== undefined ? `populate[${populateValue.level}]=${populateValue.value}` : `populate=${populateValue.value}`);
            })
        }

        if(this._sort.length > 0) {

            if(this._sort.length === 1) {
                queryParams.push(`sort=${this._sort[0]}`)
            } else {
                this._sort.forEach((sortValue, index) => {
                    queryParams.push(`sort[${index}]=${sortValue}`)
                })
            }
        }

        url += queryParams.join('&');

        return url;
    }
}
