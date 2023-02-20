import React, {useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";
import {ServiceList} from "../../components/Service/ServiceList";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {IAnnouncement} from "../../models/IAnnouncement";
import {AnnouncementList} from "../../components/Announcement/AnnouncementList";
import {PostDetail} from "../../models/postDetail";
import Checkbox from "../../components/Checkbox/Checkbox";
import {IService} from "../../models/IService";
import {IArea} from "../../config/models/IArea";
import {AnnouncementService} from "../../services/announcement.service";
import {NextjsUtils} from "../../services/nextjs-utils";
import {RegionService} from "../../services/region.service";
import {useRouter} from "next/router";
import {AnnouncementTerritory} from "../../models/announcement-territory";
import {FilterOperator} from "../../models/strapi-query-params";

let url ="http://localhost:1337";


interface AnnouncementsProps{
    announcements: IAnnouncement[],
    pageCount?: number,
    currentPage : number,
    regions?: AnnouncementTerritory[],
    regionsFilterData : any


}

export default function AnnouncementPage({announcements,
                                             pageCount, currentPage,
                                             regions, regionsFilterData} : AnnouncementsProps){

    const [effectivePage,setEffectivePage] = useState(currentPage);
    const [loading, setLoading] = useState(false);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const [data, setData] = useState<IAnnouncement[]>(announcements);
    const navigation = useRouter();

    const [regionFilters,setRegionFilters] = useState<any[]>(regionsFilterData);


    const queryParams = { page: '', regions: '' };

    useEffect(() => {
        setData(announcements);
    }, [announcements])


    const filterCategories = (event : any) => {
        setEffectivePage(1);
        if (event.target.checked) {
            setRegionFilters(array => [...array, event.target.name]);
        } else {
            setRegionFilters( regionFilters.filter(element  => element !== event.target.name));
        }
    }

    useEffect(() => {
        if(!firstLoad) {
            setLoading(true);
            queryParams.page = effectivePage.toString();
            queryParams.regions = regionFilters.map((c) => c).join(',');


            navigation.replace({
                pathname: navigation.basePath,
                query: { ...navigation.query, ...queryParams },
            })
                .then(() => {
                    setLoading(false);
                })

        } else {
            setFirstLoad(false);
        }


    }, [effectivePage,regionFilters])


    return (
        <>

                <div className={styles.container}>
                    <section className={"mt-8"}>
                        <div className="container">
                            <BreadCrumbs mappedPaths={config} showHome={true}  />
                            <h1 className="mb-6">Bandi</h1>

                            <div className={"flex flex-row flex-wrap justify-between"}>
                                <div className={"w-full lg:w-3/12 mb-6 lg:mb-0 relative h-fit"}>
                                    <div className={"filters containerLeftBefore"}>
                                        <h4 className={"mb-3"}>Filtri</h4>
                                        {regions?.map((r: AnnouncementTerritory, index : number) =>
                                            <div key={index}>
                                                <Checkbox
                                                    title={r.region}
                                                    name={r.region.toLowerCase()}
                                                    checked={regionFilters.includes(r.region.toLowerCase())}
                                                    handleChange={filterCategories}
                                                />
                                            </div>
                                        )}


                                    </div>
                                </div>
                                <div className={"w-full lg:w-8/12"}>
                                    {loading && <motion.div  initial={{opacity:0}}  animate={{opacity:1}} transition={{duration:0.3}}
                                                             className={"h-full w-full  flex l-0 bg-white items-center justify-center text-center justify-items-center"}>sta caricando..</motion.div>}

                                    {!loading &&  <AnnouncementList announcements={data!} /> }
                                </div>

                                <div className={"w-full"}>
                                    <ul className={'paginationItems'}>
                                        {[...Array(pageCount)].map((e, i) =>
                                            <li onClick={() => {
                                                setEffectivePage(i+1)
                                            }} className={` paginationItem ${effectivePage==(i+1) ? 'selected' : ''}`} key={i}>
                                                <div className="w-full" >{i+1}</div>
                                            </li>)
                                        }
                                    </ul>
                                </div>

                            </div>


                        </div>

                    </section>
                </div>
        </>
    );
}


// This gets called on every request
export const getServerSideProps: GetServerSideProps<any> = async (context) =>{
    // Fetch data from external API
    const {page,regions} = context.query;

    const currentPage = +(page ?? 1);
    const currentRegionsFilter = regions ? regions.split(',') : [];

    const announcementService = new AnnouncementService();


    const announcements = await announcementService.find({
        pagination:{page: currentPage, pageSize:1},
        populate:[
            {value:"*"}
        ],
        filter : currentRegionsFilter?.map((item : any) => {
            return{
                field:["regioni","nome"],operator:FilterOperator.containsCaseInsensitive, value: item.toString()}
        })
    })

    const regionService = new RegionService();
    const regionsData = await regionService.find({populate:[{value:"*"}]});


    if(currentPage > (announcements?.paginationInfo.pageCount ?? 1) || (!announcements))
        return NextjsUtils.returnNotFoundObject();

    return NextjsUtils.returnServerSidePropsObject({
        announcements: announcements?.data,
        pageCount : announcements?.paginationInfo.pageCount,
        currentPage : currentPage,
        regions : regionsData?.data,
        regionsFilterData : currentRegionsFilter,
    });

}
