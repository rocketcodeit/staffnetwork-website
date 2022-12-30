import React from "react";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {GetServerSideProps} from "next";
import {team} from "../../pages/api/teamMember/teamMemberData"
import styles from "../../styles/TeamMember.module.css";
import {motion} from "framer-motion";
import {blockReveal, blockTextReveal, fadeInUp, itemFade, lineLeftToRight, opacityAnimation} from "../../animations";
import {ITeamMember} from "../../models/ITeamMember";
import Link from "next/link";
import { RiLinkedinBoxLine } from "react-icons/ri";

export default function MemberPage(props:{member : ITeamMember}){

    return(
        <motion.section variants={opacityAnimation} initial="initial" animate="final" className="overflow-hidden mt-4 mb-12">
            <motion.div className="container flex flex-wrap justify-between">
                <motion.div variants={fadeInUp} className="w-5/12 order-1">
                    <BreadCrumbs  mappedPaths={config} showHome={true} transformDynamicPath={path => {
                        if(path === "[slug]"){
                            return props.member.name
                        }
                        return path;
                    }} />
                    <div className={"w-fit relative"}>
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                        <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}>{props.member.name +" "+ props.member.surname}</motion.h1>
                    </div>
                    <div className={"w-fit relative"}>
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                        <motion.h4 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-primary mt-1"}>{props.member.profession}</motion.h4>
                    </div>

                    <motion.div variants={itemFade} initial="hidden" whileInView="show"  viewport={{once:true}} className={"w-8/12 mt-12 opacity-0"}>
                        <div className={"bg-gray-200 p-6"}>
                            <h4>Links</h4>
                            <ul className={styles.links}>{props.member.link?.map((i) =>{
                                return  <li className={"linkItem w-fit"}>
                                    <Link href={i.url} className={styles.content}>
                                        {i.icon && <img src={i.icon}/> }
                                         <p>{i.text}</p>
                                    </Link>

                                </li>
                            })}</ul>
                        </div>
                        <Link className="btn mx-auto flex items-center" href={props.member.linkedin}>
                            <RiLinkedinBoxLine className={"text-2xl mr-2"}/> Connettiti con me su Linkedin</Link>
                    </motion.div>
                </motion.div>

                <div className={`w-full lg:w-6/12  relative h-56 lg:h-auto order-2 lg:order-last`}>
                    <motion.img variants={itemFade} initial="hidden" whileInView="show" viewport={{once:true}} className={`${styles.imgCover} opacity-0`} src={"/assets/img/bg_teamMember.png"} />
                    <motion.img variants={fadeInUp} initial="initial" whileInView="final" className={"relative mt-12 -mb-12 mr-0 ml-auto z-20 top-[80px] opacity-0"} src={props.member.img} />
                </div>
            </motion.div>

            <section className="mt-24 overflow-hidden">
                <motion.div className={"containerRight"}>
                    <motion.div variants={lineLeftToRight} initial="initial" animate="final" viewport={{ once: true }}  className={"lineDivisor"}></motion.div>
                </motion.div>
                <div className={"container flex flex-row justify-between py-6"}>
                    <div className={"w-5/12 relative "}>
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.h3 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >Esperienza professionale</motion.h3>
                        </div>
                    </div>
                    <div className={"w-6/12"}>
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.p variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >{props.member.experience}</motion.p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="mt-24 overflow-hidden">
                <motion.div className={"containerRight"}>
                    <motion.div variants={lineLeftToRight} initial="initial" whileInView="final" viewport={{ once: true }}  className={"lineDivisor"}></motion.div>
                </motion.div>
                <div className={"container flex flex-row justify-between py-6"}>
                    <div className={"w-5/12 relative "}>
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.h3 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >Formazione</motion.h3>
                        </div>
                    </div>
                    <div className={"w-6/12"}>
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.p variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >{props.member.education}</motion.p>
                        </div>

                    </div>
                </div>
            </section>
            <motion.div variants={fadeInUp} className="container mt-12 flex justify-between flex-wrap lg:flex-nowrap" >

            </motion.div>
        </motion.section>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const { slug } = context.query

    const memberFound = team.find( (member) => member.slug === slug);

    if(memberFound){
        return{
            props : {
                member : memberFound
            }
        }
    }

    return {
        notFound : true
    };
    // return {props : { a : 3 }}
}