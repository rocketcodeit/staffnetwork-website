import Head from 'next/head'
import Image from 'next/image'
import TeamMemberList from '../../components/TeamMember/TeamMemberList'
import {motion} from "framer-motion";
import {
    fadeInUp,
    blockReveal,
    blockTextReveal,
    lineLeftToRight} from "../../animations";
import Link from "next/link";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {config} from "../../config/breadcrumbs.config";
import React from "react";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {TeamMember} from "../../models/team-member";
import {ChiSiamoData} from "../../models/chi_siamo-data";
import {HowWeWorkService} from "../../services/how-we-work.service";
import {WhoWeAreService} from "../../services/who-we-are.service";
import {NextjsUtils} from "../../services/nextjs-utils";
import {TeamMemberService} from "../../services/team-member.service";

let url = "http://localhost:1337";

interface ChiSiamoPage {
    data : ChiSiamoData,
    membersTeam : TeamMember[]
}
export default function ChiSiamo({data, membersTeam} : ChiSiamoPage) {

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeOut"}}>
            <Head>
                <title>Chi siamo</title>
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
                                <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}> {data.title}</motion.h1>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div className="container">
                        <div className={"w-12/12 mx-auto"}>
                            <div className={"relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.img variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"w-full max-h-[32rem] mt-6 -mb-[20rem] object-cover"}  src={data.img}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className={"bg-primary-700 pt-[23rem] pb-12"}>
                        <div className={"container"}>
                            <div className={"w-6/12 mx-auto relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-primary-600"></motion.div>
                                <motion.div dangerouslySetInnerHTML={{__html:data.descriptionAboveTheFold}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-white text-center"} />
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section id={"storia"} className=" pt-24 overflow-hidden">
                    <motion.div className={"containerRight"}>
                        <motion.div variants={lineLeftToRight} initial="initial" whileInView="final" viewport={{ once: true }}  className={"lineDivisor"}></motion.div>
                    </motion.div>
                    <div className={"container flex flex-row justify-between py-6"}>
                        <div className={"w-5/12 relative "}>
                            <div className={"w-fit relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >{data.story.title}</motion.h2>

                            </div>
                        </div>
                        <div className={"w-6/12"}>
                            <div className={"w-fit relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.div dangerouslySetInnerHTML={{__html:data.story.description}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} />
                            </div>

                        </div>
                    </div>
                </section>

                <section id={"team"} className="mt-4 pt-20">
                    <div className={"container flex flex-row justify-center relative z-20"}>
                        <div className={"w-8/12"}>
                            <div className={"w-fit relative mx-auto"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                                <motion.h3  variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-center z-20"}>{data.staff.title}</motion.h3>
                            </div>
                        </div>
                    </div>
                    <div className={"container flex flex-row justify-center "}>
                        <div className={"w-full pt-20 -mt-12 mb-16 relative z-10 "}>
                            <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"w-11/12 md:w-10/12 bg-gray-100 h-[96%] left-0 right-0 -mt-20  mx-auto absolute"}>
                            </motion.div>
                            <div className="relative w-10/12 md:w-5/12 mb-6 mx-auto">
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                                <motion.div dangerouslySetInnerHTML={{__html:data.staff.description}} variants={blockTextReveal} initial="initial" whileInView="final" className={"text-center"} viewport={{ once: true }} />
                            </div>
                            <div className="w-12/12">
                                <TeamMemberList members={membersTeam!} />
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

    const chiSiamoService = new WhoWeAreService();
    const chiSiamoData = await chiSiamoService.getSingle({
        populate: [
            {value: '*'}
        ]
    })

    if(!chiSiamoData)
        return NextjsUtils.returnNotFoundObject();


    const memberService = new TeamMemberService();
    const membersData = await memberService.find({
        populate : [ {value:"*"}]
    })

    if(!membersData)
        return NextjsUtils.returnNotFoundObject();

    return NextjsUtils.returnServerSidePropsObject({
        data : chiSiamoData,
        membersTeam : membersData.data
    });

}
