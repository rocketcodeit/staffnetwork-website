import Head from 'next/head'
import styles from '../styles/Contatti.module.css'
import {motion} from "framer-motion";
import configuration from "../config/WebsiteConfig";
import {container, fadeInUp, item, stagger, blockReveal, blockTextReveal} from "../animations";
import React from "react";
import Link from "next/link";
import ReactMapboxGl, {Layer, Feature, Marker} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { RiInstagramLine,RiFacebookBoxLine,RiTwitterLine} from "react-icons/ri";
import { ReactSVG } from "react-svg";
import NewLineText from "../models/NewLineText";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";



let url = "http://localhost:1337";


export default function Contatti({data} : InferGetServerSidePropsType<typeof getServerSideProps>) {

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1Ijoibmljb2xhY2lhbm8iLCJhIjoiY2t4cHYweGg3MWptaDJ2a28weTMzZWZ2bSJ9.X9i3oJ567Pl9OP3rjuyGxw'
    });

    return (
        <>
            <Head>
                <title>Contatti</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}}>
                <section>
                    <motion.div className="containerRight flex flex-wrap justify-between">
                        <motion.div variants={fadeInUp} className="w-full order-1">
                            <div className={"w-fit relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                                <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"mb-4 mt-8"}>Contatti</motion.h1>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="w-full lg:w-6/12 order-last flex flex-col lg:order-2 order-2 justify-center">
                            <div className={"w-fit relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                                <motion.ul variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"flex flex-col gap-4"}>
                                    <li>
                                        <motion.div dangerouslySetInnerHTML={{__html:data.indirizzo}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={""} />
                                    </li>
                                    <li>
                                        <motion.div dangerouslySetInnerHTML={{__html:data.orariApertura}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={""} />
                                    </li>
                                    {data.informazioniContatto.collegamenti.map((i : any, index: number) => {
                                        return <li key={index} className={"linkItem linkItemPrimary"}>
                                            {i.beforeTitle ? i.beforeTitle : ""}
                                            <Link  className="text-primary hover:text-primary-600" href={i.href}>{i.title}</Link>
                                            {i.afterTitle ? i.afterTitle : ""}
                                        </li>

                                    })}
                                </motion.ul>
                            </div>
                            <div id={"social"} className={"w-fit relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                                <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="icons flex flex-row justify-start gap-5 items-center xs:p-0 mt-7 ">
                                    {data.informazioniContatto.social.map((i : any, index: number) => {
                                        return <Link key={index} href={i.href}>
                                            {i.beforeTitle ? i.beforeTitle : ""}
                                            <ReactSVG beforeInjection={(svg) => {
                                                svg.classList.add('stroke-primary')}}
                                                      className={"text-primary stroke-primary"} src={url + i.icon.data.attributes.url} />
                                            {i.afterTitle ? i.afterTitle : ""}
                                        </Link>

                                    })}
                                </motion.div>
                            </div>

                        </motion.div>
                        <motion.div variants={fadeInUp} className={`w-full lg:w-5/12 backgroundRight bg-cover relative h-56 lg:h-auto order-last overflow-hidden lg:mt-0 mt-6`}>
                            <Map
                                style="mapbox://styles/nicolaciano/clcg1dd5r00ay14n60tw7w1rm"
                                center={[16.55724,40.82673]}
                                zoom={[16]}
                                containerStyle={{
                                    height: '500px',
                                    width: '100%'
                                }}
                            >
                                <Marker
                                    coordinates={[16.55724,40.82673]}
                                    anchor="bottom">
                                    <img src={"/assets/drawable/facebook.svg"}/>
                                </Marker>
                            </Map>
                        </motion.div>
                    </motion.div>
                </section>
                <section id={"form"} className={"lg:mt-20 mt-10"}>
                    <motion.div>
                        <div className={"lg:w-5/12 md:w-8/12  w-11/12 mx-auto"}>
                            <div className={"w-fit relative mx-auto"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                                <motion.h3 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-center mb-4"}>{data.titoloForm}</motion.h3>
                            </div>
                            <div className={"w-fit relative mx-auto"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                                <motion.div dangerouslySetInnerHTML={{__html:data.descrizioneForm}} variants={blockTextReveal} className={"text-center"} initial="initial" whileInView="final" viewport={{ once: true }} />

                            </div>
                        </div>
                        <div className={"w-fit relative mx-auto"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                            <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"xl:w-7/12 lg:w-8/12 w-11/12 bg-gray-200 lg:p-12 md:p-8 px-6 py-4 mx-auto flex gap-x-9 gap-y-6 flex-2-1.5 flex-wrap mt-8 mb-20"}>


                                <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                                    <input type="text" id="floating_standard" className="peer" placeholder=" "/>
                                    <label htmlFor="floating_standard"  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                                </div>
                                <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                                    <input type="text" id="floating_standard" className="peer" placeholder=" "/>
                                    <label htmlFor="floating_standard"  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cognome</label>
                                </div>
                                <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                                    <input type="tel" id="floating_standard" className="peer" placeholder=" "/>
                                    <label htmlFor="floating_standard"  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono*</label>
                                </div>
                                <div className="relative md:flex-2-1.5 flex-auto z-0 floatingInput">
                                    <input type="email" id="floating_standard" className="peer" placeholder=" "/>
                                    <label htmlFor="floating_standard"  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email*</label>
                                </div>
                                <div className="relative w-full z-0 floatingInput">
                                    <select id="underline_select" className="peer">
                                        <option selected>In quale categoria ti riconosci?</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div className="relative w-full z-0 floatingInput">
                                    <textarea id="floating_standard" className={"w-full"} placeholder="Richiesta"></textarea>
                                </div>
                                <div className={"w-fit mx-auto mt-2"}>
                                    <button type={"submit"} className={"btn"}>Invia</button>
                                </div>
                            </motion.div>
                        </div>


                    </motion.div>
                </section>
            </motion.div>
        </>
    )
}



export const getServerSideProps: GetServerSideProps<any> = async (context) => {
    // Fetch data from external API

    const resContatti = await fetch(`${url}/api/contatti?populate=*&populate[0]=informazioniContatto&populate[1]=informazioniContatto.collegamenti,informazioniContatto.social&populate[2]=informazioniContatto.social.icon`);
    const contattiData = await resContatti.json();


    const result: any = {
        data : contattiData.data.attributes
    }

    // Pass data to the page via props
    return {
        props: result
    };
}



