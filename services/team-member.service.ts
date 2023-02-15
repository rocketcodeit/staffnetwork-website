import httpClient from "./http-client";
import {ITeamMember} from "../models/ITeamMember";
import {StrapiUrlBuilder} from "./strapi-url-builder";

export class TeamMemberService {

    /**
     * Get team member by slug
     * @param slug Slug of team member, ex: pippo-rossi
     */
    public getBySlug(slug: string): Promise<ITeamMember | undefined> {

        const url =
            new StrapiUrlBuilder("members")
                .addPathParameter(slug)
                .setPopulate('*')
                .build();

        return httpClient.get(url)
            .then((res: any) => {
                return this.mapServerResultToModel(res.data.data);
            })
            .catch(() => {
                return undefined;
            });
    }

    /**
     * Get a list of team members
     * @param limit limit the results
     */
    public find(limit?: number): Promise<ITeamMember[] | undefined> {

        const url =
            new StrapiUrlBuilder("members")
                .setPopulate('*')
                .setPagination(limit ? {page: 1, pageSize: limit} : undefined)
                .build();

        return httpClient.get(url)
            .then((res: any) => {
                return res.data.data.map((member: any) => this.mapServerResultToModel(member));
            })
            .catch((err) => {
                return [];
            });
    }

    public mapServerResultToModel(res: any): ITeamMember {
        const obj: ITeamMember = {
            slug: res.attributes.slug,
            name: res.attributes.nome,
            surname: res.attributes.cognome,
            img: res.attributes.image.data && process.env.BACKEND_URL + res.attributes.image.data.attributes.url,
            profession: res.attributes.ruolo,
            link: res.attributes.links?.map((link: any, index: number) => {
                return {
                    text: link.title,
                    url: link.href,
                }
            }),
            customFields: res.attributes.dettagliEsperienze?.map((item: any, index: number) => {
                return {
                    id: +index,
                    title: item.titolo,
                    value: item.descrizione
                }
            })
        }

        return obj;
    }
}
