import styles from '../styles/Home.module.css'
import TeamMemberList from '../components/TeamMember/TeamMemberList'
import PostList from "../components/Post/PostList";
import AreaList from "../components/Area/AreaList";
import {motion} from "framer-motion";
import {container, item, stagger, blockReveal, blockTextReveal} from "../animations";
import Link from "next/link";
import {GetServerSideProps} from "next";
import {BackendFacade} from "../services/backend-facade.service";
import {PostDetail} from "../models/postDetail";
import {IArea} from "../config/models/IArea";
import {TeamMember} from "../models/team-member";
import {HomeData} from "../models/home-data";
import {useContext, useEffect} from "react";
import {AppProviderContext} from "../components/Provider/AppContext";
import Head from "next/head";

interface HomeProps {
    posts: PostDetail[],
    services: IArea[],
    home: HomeData,
    membersTeam: TeamMember[],
}

export default function Home({posts, services, home, membersTeam} : HomeProps) {
    const {configuration,setConfigurationData} = useContext(AppProviderContext);

    useEffect(() => {
            setConfigurationData();
    },[])

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}}
                    className={styles.container}>
            <Head>
                <title>{home.dataSeo.title}</title>
            </Head>
            <section>
                <div className={styles.aboveTheFold}>
                    <div className={`h-full`} style={{ backgroundImage: `url("${home.imgAboveTheFold.data.attributes.url}")`}}></div>
                    <motion.div variants={stagger} initial="initial" animate="final" className="drop-shadow-xl bg-zinc-900/80 absolute max-h-full lg:top-48 md:top-24 top-16 left-0 right-36 lg:w-9/12 md:w-10/12 w-11/12 lg:p-20  md:p-12 p-8">
                        <div  className=" relative w-fit overflow-hidden mb-6">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-700"></motion.div>
                            <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" className="text-white ">{home.title}</motion.h1>
                        </div>
                        <div className=" relative lg:w-9/12 w-full mb-6 overflow-hidden">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} transition={{delay:0.3}} className="blockOverText bg-gray-700"></motion.div>
                            <motion.div dangerouslySetInnerHTML={{__html:home.descriptionAboveTheFold}} variants={blockTextReveal} initial="initial"  whileInView="final" className="text-white" />
                        </div>
                        <Link className="btn block w-fit mt-6" href={home.callToAction.link}>{home.callToAction.title}</Link>
                    </motion.div>
                </div>

            </section>
            <section className="mt-24">
                <div className={`${styles.containerLeft} `}>
                    <div
                        className="lg:bg-[url('/assets/img/pexels-faris-al-orfali-1697160%202.png')] bg-none w-full bg-primary-dark flex flex-flow flex-wrap justify-between bg-no-repeat bg-contain bg-right-bottom"
                        style={{backgroundImage: `url("${home.imgAree.data.attributes.url}")`}}>
                        <div className="xl:w-5/12 lg:w-7/12 w-11/12 lg:pt-32 md:pt-20 pt-12 container ml-0 mb-8">
                            <div className="relative w-fit">
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-primary-600"></motion.div>
                                <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="text-white">{home.servizi.titolo}</motion.h2>
                            </div>

                            <motion.div className="mt-5 text-white relative">
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-primary-600"></motion.div>
                                <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="relative" dangerouslySetInnerHTML={{__html:home.servizi.descrizione}} />
                            </motion.div>
                        </div>
                        <div className="z-10 pr-0 container mb-[-96px]">
                            <AreaList areas={services} />
                        </div>


                    </div>

                </div>
            </section>

            <section className="mt-48 overflow-hidden">
                <div className="lg:w-6/12 container ml-0">
                    <div className="relative w-fit">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                        <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="mb-8">{home.datiStatistici.titolo}</motion.h2>
                    </div>
                </div>
                <div className={`${styles.containerRight} flex flex-flow  flex-wrap lg:flex-nowrap `}>
                    <div className={`${styles.bgListItemDigits} object-cover bg-cover no-repeat `}  style={{backgroundImage: `url("${home.imgDati.data.attributes.url}")`}}>

                    </div>
                    <motion.div variants={container} initial="hidden" animate="show" className={`${styles.containerRightBefore}  lg:w-6/12 w-11/12 mb-20 bg-gray-200 lg:ml-[-8.333%] lg:pl-16 lg:py-12  pl-12 py-8 relative`}>
                        {home.datiStatistici.dati.map((stat : any) =>{
                            return (<motion.div key={stat.id} variants={item} initial="hidden" whileInView="show"  viewport={{ once: true }} className="counter flex flex-flow items-center mb-4">
                                <h4 className="font-medium text-4xl mr-2">{stat.numero}</h4>
                                <p className="text-xl">{stat.descrizione}</p>
                                </motion.div>)
                        })}


                    </motion.div>
                </div>
            </section>

            <section className="mt-24">
                <div className="container mb-10">
                    <div className="relative w-fit mx-auto">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                        <motion.h2  variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="text-center mb-5">{home.staff.titolo}</motion.h2>
                    </div>

                    <div className="relative w-fit mx-auto">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                        <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}  className="lg:w-6/12 w-full  mx-auto text-center"
                                    dangerouslySetInnerHTML={{__html:home.staff.descrizione}}/>
                    </div>


                </div>
                <div className="w-full">
                    <TeamMemberList members={membersTeam} />
                    <Link className="btn mx-auto block w-fit mt-6" href="/come-lavoriamo">Conosci i professionisti</Link>
                </div>
            </section>

            <section className="bg-primary-100 mt-24">
                <div className="container flex flex-flow justify-between flex-wrap lg:flex-wrap flex-wrap-reverse  ">
                    <div className="lg:w-5/12 w-full lg:py-32 pt-8 pb-12">
                        <div className="relative w-fit">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-primary-50"></motion.div>
                            <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="mb-5">{home.partnership.titolo}</motion.h2>
                        </div>
                        <div className="relative w-fit">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-primary-50"></motion.div>
                            <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} dangerouslySetInnerHTML={{__html:home.partnership.descrizione}} />
                        </div>
                    {home.partnership.link.map((a : any) => <a key={a.id} className="btn block w-fit mt-4" href={a.href}>{a.title}</a>
                        )}
                    </div>
                    <div className="lg:w-6/12 w-full h-32 lg:h-auto bg-cover bg-[url('/assets/img/pexels-gustavo-fring-628510.png')] bg-center"  style={{backgroundImage: `url("${home.imgPartnership.data.attributes.url}")`}}>
                    </div>
                </div>
            </section>

            <section className="lg:my-24 mt-12 ">
                <div className="container">
                    <div className="relative w-fit">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                        <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="mb-5">Le Risorse</motion.h2>
                    </div>

                    <PostList posts={posts} />
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
