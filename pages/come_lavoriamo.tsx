import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {ArrowRightIcon} from '@heroicons/react/24/outline'
import TeamMemberList from '../components/TeamMember/TeamMemberList'
import {ITeamMember} from "../models/ITeamMember";
import PostList from "../components/Post/PostList";
import {IWebsiteConfiguration} from "../config/models/IWebsiteConfiguration";
import ServiceList from "../components/Service/ServiceList";
import {motion} from "framer-motion";
import {
    container,
    fadeInUp,
    item,
    stagger,
    blockReveal,
    blockTextReveal,
    lineLeftToRight,
    textReveal, numberStepOpacity
} from "../animations";
import Link from "next/link";
import BreadCrumbs from "../components/Breadcrumbs/BreadCrumbs";
import {config} from "../config/breadcrumbs.config";
import React from "react";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {IPost} from "../models/IPost";
import {IService} from "../config/models/IService";

let url = "http://localhost:1337";


export default function comeLavoriamo({data} : InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeOut"}}
                    className={styles.container}>
            <Head>
                <title>Come lavoriamo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <main>
                <section>
                    <motion.div className="containerRight flex flex-wrap justify-between mt-8">
                        <motion.div variants={fadeInUp} className="w-full order-1">
                            <BreadCrumbs  mappedPaths={config} showHome={true} transformDynamicPath={path => {
                                return path;
                            }} />
                            <div className="relative w-fit">
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}> {data.titolo}</motion.h1>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div className="container">
                        <div className={"w-12/12 mx-auto"}>
                            <div className={"relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.img variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"w-full max-h-[32rem] mt-6 -mb-[20rem] object-cover"} src={url + data.img.data.attributes.url} />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className={"bg-primary-700 pt-[23rem] pb-12"}>
                        <div className={"container"}>
                            <div className={"w-6/12 mx-auto relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-primary-600"></motion.div>
                                <motion.div dangerouslySetInnerHTML={{__html:data.descrizione}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-white text-center"} />
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section className="mt-24 overflow-hidden">
                    <motion.div className={"containerRight"}>
                        <motion.div variants={lineLeftToRight} initial="initial" whileInView="final" viewport={{ once: true }}  className={"lineDivisor"}></motion.div>
                    </motion.div>
                    <div className={"container flex flex-row justify-between py-6"}>
                        <div className={"w-5/12 relative "}>
                            <div className={"w-fit relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >{data.blocco1.titolo}</motion.h2>

                            </div>
                        </div>
                        <div className={"w-6/12"}>
                            <div className={"w-fit relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.div dangerouslySetInnerHTML={{__html:data.blocco1.descrizione}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} />
                            </div>

                        </div>
                    </div>
                </section>

                <section className="mt-24">
                    <div className={"container flex flex-row justify-center relative z-20"}>
                        <div className={"w-8/12"}>
                            <div className={"w-fit relative mx-auto"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                                <motion.h3  variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-center z-20"}>Ogni grande progetto <br /> ha bisogno di un grande staff</motion.h3>
                            </div>


                        </div>
                    </div>
                    <div className={"container flex flex-row justify-center "}>
                        <div className={"w-full pt-20 -mt-12 mb-16 relative z-10 "}>
                            <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"w-10/12 bg-gray-100 h-[96%] left-0 right-0 -mt-20  mx-auto absolute"}>
                            </motion.div>
                            <div className="relative w-5/12 mb-6 mx-auto">
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                                <motion.p variants={fadeInUp} initial="initial" whileInView="final" viewport={{ once: true }}  className="w-full  mx-auto text-center">
                                    La specializzazione dei singoli professionisti unita alla multidisciplinarietà dell’insieme ci consente di annullare la dispersione informativa e documentale ed essere al tempo stesso più precisi, rapidi ed efficaci nell’esecuzione.
                                </motion.p>
                            </div>
                            <div className="w-12/12">
                                <TeamMemberList />

                            </div>
                        </div>



                    </div>
                </section>
                <section className="mt-24">
                    <div className={"container"}>
                        <div className={"w-5/12 mx-auto relative "}>
                            <div className={"w-fit relative mx-auto"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-center"} >{data.blocco1.titolo}</motion.h2>
                            </div>
                            <div className={"w-fit relative mt-2"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.div dangerouslySetInnerHTML={{__html:data.blocco1.descrizione}} variants={blockTextReveal} className={"text-center"} initial="initial" whileInView="final" viewport={{ once: true }} />
                            </div>
                        </div>
                        <div className={"w-6/12"}>


                        </div>
                        <div className={"w-full flex flex-row justify-between"}>
                            <div className={"directiveImage w-6/12"}></div>
                            <div className={"directiveBoxsContainer w-5/12"}>
                                {data.metodo.direttiva.map((dir : any, index : number) =>{
                                    return  <motion.div key={index} className={"directiveBox mb-6"}>
                                                <div className={"w-fit relative"}>
                                                    <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                                    <motion.h4 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >{dir.titolo}</motion.h4>
                                                </div>
                                                <div className={"w-fit relative mt-2"}>
                                                    <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                                    <motion.div dangerouslySetInnerHTML={{__html:dir.descrizione}} variants={blockTextReveal}  initial="initial" whileInView="final" viewport={{ once: true }} />
                                                </div>
                                            </motion.div>
                                })}
                            </div>
                        </div>
                        <div className={"w-full flex flex-row justify-between items-stretch bg-gray-200 mt-8 "}>
                            <div className={"flex flex-3 gap-0 flex-wrap w-full h-full"}>
                                <div className={"basis-1/3"}>
                                    <div className={"w-fit relative"}>
                                        <motion.div variants={blockReveal} whileInView="final" className="blockOverText bg-primary-700"></motion.div>
                                        <motion.div className={"directiveBox z-40 p-6 pr-12"}>
                                            <div className={"w-fit relative"}>
                                                <motion.h4 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >{data.metodo.step[0].titolo}</motion.h4>
                                            </div>
                                            <div className={"w-fit relative mt-2"}>
                                                <motion.div dangerouslySetInnerHTML={{__html:data.metodo.step[0].descrizione}} variants={blockTextReveal}  initial="initial" whileInView="final" viewport={{ once: true }} />
                                            </div>
                                        </motion.div>
                                    </div>

                                </div>
                                <div className={"basis-1/3 relative"}>

                                </div>
                                <div className={"basis-1/3"}>03</div>
                                <div className={"basis-1/3"}>04</div>
                                <div className={"basis-1/3"}>
                                    <div className={"w-fit relative"}>
                                        <motion.div variants={blockReveal} whileInView="final" transition={{duration:1,ease: [0.19, 1, 0.22, 1],delay:0.4}} className="blockOverText bg-primary-700"></motion.div>
                                        <motion.div className={"directiveBox  p-6 pr-12"}>

                                            <div className={"w-fit relative"}>
                                                <motion.h4 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >{data.metodo.step[1].titolo}</motion.h4>
                                            </div>
                                            <div className={"w-fit relative mt-2"}>
                                                <motion.div dangerouslySetInnerHTML={{__html:data.metodo.step[1].descrizione}} variants={blockTextReveal}  initial="initial" whileInView="final" viewport={{ once: true }} />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                                <div className={"basis-1/3"}>06</div>
                                <div className={"basis-1/3"}>07</div>
                                <div className={"basis-1/3"}>08</div>
                                <div className={"basis-1/3"}>
                                    <div className={"w-fit relative"}>
                                        <motion.div variants={blockReveal} whileInView="final" transition={{duration:1,ease: [0.19, 1, 0.22, 1],delay:0.4}} className="blockOverText bg-primary-700"></motion.div>
                                        <motion.div className={"directiveBox p-6 pr-12"}>
                                            <div className={"w-fit relative"}>
                                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                                <motion.h4 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >{data.metodo.step[2].titolo}</motion.h4>
                                            </div>
                                            <div className={"w-fit relative mt-2"}>
                                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                                <motion.div dangerouslySetInnerHTML={{__html:data.metodo.step[2].descrizione}} variants={blockTextReveal}  initial="initial" whileInView="final" viewport={{ once: true }} />
                                            </div>
                                        </motion.div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className={"mt-12"}>
                    <div className={"container"}>
                        <div className={"w-6/12 mx-auto"}>
                            <div className={"w-fit relative mx-auto"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-center"} >{data.contatti.titolo}</motion.h2>
                            </div>
                            <div className={"w-fit relative mt-2 mx-auto"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.div dangerouslySetInnerHTML={{__html:data.contatti.descrizione}} variants={blockTextReveal} className={"text-center"} initial="initial" whileInView="final" viewport={{ once: true }} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>





        </motion.div>
    )
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
    // Fetch data from external API

    const resComeLavoriamo = await fetch(`${url}/api/come-lavoriamo?populate=*&populate[0]=metodo,contatti,blocco1,staff,img,&populate[1]=metodo.direttiva,metodo.step,contatti.form`);
    const comeLavoriamoData = await resComeLavoriamo.json();

    const result: any = {
        data : comeLavoriamoData.data.attributes
    }
    // Pass data to the page via props
    return {
        props: result
    };
}
