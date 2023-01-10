import {IHeaderConfiguration} from "./IHeaderConfiguration";
import {IFooterConfiguration} from "./IFooterConfiguration";
import {IMenuItem} from "./IMenuItem";

export interface IWebsiteConfiguration{
    headerConfiguration : IHeaderConfiguration,
    footerConfiguration : IFooterConfiguration,
    socialMenu? : IMenuItem[],
    positionOffice? : string,
    openingDaysHours? : string,
    emailContact : IMenuItem,
    phoneContact : IMenuItem,
    shareSocial?: IMenuItem[],
}