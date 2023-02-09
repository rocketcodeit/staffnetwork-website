import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {ArrowRightIcon} from '@heroicons/react/24/outline'
import TeamMemberList from '../components/TeamMember/TeamMemberList'
import {ITeamMember} from "../models/ITeamMember";
import PostList, {IPostProps} from "../components/Post/PostList";
import {IWebsiteConfiguration} from "../config/models/IWebsiteConfiguration";
import AreaList from "../components/Area/AreaList";
import {motion} from "framer-motion";
import {container, fadeInUp, item, stagger, blockReveal, blockTextReveal} from "../animations";
import Link from "next/link";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {IPost} from "../models/IPost";
import {IArea} from "../config/models/IArea";


export default function Home({posts,services, home} : InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}}
                    className={styles.container}>
            <section>
                <div className={styles.aboveTheFold}>
                    <div className="h-full bg-[url('/assets/img/home_header.png')]"></div>
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
                        className="lg:bg-[url('/assets/img/pexels-faris-al-orfali-1697160%202.png')] bg-none w-full bg-primary-dark flex flex-flow flex-wrap justify-between bg-no-repeat bg-right">
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
                            <AreaList services={services} />
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
                    <div className={`${styles.bgListItemDigits} bg-[url('/assets/img/stephen-dawson-qwtCeJ5cLYs-unsplash.png')]`}>

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
                    <TeamMemberList itemsCount={3} />
                    <Link className="btn mx-auto block w-fit mt-6" href="/come_lavoriamo">Conosci i professionisti</Link>
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
                    {home.partnership.link.map((a : any) => <a key={a.id} className="btn block w-fit mt-4" href={a.href}>{a.titolo}</a>
                        )}
                    </div>
                    <div className="lg:w-6/12 w-full h-32 lg:h-auto bg-cover bg-[url('/assets/img/pexels-gustavo-fring-628510.png')] bg-center" >
                    </div>
                </div>
            </section>

            <section className="mt-24">
                <div className="container">
                    <div className="relative w-fit">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                        <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="mb-5">Le Risorse</motion.h2>
                    </div>

                    <PostList posts={posts}  />
                    <Link className="btn block w-fit mt-8 mx-auto" href="/blog">Vai alle risorse</Link>
                </div>
            </section>
        </motion.div>
    )
}



// This gets called on every request
export const getServerSideProps: GetServerSideProps<any> = async (context) => {
    // Fetch data from external API
    let url = "http://localhost:1337";

    const resData = await fetch(url + "/api/posts?pagination[page]=1&pagination[pageSize]=3&populate=*");
    const postsData = await resData.json();
    const posts: IPost[] = postsData.data.map((item: any) => {
        return {
            slug: item.attributes.slug,
            name: item.attributes.title,
            date: item.attributes.date,
            img: url + item.attributes.cover.data.attributes.url,
            description: item.attributes.content,
            featured: item.attributes.featured,
            categories :
                item.attributes.post_categories.data.map((category : any) => {
                    return {
                        name: category.attributes.name,
                        slug: category.attributes.slug
                    }
                })
        }
    })

    const resServices = await fetch(`${url}/api/areas?populate=*`);
    const servicesData  =  await resServices.json();
    const services :  IArea[] =  servicesData.data.map((item : any) =>{
        return {
            slug : item.attributes.slug,
            name : item.attributes.titolo,
            short_description : item.attributes.summary,
            description : item.attributes.description,

        }
    })


    const resHome = await fetch(`${url}/api/home?populate=*&populate[0]=datiStatistici,staff,partnership,servizi&populate[1]=datiStatistici.dati,partnership.link`);
    const homeData = await resHome.json();

    const result: any = {
        posts : posts,
        services : services,
        home : homeData.data.attributes
    }


    // Pass data to the page via props
    return {
        props: result
    };
}