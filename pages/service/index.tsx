import React, {useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";
import PostList from "../../components/Post/PostList";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {motion} from "framer-motion";
import {ServiceList} from "../../components/Service/ServiceList";
import {GetServerSideProps} from "next";
import {IService} from "../../models/IService";
import {IArea} from "../../config/models/IArea";
import Checkbox from "../../components/Checkbox/Checkbox";
import {useRouter} from "next/router";
import {ProductService} from "../../services/service.service";
import {NextjsUtils} from "../../services/nextjs-utils";
import {AreaService} from "../../services/area.service";


interface ServicesProps{
    services: IService[],
    pageCount?: number,
    currentPage : number,
    areas?: IArea[]
}
export default function ServicesPage({services, pageCount, currentPage, areas} : ServicesProps){

    const [effectivePage,setEffectivePage] = useState(currentPage);
    const [loading, setLoading] = useState(false);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const [data, setData] = useState<IService[]>(services);
    const navigation = useRouter();
    const [categories,setCategories] = useState<any[]>([areas]);


    const [blogFilter, setBlogFilter] = useState<{category: any[], pageNumber: number}>({
        category: [],
        pageNumber: 1
    })

    useEffect(() => {
        setData(services);
    }, [services])

    useEffect(() => {
        if(!firstLoad) {
            setLoading(true);
            navigation.replace('?page=' + effectivePage)
                .then(() => {
                    setLoading(false);
                })
        } else {
            setFirstLoad(false);
        }
    }, [effectivePage,categories])



    const filterCategories = (event : any) => {
        if (event.target.checked) {
            setCategories(array => [...array, event.target.name]);
        } else {
            setCategories( categories.filter(element  => element !== event.target.name));
        }

    }


    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}}>

                <div className={styles.container}>
                    <section className={"mt-8"}>
                        <div className="container">
                            <BreadCrumbs mappedPaths={config} showHome={true}  />
                            <h1 className="mb-6">Servizi</h1>

                            <div className={"flex flex-row flex-wrap justify-between"}>
                                <div className={"w-full lg:w-3/12 mb-6 lg:mb-0 relative h-fit"}>
                                    <div className={"filters containerLeftBefore"}>
                                        <h4 className={"mb-3"}>Filtri</h4>
                                        {areas?.map((i: any) =>
                                            <div key={i}>
                                                <Checkbox
                                                    title={i.name}
                                                    name={i.name.toLowerCase()}
                                                    handleChange={filterCategories}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={"w-full lg:w-8/12"}>
                                    {loading && <motion.div  initial={{opacity:0}}  animate={{opacity:1}} transition={{duration:0.3}}
                                                             className={"h-full w-full  flex l-0 bg-white items-center justify-center text-center justify-items-center"}>sta caricando..</motion.div>}

                                    {!loading &&  <ServiceList services={services} />  }
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
        </motion.div>
    );
}


// This gets called on every request
export const getServerSideProps: GetServerSideProps<any> = async (context) =>{
    // Fetch data from external API
    const {page} = context.query;

    const currentPage = page ?? 1;

    const productsService = new ProductService();
    const services = await productsService.find({ sort: ['ordine']});


    const areaProductService = new AreaService();
    const areas = await areaProductService.find({ sort: ['id']});


    if(currentPage > (services?.paginationInfo.pageCount ?? 1))
        return NextjsUtils.returnNotFoundObject();

    if(currentPage === 1 && page)
        return NextjsUtils.returnRedirectObject('/servizi');

    return NextjsUtils.returnServerSidePropsObject({
        services: services?.data,
        pageCount : services?.paginationInfo.pageCount,
        currentPage : currentPage,
        areas : areas?.data
    });

}
