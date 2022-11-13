import {IHeaderConfiguration} from "./IHeaderConfiguration";
import {IFooterConfiguration} from "./IFooterConfiguration";

export interface IWebsiteConfiguration{
    headerConfiguration : IHeaderConfiguration,
    footerConfiguration : IFooterConfiguration,
    positionOffice? : string,
    openingDaysHours? : string,
    emailContact : string,
    phoneContact : string,
}