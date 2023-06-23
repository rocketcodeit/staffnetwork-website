import {BaseStrapiService, StrapiResourceType} from "./base-strapi.service";
import {PostCategory} from "../models/post-category";
import {HomeData} from "../models/home-data";

export class HomeService extends BaseStrapiService<HomeData> {

    constructor() {
        super("home", StrapiResourceType.single);
    }

    mapForSingle(res: any): HomeData {
        return {
            title: res.attributes.title,
            callToAction: res.attributes.callToAction,
            descriptionAboveTheFold: res.attributes.descriptionAboveTheFold,
            datiStatistici: res.attributes.datiStatistici,
            imgAboveTheFold: res.attributes.imgAboveTheFold,
            imgAree: res.attributes.imgAree,
            imgDati: res.attributes.imgDati,
            imgPartnership: res.attributes.imgPartnership,
            partnership: res.attributes.partnership,
            servizi: res.attributes.servizi,
            staff: res.attributes.staff,
            dataSeo: {
                title : res.attributes.datiHomeSeo.title,
                description: res.attributes.datiHomeSeo.description,
            },
            sliderShow: res.attributes.sliderShow && res.attributes.sliderShow.map((itemSlider : any) => {
                return{
                    preTitle: itemSlider.preTitle,
                    title: itemSlider.title,
                    description: itemSlider.description,
                    img: itemSlider.img.data.attributes.url,
                    buttons : itemSlider.button.map((itemBtn : any) => {
                        return{
                            title: itemBtn.title,
                            link: itemBtn.href
                        }
                    })
                }
            })
        };
    }
}
