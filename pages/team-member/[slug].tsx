import React from "react";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {GetServerSideProps} from "next";
import styles from "../../styles/TeamMember.module.css";
import {motion} from "framer-motion";
import {blockReveal, blockTextReveal, fadeInUp, itemFade, lineLeftToRight, opacityAnimation} from "../../animations";
import Link from "next/link";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Head from "next/head";
import {TeamMemberService} from "../../services/team-member.service";
import {TeamMember} from "../../models/team-member";
import {NextjsUtils} from "../../services/nextjs-utils";

interface MemberPageProps {
    member: TeamMember,
}

export default function MemberPage({member}: MemberPageProps){

    return(

        <motion.section variants={opacityAnimation} initial="initial" animate="final" className="overflow-hidden mt-4 mb-12">
            <Head>
                <title>{member.name + " " + member.surname}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>
                <motion.div className="container flex flex-wrap justify-between">
                    <motion.div variants={fadeInUp} className="lg:w-5/12 w-full order-1">
                        <BreadCrumbs  mappedPaths={config} showHome={true} transformDynamicPath={path => {
                            if(path === "[slug]"){
                                return member.name +" "+member.surname
                            }
                            return path;
                        }} />
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                            <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}>{member.name +" "+ member.surname}</motion.h1>
                        </div>
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                            <motion.h4 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-primary mt-1"}>{member.profession}</motion.h4>
                        </div>

                        <motion.div variants={itemFade} initial="hidden" whileInView="show"  viewport={{once:true}} className={"lg:w-8/12  2xs:w-10/12 w-11/12 min-w-fit lg:mt-12 mt-6 opacity-0"}>
                            <div className={"bg-gray-200 p-6"}>
                                <h4>Links</h4>
                                <ul className={styles.links}>{member.link?.map((i: any, index: number) =>{
                                    return  <li key={index} className={"linkItem w-fit"}>
                                        <Link href={i.url} className={styles.content}>
                                            {i.icon && <img src={i.icon}/> }
                                            <p>{i.text}</p>
                                        </Link>

                                    </li>
                                })}</ul>
                            </div>
                            {member.linkedin && <Link href={member.linkedin} className="btn mx-auto flex items-center">
                                <RiLinkedinBoxLine className={"text-2xl mr-2"}/> Connettiti con me su Linkedin
                            </Link>}
                        </motion.div>
                    </motion.div>

                    <div className={`w-full lg:w-6/12  relative md:h-56 lg:h-auto order-2 lg:order-last`}>
                        <motion.img variants={itemFade} initial="hidden" whileInView="show" viewport={{once:true}} className={`${styles.imgCover} opacity-0`} src={"/assets/img/bg_teamMember.png"} />
                        <motion.img variants={fadeInUp} initial="initial" whileInView="final"  viewport={{ once: true }} className={"relative mt-12 -mb-12 mr-0 ml-auto z-20 top-[80px] lg:max-h-full max-h-[400px] opacity-0"} src={member.img} />
                    </div>
                </motion.div>

                <section className={"mt-24"}>
                    {member.customFields?.map((i: any) =>{
                        return <div key={i.id} className="mb-8 overflow-hidden">
                            <motion.div className={"containerRight"}>
                                <motion.div variants={lineLeftToRight} initial="initial" animate="final" viewport={{ once: true }}  className={"lineDivisor"}></motion.div>
                            </motion.div>
                            <div className={"container flex flex-row justify-between lg:flex-nowrap flex-wrap py-6"}>
                                <div className={"md:w-5/12 w-12/12 relative "}>
                                    <div className={"w-fit relative"}>
                                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                        <motion.h3 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="md:mb-0 mb-2 ">{i.title}</motion.h3>
                                    </div>
                                </div>
                                <div className={"md:w-6/12 w-12/12"}>
                                    <div className={"w-fit relative"}>
                                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                        <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}  dangerouslySetInnerHTML={{__html:i.value}} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    })}
                </section>

                <motion.div variants={fadeInUp} className="container mt-12 flex justify-between flex-wrap lg:flex-nowrap" >

                </motion.div>
            </main>

        </motion.section>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const { slug } = context.query
    const teamMemberService = new TeamMemberService();

    if(!slug)
        return NextjsUtils.returnNotFoundObject();

    const memberData = await teamMemberService.getBySlug(slug.toString());

    if(!memberData)
        return NextjsUtils.returnNotFoundObject();

    return NextjsUtils.returnServerSidePropsObject({member: memberData});
}

