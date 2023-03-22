import {TeamMemberService} from "./team-member.service";
import {PostService} from "./post.service";
import {AreaService} from "./area.service";
import {ConfigurationService} from "./configuration.service";
import {HomeService} from "./home.service";
import {PostDetail} from "../models/postDetail";
import {IArea} from "../config/models/IArea";
import {HomeData} from "../models/home-data";
import {TeamMember} from "../models/team-member";
import {PaginatedResult} from "../models/paginated-result";
import {NextjsUtils} from "./nextjs-utils";
import {ConfigurationDataFull} from "../models/configuration-data";

export class BackendFacade {

    get teamMemberService(): TeamMemberService {
        return this._teamMemberService;
    }
    get postService(): PostService {
        return this._postService;
    }
    get areaService(): AreaService {
        return this._areaService;
    }
    get configurationService(): ConfigurationService {
        return this._configurationService;
    }
    get homeService(): HomeService {
        return this._homeService;
    }

    private _teamMemberService = new TeamMemberService();
    private _postService = new PostService();
    private _areaService = new AreaService();
    private _configurationService = new ConfigurationService();
    private _homeService = new HomeService();

    public async getHomeData(): Promise<{posts: PostDetail[], services: IArea[], home: HomeData, layoutData: any, membersTeam: TeamMember[]}> {
        const postsPromise = this.postService.find({pagination: {page: 1, pageSize: 3}});
        const membersPromise = this.teamMemberService.find({pagination: {page: 1, pageSize: 4}});
        const areasPromise = this.areaService.find({pagination: {page: 1, pageSize: 6}, sort: ['id']});
        const configurationPromise = this.configurationService.getSingle();
        const homePromise = this.homeService.getSingle({
                populate: [
                    {value: '*'},
                    {value: 'datiStatistici,staff,partnership,servizi,sliderShow,datiHomeSeo,imgAboveTheFold,imgAree,imgDati,imgPartnership', level: 0},
                    {value: 'datiStatistici.dati,partnership.link,sliderShow.button', level: 1}
                ]
            });

        const promiseResult = await Promise.all([postsPromise, areasPromise, homePromise, configurationPromise, membersPromise]);

        if(!promiseResult)
            return NextjsUtils.returnNotFoundObject();

        const result: any = {
            posts : (promiseResult[0] as (PaginatedResult<PostDetail> | undefined))?.data,
            services : (promiseResult[1] as (PaginatedResult<IArea> | undefined))?.data,
            home : (promiseResult[2] as (HomeData | undefined)),
            layoutData : (promiseResult[3] as (ConfigurationDataFull | undefined)),
            membersTeam : (promiseResult[4] as (PaginatedResult<TeamMember> | undefined))?.data
        }

        return result;
    }

}
