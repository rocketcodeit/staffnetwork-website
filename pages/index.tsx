import styles from '../styles/Home.module.css'
import TeamMemberList from '../components/TeamMember/TeamMemberList'
import PostList from "../components/Post/PostList";
import AreaList from "../components/Area/AreaList";
import {motion} from "framer-motion";
import {
    container,
    item,
    stagger,
    blockReveal,
    blockTextReveal,
    fadeInUp,
    filterAnimation,
    sliderShowAnimation
} from "../animations";
import Link from "next/link";
import {GetServerSideProps} from "next";
import {BackendFacade} from "../services/backend-facade.service";
import {PostDetail} from "../models/postDetail";
import {IArea} from "../config/models/IArea";
import {TeamMember} from "../models/team-member";
import {HomeData} from "../models/home-data";
import {useContext, useEffect, useState} from "react";
import {AppProviderContext} from "../components/Provider/AppContext";
import Head from "next/head";
import Carousel from "../components/Carousel/Carousel";

interface HomeProps {
    posts: PostDetail[],
    services: IArea[],
    home: HomeData,
    membersTeam: TeamMember[],
}

export default function Home({posts, services, home, membersTeam}: HomeProps) {
    const {configuration, setConfigurationData} = useContext(AppProviderContext);
    const [sliderShowed, setSliderShowed] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(undefined);

    useEffect(() => {
        setConfigurationData();
        let idSlider: any = setChangeSlider(8000)


        return () => clearInterval(idSlider);


    }, [])

    function setChangeSlider(ms: number): any {
        const interval = setInterval(() => {
            if (home.sliderShow) {
                let maxSize = home.sliderShow.length;
                setSliderShowed(sliderShowed => (sliderShowed + 1) % maxSize);
            }
        }, ms);
        setIntervalId(interval);

        return interval;
    }

    function handleResetInterval(index: number) {
        // Cancella l'intervallo esistente
        clearInterval(intervalId);
        setSliderShowed(index);

        let idSlider: any = setChangeSlider(8000)


    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                    transition={{duration: 0.4, ease: "easeInOut"}}
                    className={styles.container}>
            <Head>
                <title>{home.dataSeo.title}</title>
            </Head>
            <section>
                {false && <div className={styles.aboveTheFold}>

                    <motion.video className={`${styles.video}`}
                                  src={`https://${home.imgAboveTheFold.data.attributes.url}`} autoPlay muted loop/>
                    <motion.div variants={stagger} initial="initial" animate="final"
                                className="drop-shadow-xl bg-primary-800/80 absolute max-h-full lg:top-48 md:top-24 top-16 left-0 right-36 lg:w-9/12 md:w-10/12 w-11/12 lg:p-20  md:p-12 p-8 grid grid-cols-1 overflow-hidden">
                        {home.sliderShow?.map((itemSlider, index) => {
                            return (
                                <motion.div key={index} variants={sliderShowAnimation} initial="initial"
                                            animate={sliderShowed === index ? "visible" : "hidden"} exit="hidden"
                                            className={`row-start-1 col-start-1 ${sliderShowed === index ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                                    <div className=" relative w-fit overflow-hidden mb-6">
                                        <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                                    className="blockOverText bg-gray-700"></motion.div>
                                        <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final"
                                                   className="text-white ">{itemSlider.title}</motion.h1>
                                    </div>
                                    <div className="relative lg:w-9/12 w-full mb-6 overflow-hidden">
                                        <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                                    transition={{delay: 0.3}}
                                                    className="blockOverText bg-gray-700"></motion.div>
                                        <motion.div dangerouslySetInnerHTML={{__html: itemSlider.description}}
                                                    variants={blockTextReveal} initial="initial" whileInView="final"
                                                    className="text-white"/>
                                    </div>
                                    {itemSlider.buttons.map((itemBtn, index) => <Link key={index}
                                                                                      className="btn block w-fit mt-6"
                                                                                      href={itemBtn.link}>{itemBtn.title}</Link>)}
                                </motion.div>
                            )

                        })}
                        <div
                            className={"flex lg:flex-col flex-row gap-2 absolute  lg:top-1/2 top-auto bottom-8 lg:bottom-auto right-8"}>
                            {home.sliderShow?.map((count, index) => {
                                return <div key={index} onClick={() => handleResetInterval(index)}
                                            className={`w-3 h-3 ${sliderShowed === index ? 'bg-white' : 'bg-white/60'} aspect-square rounded-full`}></div>
                            })}</div>
                    </motion.div>

                </div>}


                {home.sliderShow &&
                    <Carousel carouselItem={home.sliderShow.map((item) => ({
                        preTitle: item.preTitle,
                        title: item.title,
                        description: item.description,
                        image: item.img,
                        buttons: item.buttons
                        }))}/>
                }
            </section>
            <section className="mt-24">
                <div className={`${styles.containerLeft} `}>
                    <div
                        className="lg:bg-[url('/assets/img/pexels-faris-al-orfali-1697160%202.png')] bg-none w-full bg-primary-dark flex flex-flow flex-wrap justify-between bg-no-repeat bg-contain bg-right-bottom"
                        style={{backgroundImage: `url("${home.imgAree.data.attributes.url}")`}}>
                        <div className="xl:w-5/12 lg:w-7/12 w-11/12 lg:pt-32 md:pt-20 pt-12 container ml-0 mb-8">
                            <div className="relative w-fit">
                                <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                            className="blockOverText bg-primary-600"></motion.div>
                                <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final"
                                           viewport={{once: true}}
                                           className="text-white">{home.servizi.titolo}</motion.h2>
                            </div>

                            <motion.div className="mt-5 text-white relative">
                                <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                            className="blockOverText bg-primary-600"></motion.div>
                                <motion.div variants={blockTextReveal} initial="initial" whileInView="final"
                                            viewport={{once: true}} className={styles.areasDescription}
                                            dangerouslySetInnerHTML={{__html: home.servizi.descrizione}}/>
                            </motion.div>
                        </div>
                        <div className="z-10 pr-0 container mb-[-96px]">
                            <AreaList areas={services}/>
                        </div>


                    </div>

                </div>
            </section>

            <section className="bg-primary-100 mt-48 relative -z-20 overflow-hidden">
                <div className="container flex flex-flow justify-between flex-wrap flex-wrap relative ">
                    <div
                        className="lg:w-5/12 w-full flex flex-row items-center content-start lg:content-center flex-wrap">
                        <div className="relative w-fit mt-8">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                        className="blockOverText bg-primary-50"></motion.div>
                            <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final"
                                       viewport={{once: true}}
                                       className={"mb-5"}>{home.datiStatistici.titolo}</motion.h2>
                        </div>
                        <div className="relative w-fit">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                        className="blockOverText bg-primary-50"></motion.div>
                            <motion.div variants={blockTextReveal} initial="initial" whileInView="final"
                                        viewport={{once: true}} className="mb-8"
                                        dangerouslySetInnerHTML={{__html: home.datiStatistici.descrizione}}/>
                        </div>
                    </div>
                    <div className={`${styles.containerRightBefore} lg:w-6/12 w-full bg-gray-200 relative lg:initial`}>
                        <motion.div variants={container} initial="hidden" animate="show"
                                    className={`pl-6 lg:pl-12 py-8 lg:py-12 relative grid grid-cols-1 sm:grid-cols-2 md:grid-rows-3`}>
                            {home.datiStatistici.dati.map((stat: any) => {
                                return (<motion.div key={stat.id} variants={item} initial="hidden" whileInView="show"
                                                    viewport={{once: true}}
                                                    className="counter flex flex-flow items-center mb-4">
                                    <h4 className="font-medium text-3xl lg:text-4xl mr-2">{stat.numero}</h4>
                                    <p className="text-xl">{stat.descrizione}</p>
                                </motion.div>)
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {false && <section className="mt-48 overflow-hidden">
                <div className="lg:w-6/12 container ml-0">
                    <motion.div className="relative w-fit">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                    className="blockOverText bg-gray-100"></motion.div>
                        <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final"
                                   viewport={{once: true}}>{home.datiStatistici.titolo}</motion.h2>
                    </motion.div>
                    <motion.div className="mt-3 relative">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                    className="blockOverText bg-gray-100"></motion.div>
                        <motion.div variants={blockTextReveal} initial="initial" whileInView="final"
                                    viewport={{once: true}} className="mb-8"
                                    dangerouslySetInnerHTML={{__html: home.datiStatistici.descrizione}}/>
                    </motion.div>
                </div>
                <div className={`${styles.containerRight} flex flex-flow  flex-wrap lg:flex-nowrap `}>
                    <div className={`${styles.bgListItemDigits} object-cover bg-cover no-repeat `}
                         style={{backgroundImage: `url("${home.imgDati.data.attributes.url}")`}}>

                    </div>
                    <motion.div variants={container} initial="hidden" animate="show"
                                className={`${styles.containerRightBefore} lg:w-6/12 w-11/12 mb-20 bg-gray-200 lg:ml-[-8.333%] pl-6 sm:pl-12 lg:pl-16 lg:py-12  py-8 relative`}>
                        {home.datiStatistici.dati.map((stat: any) => {
                            return (<motion.div key={stat.id} variants={item} initial="hidden" whileInView="show"
                                                viewport={{once: true}}
                                                className="counter flex flex-flow items-center mb-4">
                                <h4 className="font-medium text-4xl mr-2">{stat.numero}</h4>
                                <p className="text-xl">{stat.descrizione}</p>
                            </motion.div>)
                        })}


                    </motion.div>
                </div>
            </section>}

            <section className="mt-24">
                <div className="container mb-10">
                    <div className="relative w-fit mx-auto">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                    className="blockOverText bg-gray-100"></motion.div>
                        <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final"
                                   viewport={{once: true}} className="text-center mb-5">{home.staff.titolo}</motion.h2>
                    </div>

                    <div className="relative w-fit mx-auto">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                    className="blockOverText bg-gray-100"></motion.div>
                        <motion.div variants={blockTextReveal} initial="initial" whileInView="final"
                                    viewport={{once: true}} className="lg:w-6/12 w-full  mx-auto text-center"
                                    dangerouslySetInnerHTML={{__html: home.staff.descrizione}}/>
                    </div>


                </div>
                <div className="w-full">
                    <TeamMemberList members={membersTeam}/>
                    <Link className="btn mx-auto block w-fit mt-6" href="/come-lavoriamo">Conosci i
                        professionisti</Link>
                </div>
            </section>

            <section className="bg-primary-100 mt-24">
                <div className="container flex flex-flow justify-between flex-wrap lg:flex-wrap flex-wrap-reverse  ">
                    <div className="lg:w-5/12 w-full lg:py-32 pt-8 pb-12">
                        <div className="relative w-fit">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                        className="blockOverText bg-primary-50"></motion.div>
                            <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final"
                                       viewport={{once: true}} className="mb-5">{home.partnership.titolo}</motion.h2>
                        </div>
                        <div className="relative w-fit">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                        className="blockOverText bg-primary-50"></motion.div>
                            <motion.div variants={blockTextReveal} initial="initial" whileInView="final"
                                        viewport={{once: true}}
                                        dangerouslySetInnerHTML={{__html: home.partnership.descrizione}}/>
                        </div>
                        {home.partnership.link.map((a: any) => <a key={a.id} className="btn block w-fit mt-4"
                                                                  href={a.href}>{a.title}</a>
                        )}
                    </div>
                    <div
                        className="lg:w-6/12 w-full h-32 lg:h-auto bg-cover bg-[url('/assets/img/pexels-gustavo-fring-628510.png')] bg-center"
                        style={{backgroundImage: `url("${home.imgPartnership.data.attributes.url}")`}}>
                    </div>
                </div>
            </section>

            <section className="lg:my-24 my-12 ">
                <div className="container">
                    <div className="relative w-fit">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                    className="blockOverText bg-gray-100"></motion.div>
                        <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final"
                                   viewport={{once: true}} className="mb-5">Le Risorse
                        </motion.h2>
                    </div>

                    <PostList posts={posts}/>
                    <Link className="btn block w-fit mt-8 mx-auto" href="/blog">Vai alle risorse</Link>
                </div>
            </section>
        </motion.div>

    )
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {

    const backendFacade = new BackendFacade();
    const result = await backendFacade.getHomeData();

    const returnObj: HomeProps = {
        home: result.home,
        membersTeam: result.membersTeam,
        posts: result.posts,
        services: result.services,
    }

    return {
        props: {
            ...returnObj,
        }
    };
}
