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
import {container, fadeInUp, item, stagger, blockReveal, blockTextReveal} from "../animations";
import Link from "next/link";

export default function Home() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeOut"}}
                    className={styles.container}>
            <section>
                <div className={styles.aboveTheFold}>
                    <div className="h-full bg-[url('/assets/img/home_header.png')]"></div>
                    <motion.div variants={stagger} initial="initial" animate="final" className="drop-shadow-xl bg-zinc-900/80 absolute max-h-full lg:top-48 md:top-24 top-16 left-0 right-36 lg:w-9/12 md:w-10/12 w-11/12 lg:p-20  md:p-12 p-8">
                        <div  className="overflow-hidden">
                            <motion.h1 variants={fadeInUp} initial="initial" animate="final" className="text-white mb-6">La crescita aziendale è un percorso di cui
                                conosciamo
                                la strada</motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p variants={fadeInUp} initial="initial" animate="final" className="text-white lg:w-9/12  w-full mb-5">Siamo un’organizzazione multidisciplinare di
                                professionisti con l’obiettivo di rendere
                                effettiva la crescita della tua impresa attraverso un piano strategico di azioni concrete e
                                mirate per l’efficientamento
                                aziendale.</motion.p>
                        </div>
                        <button className="btn">
                            Scopri i servizi
                        </button>
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
                                <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="text-white">Aree di intervento</motion.h2>
                            </div>

                            <motion.div className="mt-5 text-white relative">
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-primary-600"></motion.div>
                                <motion.p variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="relative">Ognuna delle aree aziendali intrattiene relazioni di
                                dipendenza e scambio con numerose altre
                                e non può essere trattata come entità isolata. In accordo con tale visione, i nostri
                                servizi
                                agiscono in maniera trasversale e integrata sui comparti cruciali di un business.</motion.p>
                            </motion.div>
                        </div>
                        <div className="z-10 pr-0 container mb-[-96px]">
                            <ServiceList />
                        </div>


                    </div>

                </div>
            </section>

            <section className="mt-48 overflow-hidden">
                <div className="lg:w-6/12 container ml-0">
                    <div className="relative w-fit">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                        <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="mb-8">Staff Network in cifre</motion.h2>
                    </div>
                </div>
                <div className={`${styles.containerRight} flex flex-flow  flex-wrap lg:flex-nowrap `}>
                    <div className={`${styles.bgListItemDigits} bg-[url('/assets/img/stephen-dawson-qwtCeJ5cLYs-unsplash.png')]`}>

                    </div>
                    <motion.div variants={container} initial="hidden" animate="show" className={`${styles.containerRightBefore}  lg:w-6/12 w-11/12 mb-20 bg-gray-200 lg:ml-[-8.333%] lg:pl-16 lg:py-12  pl-12 py-8 relative`}>

                        <motion.div variants={item} initial="hidden" whileInView="show"  viewport={{ once: true }} className="counter flex flex-flow items-center mb-4">
                            <h4 className="font-medium text-4xl mr-2">37</h4>
                            <p className="text-xl">Anni di esperienza</p>
                        </motion.div>
                        <motion.div variants={item} initial="hidden" whileInView="show"  viewport={{ once: true }} className="counter flex flex-flow items-center mb-4">
                            <h4 className="font-medium text-4xl mr-2">37</h4>
                            <p className="text-xl">Anni di esperienza</p>
                        </motion.div>
                        <motion.div variants={item} initial="hidden" whileInView="show"  viewport={{ once: true }} className="counter flex flex-flow items-center mb-4">
                            <h4 className="font-medium text-4xl mr-2">37</h4>
                            <p className="text-xl">Anni di esperienza</p>
                        </motion.div>
                        <motion.div variants={item} initial="hidden" whileInView="show"  viewport={{ once: true }} className="counter flex flex-flow items-center mb-4">
                            <h4 className="font-medium text-4xl mr-2">37</h4>
                            <p className="text-xl">Anni di esperienza</p>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            <section className="mt-24">
                <div className="container mb-10">
                    <div className="relative w-fit mx-auto">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                        <motion.h2  variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="text-center mb-5">Lo Staff</motion.h2>
                    </div>

                    <div className="relative w-fit mx-auto">
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                        <motion.p variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}  className="lg:w-6/12 w-full  mx-auto text-center">L’elevata specializzazione dei singoli professionisti
                            unita alla multidisciplinarietà
                            dell’insieme ci consente di annullare la dispersione informativa e documentale ed essere al
                            tempo stesso più precisi, rapidi ed efficaci nell’esecuzione dei servizi e nell’avanzamento dei
                            progetti.</motion.p>
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
                            <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="mb-5">Network & Partnership</motion.h2>
                        </div>
                        <div className="relative w-fit">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-primary-50"></motion.div>
                            <motion.p variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >Siamo alla ricerca costante di studi e professionisti con cui intessere solidi rapporti di
                                collaborazione e interscambio di competenze.

                                Scopri come entrare nella nostra rete ad alto valore aggiunto.
                            </motion.p>
                        </div>
                        <a className="btn block w-fit mt-4" href="/chi-siamo">Conosci i professionisti</a>
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

                    <PostList itemsCount={3} />
                    <Link className="btn block w-fit mt-8 mx-auto" href="/blog">Vai alle risorse</Link>
                </div>
            </section>
        </motion.div>
    )
}


