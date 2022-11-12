import {IMenuItem} from "./IMenuItem";

export interface IFooterConfiguration{
    primaryMenu : IMenuItem[],
    secondaryMenu : IMenuItem[],
    privacyMenu : IMenuItem[],
    logo : string,

}