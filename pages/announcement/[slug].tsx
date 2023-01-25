import React from "react";
import {GetServerSideProps} from "next";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {config} from "../../config/breadcrumbs.config";
import {motion} from "framer-motion";
import styles from "../../styles/Announcement.module.css";
import {blockReveal, blockTextReveal, fadeInUp} from "../../animations";
import Head from "next/head";

import {IAnnouncement} from "../../models/IAnnouncement";
import {announcements} from "../api/announcement/announcementData";
import moment from "moment";
import NewlineText from "../../models/NewLineText";
import Link from "next/link";

export default function AnnouncementPage(props : { announcement : IAnnouncement} ){
    //const dataConfiguration : IWebsiteConfiguration = configuration;

    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.4,ease: "easeOut"}}>
            <Head>
                <title>{props.announcement.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>
                <div className="container">


                    <BreadCrumbs mappedPaths={config} showHome={true} transformDynamicPath={path => {
                        if(path === "[slug]"){
                            return props.announcement.title
                        }
                        return path;
                    }} />
                    <div className={"w-fit relative"}>
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                        <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="mb-4">{props.announcement.title}</motion.h1>
                    </div>
                    <div className={"w-6/12 relative"}>
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                        <motion.p variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}>{props.announcement.details.summary}</motion.p>
                    </div>


                    <div className={"w-12/12 bg-gray-200 p-6 pb-0 pr-0"}>
                        <h4 className={""}>Dettagli della misura</h4>

                        <div className={"mt-4 flex gap-8"}>

                            <div><p>Data di scadenza</p> <h5>{moment(props.announcement.details.expirationDate).format('DD.MM.yyyy')}</h5></div>
                            <div><p>Chi può accedervi</p> <h5>{props.announcement.recipients}</h5></div>

                            {props.announcement.details.obj?.map((o) => {
                            return <div>
                                        <div>{o.title}</div>
                                        <h5>{o.value}</h5>
                                    </div>
                        })}
                        </div>

                        <div className={styles.buttonsContainer}>
                            {props.announcement.buyable &&
                                <div className={"flex flex-row items-center gap-5"}>
                                    <h5>€ {props.announcement.buyable.price}</h5>
                                    <Link href={"#acquista"} className={"btn black"}>Acquista</Link>
                                </div>
                                }
                            {props.announcement.requestForm && <Link href={"#contattaci"} className={"btn"}>Contattaci</Link>}
                        </div>

                    </div>

                    {props.announcement.obj?.map((o) =>{
                      return <div key={o.id} className={"w-7/12 mt-12 "}>
                                <h3>{o.title}</h3>
                                <NewlineText text={o.value} />
                            </div>
                    })}
                    <section className={`my-12 flex flex-row ${props.announcement.buyable ? "justify-between" : "justify-center"} items-start`}>
                        {props.announcement.buyable && <div id={"acquista"} className={"bg-gray-200 flex w-5/12 sticky top-40"}>
                            <div className={"flex flex-row flex-wrap w-full justify-between"}>
                                <div className={"w-full flex flex-row justify-between px-4 pt-6 pb-3"}>
                                    <div className={"w-6/12"}>
                                        <h4 className={"mb-2"}>Cosa offriamo</h4>
                                    <p>Il prezzo è riferito al bando. </p>
                                    </div>
                                    {
                                        props.announcement.buyable?.discountPrice ?
                                            <div className={"w-6/12 text-end"} >
                                                <del className={"text-gray-600"}>{props.announcement.buyable?.price} €</del>
                                                <h3>{props.announcement.buyable?.discountPrice} €</h3>
                                            </div>  :
                                            <h3 className={"w-6/12 text-end"}> {props.announcement.buyable?.price} €</h3>


                                    }
                                </div>
                                <Link href={""} className={"btn w-full text-center"}>Completa l'acquisto</Link>
                            </div>
                        </div> }
                        <div id={"contattaci"} className={"w-6/12 relative "}>
                            <div className={"mx-auto"}>
                                <h3 className={`${props.announcement.buyable ? "text-left" : "text-center"}`}>{props.announcement.requestForm?.title}</h3>
                                <p className={`max-w-xl  mt-2 ${props.announcement.buyable ? "text-left" : "text-center mx-auto"}`}>{props.announcement.requestForm?.text}</p>
                            </div>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                            <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"bg-gray-200 lg:p-12 md:p-8 px-6 py-4 mx-auto flex gap-x-9 gap-y-6 flex-2-1.5 flex-wrap mt-8"}>
                                {props.announcement.requestForm?.field.map((input) =>{
                                    if(input.type.toLowerCase() == "select"){
                                        return <div key={input.id} className={`relative ${input.size == 100 ? "w-full" : "md:flex-2-1.5 flex-auto"} z-0 floatingInput`}>
                                            <select id={input.id} className="peer">
                                                {input.options?.option.map((option) => {
                                                    return <option key={option.id}  value={option.value} selected={option.selected} disabled={option.disabled}>
                                                        {option.title}
                                                    </option>
                                                })
                                                }
                                            </select>
                                        </div>
                                    }
                                    else if (input.type.toLowerCase() == "textarea"){
                                        return <div key={input.id} className={`relative ${input.size == 100 ? "w-full" : "md:flex-2-1.5"} flex-auto z-0 floatingInput`}>
                                            <textarea id={input.id} className={"w-full"} placeholder={input.placeholder}></textarea>

                                        </div>
                                    }
                                    else{
                                        return <div key={input.id} className={`relative ${input.size == 100 ? "w-full" : "md:flex-2-1.5"} flex-auto z-0 floatingInput`}>
                                            <input type={input.type} id={input.id} className="peer" pattern={input.pattern ? input.pattern : undefined} placeholder=" " required={input.required} />
                                            <label htmlFor={input.id}  className=" peer-focus:left-0 peer-focus:text-primary-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{input.placeholder}{input.required ? "*" : ""} </label>
                                        </div>
                                    }
                                })}


                                <div className={"w-fit mx-auto mt-2"}>
                                    {props.announcement.requestForm?.button.map((btn) => {
                                        return <button key={btn.id} type={btn.type} className={"btn"}>{btn.text}</button>
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </section>


                </div>
            </main>

        </motion.section>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    const { slug } = context.query

    const announcementFound = announcements.find( (announcement) => announcement.slug === slug);

    if(announcementFound){
        return{
            props : {
                announcement : announcementFound
            }
        }
    }

    return {
        notFound : true
    };
   // return {props : { a : 3 }}
}