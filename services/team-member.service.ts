import {TeamMember} from "../models/team-member";
import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";

export class TeamMemberService extends BaseStrapiService<TeamMember> {

    constructor() {
        super('members', StrapiResourceType.collection);
    }

    public mapServerResultToModel(res: any): TeamMember {
        const obj: TeamMember = {
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
