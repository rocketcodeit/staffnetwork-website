import React, {useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";
import {GetServerSideProps} from "next";
import {IAnnouncement} from "../../models/IAnnouncement";
import {AnnouncementList} from "../../components/Announcement/AnnouncementList";

import {AnnouncementService} from "../../services/announcement.service";
import {NextjsUtils} from "../../services/nextjs-utils";
import {RegionService} from "../../services/region.service";
import {useRouter} from "next/router";
import {AnnouncementTerritory} from "../../models/announcement-territory";
import {FilterOperator} from "../../models/strapi-query-params";
import {CustomerTargetService, ICustomerTarget} from "../../services/customer-target.service";
import Filter from "../../components/Filters/Filter";
import SearchBar from "../../components/SearchBar/SearchBar";
import {ContributionTypeService, IContributionType} from "../../services/contribution-type.service";

interface AnnouncementsProps{
    announcements: IAnnouncement[],
    pageCount?: number,
    currentPage : number,
    regions?: AnnouncementTerritory[],
    regionsFilterData : any
    recipients?: ICustomerTarget[],
    recipientsFilterData: any,

    contributionTypes?: IContributionType[],
    contributionTypesFilterData: any,

    titleFilterData : any

}

export default function AnnouncementPage({announcements,
                                             pageCount, currentPage,
                                             regions, regionsFilterData,
                                             recipients,recipientsFilterData,
                                             contributionTypes,contributionTypesFilterData,
                                             titleFilterData} : AnnouncementsProps){

    const [effectivePage,setEffectivePage] = useState(currentPage);
    const [loading, setLoading] = useState(false);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const [data, setData] = useState<IAnnouncement[]>(announcements);
    const navigation = useRouter();

    const [regionFilters,setRegionFilters] = useState<any[]>(regionsFilterData);
    const [recipientFilters,setRecipientFilters] = useState<any[]>(recipientsFilterData);
    const [contributionTypeFilters,setContributionTypeFilters] = useState<any[]>(contributionTypesFilterData);


    const [titleFilters, setTitleFilters] = useState<any>(titleFilterData);

    const queryParams = { page: '', regions: '', recipients: '', contributionTypes: '', title:'' };

    useEffect(() => {
        setData(announcements);
    }, [announcements])

    useEffect(() => {
        if(!firstLoad) {
            setLoading(true);
            queryParams.page = effectivePage.toString();
            queryParams.regions = regionFilters.map((c) => c).join(',');
            queryParams.recipients = recipientFilters.map((c) => c).join(',');
            queryParams.contributionTypes =  contributionTypeFilters.map((c) => c).join(',');
            queryParams.title = titleFilters;

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


    }, [effectivePage,regionFilters, recipientFilters,contributionTypeFilters, titleFilters])


    return (
        <>

                <div className={styles.container}>
                    <section className={"mt-8"}>
                        <div className="container">
                            <BreadCrumbs mappedPaths={config} showHome={true}  />
                            <h1 className="mb-6">Bandi</h1>

                            <div className={"flex flex-row flex-wrap justify-between"}>



                                <div className={"w-full lg:w-3/12 mb-6 lg:mb-0 relative h-fit"}>
                                    <div className={"filters containerLeftBefore flex flex-col gap-4"}>
                                        <h3 className={"mb-2"}>Filtri</h3>
                                        <SearchBar  placeholder={"Cerca"}
                                                    setPage={setEffectivePage}
                                                    setDataFilter={setTitleFilters}
                                                    dataFilter={titleFilters}
                                        />
                                        <Filter setPage={setEffectivePage}
                                                categoriesFilter={
                                                    [
                                                        {   title:"Regioni",
                                                            items: regions?.map((text) => {
                                                                    return {
                                                                        title: text.region,
                                                                    }
                                                                }
                                                            ),
                                                            listItemFiltered: regionsFilterData,
                                                            dataFilter: regionFilters,
                                                            setDataFilter: setRegionFilters,
                                                        },
                                                        {   title:"Destinatari",
                                                            items: recipients?.map((text) => {
                                                                return{
                                                                    title: text.description
                                                                }
                                                            }),
                                                            listItemFiltered: recipientsFilterData,
                                                            dataFilter: recipientFilters,
                                                            setDataFilter: setRecipientFilters,
                                                        },
                                                        {   title:"Tipo di contributo",
                                                            items: contributionTypes?.map((text) => {
                                                                return{
                                                                    title: text.description
                                                                }
                                                            }),
                                                            listItemFiltered: contributionTypesFilterData,
                                                            dataFilter: contributionTypeFilters ,
                                                            setDataFilter: setContributionTypeFilters,
                                                        }
                                                    ]
                                                } />
                                    </div>
                                </div>
                                <div className={"w-full lg:w-8/12"}>
                                    {loading && <motion.div  initial={{opacity:0}}  animate={{opacity:1}} transition={{duration:0.3}}
                                                             className={"h-full w-full  flex l-0 bg-white items-center justify-center text-center justify-items-center"}>sta caricando..</motion.div>}

                                    {!loading &&  <AnnouncementList announcements={data!} /> }
                                    {!loading && (data.length <= 0) && <motion.div  initial={{opacity:0}}  animate={{opacity:1}} transition={{duration:0.3}}
                                                                                                                          className={"h-full w-full  flex l-0 bg-white items-center justify-center text-center justify-items-center"}>La ricerca non ha prodotto alcun risultato</motion.div>}
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
    const {page,regions,recipients,contributionTypes, title} = context.query;

    const currentPage = +(page ?? 1);

    const currentRegionsFilter = regions ? (regions as string).split(',') : [];
    const currentRecipientsFilter = recipients ? (recipients as string).split(',') : [];
    const currentContributionTypesFilter = contributionTypes ? (contributionTypes as string).split(',') : [];

    const currentTitleSearch = title ? (title as string).toLowerCase() : '';
    const announcementService = new AnnouncementService();

    const announcements = await announcementService.find({
        pagination:{page: currentPage, pageSize:10},
        populate:[
            {value:"*"}
        ],
        filter : [

            ...(currentRegionsFilter ? currentRegionsFilter?.map((item : any) => {
            return{
                field:["regioni","nome"],
                operator:FilterOperator.containsCaseInsensitive,
                value: item.toString()}
            }) : []),

            ...(currentRecipientsFilter ? currentRecipientsFilter?.map((item : any) => {
                return{
                    field:["destinatari","descrizione"],
                    operator:FilterOperator.containsCaseInsensitive,
                    value: item.toString()}
            }) : []),
            ...(currentContributionTypesFilter ? currentContributionTypesFilter?.map((item : any) => {
                return{
                    field:["tipoContributo","descrizione"],
                    operator:FilterOperator.containsCaseInsensitive,
                    value: item.toString()}
            }) : []),
            {
                field:["titolo"],
                operator: FilterOperator.containsCaseInsensitive,
                value: currentTitleSearch
            }

        ]
    })

    const regionService = new RegionService();
    const regionsData = await regionService.find({populate:[{value:"*"}]});

    const recipientService = new CustomerTargetService();
    const recipientsData = await recipientService.find();

    const contributionTypeService = new ContributionTypeService();
    const contributionTypesData = await contributionTypeService.find();

    return NextjsUtils.returnServerSidePropsObject({
        announcements: announcements?.data,
        pageCount : announcements?.paginationInfo.pageCount,
        currentPage : currentPage,

        regions : regionsData?.data,
        regionsFilterData : currentRegionsFilter,

        recipients: recipientsData?.data,
        recipientsFilterData : currentRecipientsFilter,

        contributionTypes: contributionTypesData?.data,
        contributionTypesFilterData : currentContributionTypesFilter,

        titleFilterData : currentTitleSearch
    });

}
