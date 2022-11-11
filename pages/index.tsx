import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {ArrowRightIcon} from '@heroicons/react/24/outline'
import TeamMemberList from '../components/TeamMember/TeamMemberList'
import {ITeamMember} from "../models/ITeamMember";
import PostList from "../components/Post/PostList";


export default function Home() {
    return (
        <div className={styles.container}>
            <section>
                <div className="h-screen-90">
                    <img className={`${styles.containerRight} img-abo`} src="/assets/img/home_header.png"/>
                    <div className="drop-shadow-xl bg-zinc-900/80 absolute top-48 left-0 right-36 w-9/12 p-20">
                        <h2 className="text-4xl font-medium text-white mb-6">La crescita aziendale è un percorso di cui
                            conosciamo
                            la strada</h2>
                        <p className="text-white w-9/12 mb-5">Siamo un’organizzazione multidisciplinare di
                            professionisti con l’obiettivo di rendere
                            effettiva la crescita della tua impresa attraverso un piano strategico di azioni concrete e
                            mirate per l’efficientamento
                            aziendale.</p>
                        <button className="btn">
                            Scopri i servizi
                        </button>
                    </div>
                </div>

            </section>
            <section className="mt-24">
                <div className={`${styles.containerLeft} `}>
                    <div
                        className="bg-[url('/assets/img/pexels-faris-al-orfali-1697160%202.png')] w-full bg-primary-dark flex flex-flow flex-wrap justify-between bg-no-repeat bg-right">
                        <div className="w-5/12 pt-32 container ml-0 mb-8">
                            <h3 className="text-3xl font-medium text-white">Aree di intervento</h3>
                            <p className="mt-5 text-white">Ognuna delle aree aziendali intrattiene relazioni di
                                dipendenza e scambio con numerose altre
                                e non può essere trattata come entità isolata. In accordo con tale visione, i nostri
                                servizi
                                agiscono in maniera trasversale e integrata sui comparti cruciali di un business.</p>
                        </div>
                        <div className="z-10 container pr-0 w-full grid grid-cols-3 gap-4 mb-[-96px]">
                            <div className="bg-gray-200 h-48 flex flex-col justify-end p-10 pb-0 pr-0">
                                <h4 className="text-2xl font-medium pr-4">Amministrazione</h4>
                                <p className="pr-4">Attività amministrative, contabili e di gestione delle risorse umane
                                    dell'impresa</p>
                                <button className="btn-arrow self-end">
                                    <p className="mr-2">Scopri di più</p>
                                    <ArrowRightIcon className="w-6 stroke-primary-dark"/>
                                </button>
                            </div>
                            <div className="bg-gray-200 h-48 flex flex-col justify-end p-10 pb-0 pr-0">
                                <h4 className="text-2xl font-medium pr-4">Amministrazione</h4>
                                <p className="pr-4">Attività amministrative, contabili e di gestione delle risorse umane
                                    dell'impresa</p>
                                <button className="btn-arrow self-end">
                                    <p className="mr-2">Scopri di più</p>
                                    <ArrowRightIcon className="w-6 stroke-primary-dark"/>
                                </button>
                            </div>
                            <div className="bg-gray-200 h-48 flex flex-col justify-end p-10 pb-0 pr-0">
                                <h4 className="text-2xl font-medium pr-4">Amministrazione</h4>
                                <p className="pr-4">Attività amministrative, contabili e di gestione delle risorse umane
                                    dell'impresa</p>
                                <button className="btn-arrow self-end">
                                    <p className="mr-2">Scopri di più</p>
                                    <ArrowRightIcon className="w-6 stroke-primary-dark"/>
                                </button>
                            </div>
                            <div className="bg-gray-200 h-48 flex flex-col justify-end p-10 pb-0 pr-0">
                                <h4 className="text-2xl font-medium pr-4">Amministrazione</h4>
                                <p className="pr-4">Attività amministrative, contabili e di gestione delle risorse umane
                                    dell'impresa</p>
                                <button className="btn-arrow self-end">
                                    <p className="mr-2">Scopri di più</p>
                                    <ArrowRightIcon className="w-6 stroke-primary-dark"/>
                                </button>
                            </div>
                            <div className="bg-gray-200 h-48 flex flex-col justify-end p-10 pb-0 pr-0">
                                <h4 className="text-2xl font-medium pr-4">Amministrazione</h4>
                                <p className="pr-4">Attività amministrative, contabili e di gestione delle risorse umane
                                    dell'impresa</p>
                                <button className="btn-arrow self-end">
                                    <p className="mr-2">Scopri di più</p>
                                    <ArrowRightIcon className="w-6 stroke-primary-dark"/>
                                </button>
                            </div>
                            <div className="bg-gray-200 h-48 flex flex-col justify-end p-10 pb-0 pr-0">
                                <h4 className="text-2xl font-medium pr-4">Amministrazione</h4>
                                <p className="pr-4">Attività amministrative, contabili e di gestione delle risorse umane
                                    dell'impresa</p>

                                <button className="btn-arrow self-end">
                                    <p className="mr-2">Scopri di più</p>
                                    <ArrowRightIcon className="w-6 stroke-primary-dark"/>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className="mt-48">
                <div className="w-6/12 container ml-0">
                    <h2 className="text-3xl font-medium mb-8">Staff Network in cifre</h2>
                </div>
                <div className={`${styles.containerRight} flex flex-flow `}>
                    <div className="w-7/12 bg-[url('/assets/img/stephen-dawson-qwtCeJ5cLYs-unsplash.png')]">

                    </div>
                    <div className="w-6/12 mb-20 bg-gray-200 ml-[-8.333%] pl-16 py-12">
                        <div className="counter flex flex-flow items-center mb-4">
                            <h4 className="font-medium text-4xl mr-2">37</h4>
                            <p className="text-xl">Anni di esperienza</p>
                        </div>
                        <div className="counter flex flex-flow items-center mb-4">
                            <h4 className="font-medium text-4xl mr-2">37</h4>
                            <p className="text-xl">Anni di esperienza</p>
                        </div>
                        <div className="counter flex flex-flow items-center mb-4">
                            <h4 className="font-medium text-4xl mr-2">37</h4>
                            <p className="text-xl">Anni di esperienza</p>
                        </div>
                        <div className="counter flex flex-flow items-center mb-4">
                            <h4 className="font-medium text-4xl mr-2">37</h4>
                            <p className="text-xl">Anni di esperienza</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="mt-24">
                <div className="container mb-10">
                    <h2 className="text-center text-3xl font-medium mb-5">Lo Staff</h2>
                    <p className="w-6/12  mx-auto text-center">L’elevata specializzazione dei singoli professionisti
                        unita alla multidisciplinarietà
                        dell’insieme ci consente di annullare la dispersione informativa e documentale ed essere al
                        tempo stesso più precisi, rapidi ed efficaci nell’esecuzione dei servizi e nell’avanzamento dei
                        progetti.</p>
                </div>
                <TeamMemberList itemsCount={3}/>
                <div className="w-full  ">
                    <a className="btn mx-auto block w-fit mt-6" href="/chi-siamo">Conosci i professionisti</a>

                </div>
            </section>

            <section className="bg-primary-100 mt-24">
                <div className="container flex flex-flow justify-between">
                    <div className="w-5/12 py-32">
                        <h2 className="text-3xl font-medium mb-5">Network & Partnership</h2>
                        <p>Siamo alla ricerca costante di studi e professionisti con cui intessere solidi rapporti di
                            collaborazione e interscambio di competenze.

                            Scopri come entrare nella nostra rete ad alto valore aggiunto.
                        </p>
                        <a className="btn block w-fit mt-4" href="/chi-siamo">Conosci i professionisti</a>
                    </div>
                    <div className="w-6/12 bg-cover bg-[url('/assets/img/pexels-gustavo-fring-628510.png')]" >
                    </div>
                </div>
            </section>

            <section className="mt-24">
                <div className="container">
                    <h2 className="text-3xl font-medium mb-5">Le Risorse</h2>
                    <PostList itemsCount={3} />
                    <a className="btn block w-fit mt-8 mx-auto" href="/post/index.tsx">Vai alle risorse</a>
                </div>
            </section>
        </div>
    )
}


