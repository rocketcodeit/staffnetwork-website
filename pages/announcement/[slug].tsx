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
import Form, {TypeCategory} from "../../components/FormRequest/FormRequest";

interface IAnnouncementPageProps {
    announcement: IAnnouncement
}

export default function AnnouncementPage({announcement}: IAnnouncementPageProps) {


    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeOut"}}>
            <Head>
                <title>{announcement.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <main>
                <div className="container">

                    <section id={"abo"} className={"mt-8"}>
                        <BreadCrumbs mappedPaths={config} showHome={true} transformDynamicPath={path => {
                            if (path === "[slug]") {
                                return announcement.title
                            }
                            return path;
                        }}/>
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                        className="blockOverText bg-gray-200"></motion.div>
                            <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final"
                                       viewport={{once: true}} className="mb-4">{announcement.title}</motion.h1>
                        </div>
                        <div className={"w-6/12 relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                        className="blockOverText bg-gray-200"></motion.div>
                            <motion.div dangerouslySetInnerHTML={{__html: announcement.details.summary}}
                                        variants={blockTextReveal} initial="initial" whileInView="final"
                                        viewport={{once: true}}/>
                        </div>
                    </section>


                    <section id={"dettagli"}>
                        <div className={"w-12/12 bg-gray-200 p-6 pb-0 pr-0  mt-4"}>
                            <h4 className={""}>Dettagli della misura</h4>

                            <div className={"mt-4 flex gap-10 flex-wrap mb-8 pr-8"}>

                                {(announcement.regions) &&
                                    <div className={"regionsBox"}>
                                        <div className={"mb-1"}>Regione</div>
                                        {
                                            announcement.regions?.map((t, i) => {
                                                return <h5 className={"mb-0.5"} key={i}>{t}</h5>

                                            })
                                        }
                                    </div>
                                }

                                {(announcement.provinces) &&
                                    <div className={"provincesBox"}>
                                        <div className={"mb-1"}>Provincie</div>
                                        {
                                            announcement.provinces?.map((t, i) => {
                                                return <h5 className={"mb-0.5"} key={i}>{t}</h5>

                                            })
                                        }
                                    </div>
                                }

                                <div className={"recipientsBox"}>
                                    <div className={"mb-1"}>Destinatari</div>
                                    {
                                        announcement.recipients?.map((t, i) => {
                                            return <h5 className={"mb-0.5"} key={i}>{t.title}</h5>

                                        })
                                    }
                                </div>
                                <div className={"investimentTypeBox"}>
                                    <div>Tipologia di investimento</div>
                                    <h5>{announcement.investimentType}</h5>
                                </div>
                                <div className={"contributionTypeBox"}>
                                    <div>Tipo di contributo</div>
                                    <h5>
                                        {announcement.contributionType?.map((contribute, index) => {
                                            return <div key={index}>{contribute}</div>
                                        })}
                                    </h5>
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
                                <div className={"mt-8"} dangerouslySetInnerHTML={{__html: announcement.description}}/>
                                {announcement.obj?.map((o) => {
                                    return <div key={o.id} className={"mt-8"}>
                                        <h3 className={"mb-3"}>{o.title}</h3>
                                        <div dangerouslySetInnerHTML={{__html: o.value}}/>
                                    </div>
                                })}
                            </div>
                            <div className={"w-11/12 lg:w-4/12"}>
                                <img className={"mt-8"} src={announcement.img}/>
                            </div>
                        </div>

                    </section>


                    <section
                        className={`my-12 flex flex-row ${announcement.buyable ? "justify-between" : "justify-center"} items-start`}>
                        {announcement.buyable &&
                            <div id={"acquista"} className={"bg-gray-200 flex w-5/12 sticky top-40"}>
                                <div className={"flex flex-row flex-wrap w-full justify-between"}>
                                    <div className={"w-full flex flex-row justify-between px-4 pt-6 pb-3"}>
                                        <div className={"w-6/12"}>
                                            <h4 className={"mb-2"}>Cosa offriamo</h4>
                                            <p>Il prezzo è riferito al bando. </p>
                                        </div>
                                        {
                                            announcement.buyable?.discountPrice ?
                                                <div className={"w-6/12 text-end"}>
                                                    <del className={"text-gray-600"}>{announcement.buyable?.price} €
                                                    </del>
                                                    <h3>{announcement.buyable?.discountPrice} €</h3>
                                                </div> :
                                                <h3 className={"w-6/12 text-end"}> {announcement.buyable?.price} €</h3>


                                        }
                                    </div>
                                    <Link href={""} className={"btn w-full text-center"}>Acquista</Link>
                                </div>
                            </div>}
                        <div id={"contattaci"}  className={"w-12/12 lg:w-6/12 relative "}>
                            <Form title={announcement.requestForm?.title} description={announcement.requestForm?.text} page={"Bando - " + announcement.title}
                                  typePage={announcement.buyable ? TypeCategory.purchasableItem : TypeCategory.item}/>

                        </div>
                    </section>


                </div>
            </main>

        </motion.section>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    const {slug} = context.query

    const announcementService = new AnnouncementService();

    if (!slug)
        return NextjsUtils.returnNotFoundObject();

    const announcementData = await announcementService.getBySlug(slug.toString());

    if (!announcementData)
        return NextjsUtils.returnNotFoundObject();

    return NextjsUtils.returnServerSidePropsObject({announcement: announcementData});

}
