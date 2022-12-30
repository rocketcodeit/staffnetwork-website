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
    textReveal
} from "../animations";
import Link from "next/link";
import BreadCrumbs from "../components/Breadcrumbs/BreadCrumbs";
import {config} from "../config/breadcrumbs.config";
import React from "react";

export default function AboutUs() {
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
                                <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}> Favorire l’avanzamento dell’imprenditoria italia</motion.h1>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div className="container">
                        <div className={"w-12/12 mx-auto"}>
                            <div className={"relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.img variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"w-full max-h-[32rem] mt-6 -mb-[20rem] object-cover"} src={"/assets/img/post_image.png"} />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className={"bg-primary-700 pt-[23rem] pb-12"}>
                        <div className={"container"}>
                            <div className={"w-6/12 mx-auto relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-primary-600"></motion.div>
                                <motion.p variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-white text-center"}>38 anni fa la nostra storia si è intrecciata e indissolubilmente legata al tessuto imprenditoriale italiano.

                                    In questo tempo abbiamo affiancato gli imprenditori nelle decisioni routinarie e straordinarie della propria impresa, per comprendere quanto entrambe siano fondamentali per un consolidamento duraturo.

                                    Il mondo dell’impresa presenta ampi margini di miglioramento, ma altrettante possibilità potrebbero colmarli, a patto che si sia nelle condizioni di affrontare la complessità che il loro sfruttamento determina.
                                </motion.p>
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
                                <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >Viviamo di crescita come te</motion.h2>
                            </div>
                        </div>
                        <div className={"w-6/12"}>
                            <div className={"w-fit relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.p variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >L’idea di Staff Network nasce nel 1985 ad Altamura come studio di consulenza fiscale e consulenza del lavoro, per volontà del fondatore e attuale senior partner Roberto Loiudice.

                                    Nel 2000 nascono le divisioni specializzate nella Finanza d’impresa, Finanza agevolata e ordinaria.

                                    Con il passare del tempo e con la crescita del know-how ha preso avvio un’intensa e sostenuta attività di partnership con studi di commercialisti, istituti di credito, enti territoriali e associazioni.

                                    Nel 2015 viene costituita la divisione Innovazione con l’obiettivo di supportare progetti di innovazione tecnologica e digitalizzazione, mettendo a disposizione l’esperienza in ambito di Innovazione, Finanziamenti Agevolati e d’impresa e Internazionalizzazione.

                                    Nel 2020 nasce la divisione Green con l’obiettivo di affiancare imprese e privati in progetti di sviluppo e investimento sul tema energia, efficientamento energetico e investimento in  impianti di energie rinnovabili.
                                </motion.p>
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
            </main>





        </motion.div>
    )
}


