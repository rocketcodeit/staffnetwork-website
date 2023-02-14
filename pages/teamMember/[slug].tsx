import React from "react";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {team} from "../../pages/api/teamMember/teamMemberData"
import styles from "../../styles/TeamMember.module.css";
import {motion} from "framer-motion";
import {blockReveal, blockTextReveal, fadeInUp, itemFade, lineLeftToRight, opacityAnimation} from "../../animations";
import {ITeamMember} from "../../models/ITeamMember";
import Link from "next/link";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Head from "next/head";


let url ="http://localhost:1337";


export default function MemberPage({member} : InferGetServerSidePropsType<typeof getServerSideProps>){

    const memberFound : ITeamMember = {
        slug: member.slug,
        name: member.nome,
        surname: member.cognome,
        img :  member.image.data && url + member.image.data.attributes.url,
        profession : member.ruolo,
        link : member.links?.map((link: any, index: number) =>{
            return{
                text: link.title,
                url: link.href,
            }
        }),
        obj : member.dettagliEsperienze?.map((item : any, index : number) =>{
            return{
                id:+index,
                title: item.titolo,
                value: item.descrizione
            }
        })
    }

    return(

        <motion.section variants={opacityAnimation} initial="initial" animate="final" className="overflow-hidden mt-4 mb-12">
            <Head>
                <title>{memberFound.name + " " + memberFound.surname}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>
                <motion.div className="container flex flex-wrap justify-between">
                    <motion.div variants={fadeInUp} className="lg:w-5/12 w-full order-1">
                        <BreadCrumbs  mappedPaths={config} showHome={true} transformDynamicPath={path => {
                            if(path === "[slug]"){
                                return memberFound.name +" "+memberFound.surname
                            }
                            return path;
                        }} />
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                            <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}>{memberFound.name +" "+ memberFound.surname}</motion.h1>
                        </div>
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                            <motion.h4 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-primary mt-1"}>{memberFound.profession}</motion.h4>
                        </div>

                        <motion.div variants={itemFade} initial="hidden" whileInView="show"  viewport={{once:true}} className={"lg:w-8/12  2xs:w-10/12 w-11/12 min-w-fit lg:mt-12 mt-6 opacity-0"}>
                            <div className={"bg-gray-200 p-6"}>
                                <h4>Links</h4>
                                <ul className={styles.links}>{memberFound.link?.map((i, index) =>{
                                    return  <li key={index} className={"linkItem w-fit"}>
                                        <Link href={i.url} className={styles.content}>
                                            {i.icon && <img src={i.icon}/> }
                                            <p>{i.text}</p>
                                        </Link>

                                    </li>
                                })}</ul>
                            </div>
                            {memberFound.linkedin && <Link href={memberFound.linkedin} className="btn mx-auto flex items-center">
                                <RiLinkedinBoxLine className={"text-2xl mr-2"}/> Connettiti con me su Linkedin
                            </Link>}
                        </motion.div>
                    </motion.div>

                    <div className={`w-full lg:w-6/12  relative md:h-56 lg:h-auto order-2 lg:order-last`}>
                        <motion.img variants={itemFade} initial="hidden" whileInView="show" viewport={{once:true}} className={`${styles.imgCover} opacity-0`} src={"/assets/img/bg_teamMember.png"} />
                        <motion.img variants={fadeInUp} initial="initial" whileInView="final"  viewport={{ once: true }} className={"relative mt-12 -mb-12 mr-0 ml-auto z-20 top-[80px] lg:max-h-full max-h-[400px] opacity-0"} src={memberFound.img} />
                    </div>
                </motion.div>

                <section className={"mt-24"}>
                    {memberFound.obj?.map((i) =>{
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

    let url ="http://localhost:1337";
    const resMember = await fetch(`${url}/api/members/${slug}?populate=*`);
    const memberData  =  await resMember.json();

    if(!memberData.data) {
        return {
            notFound: true,
        }
    }

    const result: any = {
        member: memberData.data.attributes
    }

    return {
        props: result
    };
}

