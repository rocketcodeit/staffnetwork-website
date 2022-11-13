import {IMenuItem} from "./IMenuItem";
import {IMenuIcon} from "./IMenuIcon";

export interface IFooterConfiguration{
    primaryMenu : IMenuItem[],
    secondaryMenu : IMenuItem[],
    privacyMenu : IMenuItem[],
    socialMenu? : IMenuItem[],
    logo : string,

}