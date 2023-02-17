import React from "react";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {config} from "../../config/breadcrumbs.config";
import {motion} from "framer-motion";
import styles from "../../styles/Announcement.module.css";
import {blockReveal, blockTextReveal, fadeInUp} from "../../animations";
import Head from "next/head";

import moment from "moment";
import Link from "next/link";
import {IAnnouncement} from "../../models/IAnnouncement";
import {AnnouncementService} from "../../services/announcement.service";
import {NextjsUtils} from "../../services/nextjs-utils";

let url ="http://localhost:1337";

interface IAnnouncementPageProps{
    announcement : IAnnouncement
}

export default function AnnouncementPage({announcement} : IAnnouncementPageProps){


    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.4,ease: "easeOut"}}>
            <Head>
                <title>{announcement.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>
                <div className="container">

                    <section id={"abo"} className={"mt-8"}>
                        <BreadCrumbs mappedPaths={config} showHome={true} transformDynamicPath={path => {
                            if(path === "[slug]"){
                                return announcement.title
                            }
                            return path;
                        }} />
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                            <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="mb-4">{announcement.title}</motion.h1>
                        </div>
                        <div className={"w-6/12 relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                            <motion.div dangerouslySetInnerHTML={{__html:announcement.details.summary}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}/>
                        </div>
                    </section>


                    <section id={"dettagli"}>
                        <div className={"w-12/12 bg-gray-200 p-6 pb-0 pr-0  mt-4" }>
                            <h4 className={""}>Dettagli della misura</h4>

                            <div className={"mt-4 flex gap-10 flex-wrap mb-8 pr-8"}>

                                {(announcement.regions) &&
                                <div className={"regionsBox"}>
                                    <div className={"mb-1"}>Regione</div>
                                    {
                                        announcement.regions?.map((t,i) => {
                                            return  <h5 className={"mb-0.5"} key={i}>{t}</h5>

                                        })
                                    }
                                </div>
                                }

                                {(announcement.provinces) &&
                                    <div className={"provincesBox"}>
                                        <div className={"mb-1"}>Provincie</div>
                                        {
                                            announcement.provinces?.map((t,i) => {
                                                return  <h5 className={"mb-0.5"} key={i}>{t}</h5>

                                            })
                                        }
                                    </div>
                                }

                                <div className={"recipientsBox"}>
                                    <div className={"mb-1"}>Destinatari</div>
                                    {
                                        announcement.recipients?.map((t,i) => {
                                            return  <h5 className={"mb-0.5"} key={i}>{t.title}</h5>

                                        })
                                    }
                                </div>
                                <div className={"investimentTypeBox"}>
                                    <div>Tipologia di investimento</div>
                                    <h5>{announcement.investimentType}</h5>
                                </div>
                                <div className={"contributionTypeBox"}>
                                    <div>Tipo di contributo</div>
                                    <h5>{announcement.contributionType}</h5>
                                </div>
                                {announcement.details.other?.map((o, index) => {
                                    return <div key={index}>
                                        <div>{o.title}</div>
                                        <h5>{o.value}</h5>
                                    </div>
                                })}
                            </div>

                            <div className={styles.buttonsContainer}>
                                {announcement.buyable &&
                                    <div className={"flex flex-row items-center gap-5"}>
                                        <h5>€ {announcement.buyable.price}</h5>
                                        <Link href={"#acquista"} className={"btn black"}>Acquista</Link>
                                    </div>
                                }
                                 <Link href={"#contattaci"} className={"btn"}>Contattaci</Link>
                            </div>

                        </div>
                    </section>

                    <section id={"descrizione"}>

                        <div className={"flex flex-wrap justify-between"}>
                            <div className={"w-12/12 lg:w-7/12"}>
                                <div className={"mt-8"} dangerouslySetInnerHTML={{__html:announcement.description}} />
                                {announcement.obj?.map((o) =>{
                                    return <div key={o.id} className={"mt-8"}>
                                        <h3 className={"mb-3"}>{o.title}</h3>
                                        <div dangerouslySetInnerHTML={{__html:o.value}} />
                                    </div>
                                })}
                            </div>
                            <div className={"w-11/12 lg:w-4/12"}>
                                <img className={"mt-8"} src={announcement.img} />
                            </div>
                        </div>

                    </section>




                    <section className={`my-12 flex flex-row ${announcement.buyable ? "justify-between" : "justify-center"} items-start`}>
                        {announcement.buyable && <div id={"acquista"} className={"bg-gray-200 flex w-5/12 sticky top-40"}>
                            <div className={"flex flex-row flex-wrap w-full justify-between"}>
                                <div className={"w-full flex flex-row justify-between px-4 pt-6 pb-3"}>
                                    <div className={"w-6/12"}>
                                        <h4 className={"mb-2"}>Cosa offriamo</h4>
                                    <p>Il prezzo è riferito al bando. </p>
                                    </div>
                                    {
                                        announcement.buyable?.discountPrice ?
                                            <div className={"w-6/12 text-end"} >
                                                <del className={"text-gray-600"}>{announcement.buyable?.price} €</del>
                                                <h3>{announcement.buyable?.discountPrice} €</h3>
                                            </div>  :
                                            <h3 className={"w-6/12 text-end"}> {announcement.buyable?.price} €</h3>


                                    }
                                </div>
                                <Link href={""} className={"btn w-full text-center"}>Acquista</Link>
                            </div>
                        </div> }
                        <div id={"contattaci"} className={"md:w-10/12 lg:w-7/12 xl:w-6/12 relative "}>
                            <div className={"mx-auto"}>
                                <h3 className={`${announcement.buyable ? "text-left" : "text-center"}`}>{announcement.requestForm?.title}</h3>
                                <p className={`max-w-xl  mt-2 ${announcement.buyable ? "text-left" : "text-center mx-auto"}`}>{announcement.requestForm?.text}</p>
                            </div>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                            <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"bg-gray-200 lg:p-12 md:p-8 px-6 py-4 mx-auto flex gap-x-9 gap-y-6 flex-2-1.5 flex-wrap mt-8"}>
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
                    </section>


                </div>
            </main>

        </motion.section>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    const { slug } = context.query

    const announcementService = new AnnouncementService();

    if(!slug)
        return NextjsUtils.returnNotFoundObject();

    const announcementData = await announcementService.getBySlug(slug.toString());

    if(!announcementData)
        return NextjsUtils.returnNotFoundObject();

    return NextjsUtils.returnServerSidePropsObject({announcement: announcementData});

}
