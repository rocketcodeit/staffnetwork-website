export class StrapiUrlBuilder {
    private _resource: string;
    private _parameters: string[] | undefined = [];
    private _pagination: {page: number, pageSize: number} | undefined;
    private _populate: string | undefined;

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

    public setPopulate(populate: string) {
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

        if(this._pagination || this._populate)
            url += '?';
        else
            return url;

        if(this._pagination)
            queryParams.push(`pagination[page]=${this._pagination.page}&pagination[pageSize]=${this._pagination.pageSize}`);

        if(this._populate)
            queryParams.push(`populate=${this._populate}`);

        url += queryParams.join('&');

        return url;
    }
}
