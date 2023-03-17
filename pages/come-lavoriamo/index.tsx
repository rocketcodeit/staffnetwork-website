import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/ComeLavoriamo.module.css'
import {motion} from "framer-motion";
import {
    container,
    fadeInUp,
    item,
    stagger,
    blockReveal,
    blockTextReveal,
    lineLeftToRight,
    textReveal, numberStepOpacity, scaleDownAnimation
} from "../../animations";
import Link from "next/link";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {config} from "../../config/breadcrumbs.config";
import React from "react";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";

import {ComeLavoriamoData} from "../../models/come-lavoriamo-data";
import {HowWeWorkService} from "../../services/how-we-work.service";
import {NextjsUtils} from "../../services/nextjs-utils";
import Form from "../../components/FormRequest/FormRequest";


interface ComeLavoriamo {
    data : ComeLavoriamoData,

}
export default function ComeLavoriamo({data} : ComeLavoriamo) {
    /*
        @issue GET http://localhost:3000/come-lavoriamo 404 (Not Found)
     */
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeOut"}}
                    className={styles.container}>
            <Head>
                <title>{data.dataSeo?.title}</title>
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
                                <motion.img variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"w-full max-h-[32rem] mt-6 -mb-[20rem] object-cover"} src={data.img} />
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

                <section className="mt-24" id={"direttive"}>
                    <div className={"container"}>
                        <div className={"w-11/12 md:w-5/12 mx-auto relative "}>
                            <div className={"w-fit relative mx-auto"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-center"} >{data.bloccoDirettiva.title}</motion.h2>
                            </div>
                            <div className={"w-fit relative mt-2"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.div dangerouslySetInnerHTML={{__html:data.bloccoDirettiva.description}} variants={blockTextReveal} className={"text-center"} initial="initial" whileInView="final" viewport={{ once: true }} />
                            </div>
                        </div>
                        <div className={"w-6/12"}>


                        </div>
                        <div className={"w-full flex flex-row justify-between flex-wrap lg:mt-10"}>
                            <div className={"directiveImage w-full lg:w-6/12 mt-12 lg:mt-0"}>
                                <img className={"max-h-[500px] mx-auto"} src={data.bloccoDirettiva.img} />


                            </div>
                            <div className={`${styles.directiveBoxsContainer} `}>
                                {data.bloccoDirettiva.direttiva?.map((dir : any, index : number) =>{
                                    return  <motion.div key={index} className={"directiveBox mb-6"}>
                                                <div className={"w-fit relative"}>
                                                    <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                                    <motion.h4 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >{dir.title}</motion.h4>
                                                </div>
                                                <div className={"w-fit relative mt-2"}>
                                                    <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                                    <motion.div dangerouslySetInnerHTML={{__html:dir.description}} variants={blockTextReveal}  initial="initial" whileInView="final" viewport={{ once: true }} />
                                                </div>
                                            </motion.div>
                                })}
                            </div>
                        </div>

                    </div>
                </section>
                <section id={"step"} className={"mt-12"}>
                    <div className={"container"}>
                        <div className={"w-fit relative mx-auto"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-center"} >{data.bloccoMetodo.title}</motion.h2>
                        </div>
                        <div className={"w-full md:w-6/12 mx-auto relative mt-2"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            {data.bloccoMetodo.description && <motion.div dangerouslySetInnerHTML={{__html:data.bloccoMetodo.description}} variants={blockTextReveal} className={"text-center"} initial="initial" whileInView="final" viewport={{ once: true }} /> }
                        </div>
                        {data.bloccoMetodo.step && <div className={"flex flex-3 gap-0 flex-wrap w-full h-full mt-8"}>
                             <div className={"md:basis-1/3 stepContainer"}>
                                <div className={"w-fit relative"}>
                                    <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-primary-700"></motion.div>
                                    <motion.div className={styles.stepBox}>
                                        <motion.div variants={scaleDownAnimation} initial="initial" whileInView="final" className={styles.stepBoxLine} />

                                        <div className={"w-fit relative"}>
                                            <motion.div className={styles.stepBoxNumber}>01.</motion.div>
                                            <motion.div className={styles.stepBoxLine} />
                                            <motion.h4 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >{data.bloccoMetodo.step[0].title}</motion.h4>
                                            <motion.div dangerouslySetInnerHTML={{__html:data.bloccoMetodo.step[0].description}} variants={blockTextReveal}  initial="initial" whileInView="final" viewport={{ once: true }} />
                                        </div>

                                    </motion.div>
                                </div>
                            </div>
                            <div className={"md:basis-1/3"}></div>
                            <div className={"md:basis-1/3"}></div>
                            <div className={"md:basis-1/3"}></div>
                            <div className={"md:basis-1/3 stepContainer"}>
                                <div className={"w-fit relative"}>
                                    <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-primary-700"></motion.div>
                                    <motion.div className={styles.stepBox}>
                                        <motion.div variants={scaleDownAnimation} initial="initial" whileInView="final" className={styles.stepBoxLine} />
                                        <div className={"w-fit relative"}>
                                            <motion.div className={styles.stepBoxNumber}>02.</motion.div>
                                            <motion.h4 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >{data.bloccoMetodo.step[1].title}</motion.h4>
                                            <motion.div dangerouslySetInnerHTML={{__html:data.bloccoMetodo.step[1].description}} variants={blockTextReveal}  initial="initial" whileInView="final" viewport={{ once: true }} />
                                        </div>

                                    </motion.div>
                                </div>
                            </div>
                            <div className={"md:basis-1/3"}></div>
                            <div className={"md:basis-1/3"}></div>
                            <div className={"md:basis-1/3"}></div>
                            <div className={"md:basis-1/3 stepContainer"}>
                                <div className={"w-fit relative"}>
                                    <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-primary-700"></motion.div>
                                    <motion.div className={styles.stepBox}>
                                        <motion.div variants={scaleDownAnimation} initial="initial" whileInView="final" className={styles.stepBoxLine} />
                                        <div className={"w-fit relative"}>
                                            <motion.div className={styles.stepBoxNumber}>03.</motion.div>

                                            <motion.h4 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} >{data.bloccoMetodo.step[2].title}</motion.h4>
                                            <motion.div dangerouslySetInnerHTML={{__html:data.bloccoMetodo.step[2].description}} variants={blockTextReveal}  initial="initial" whileInView="final" viewport={{ once: true }} />
                                        </div>
                                        <div className={"w-fit relative mt-2"}>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div> }

                    </div>
                </section>
                <section className={"mt-12"}>
                    <Form title={data.contatti.title} description={data.contatti.description} page={data.dataSeo?.title ?? ''} />

                </section>
            </main>





        </motion.div>
    )
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
    // Fetch data from external API

    const comeLavoriamoService = new HowWeWorkService();
    const comeLavoriamoData = await comeLavoriamoService.getSingle({
        populate : [
            {value:'*'},
            {value:'metodo,contatti,staff,img,datiSeo', level: 0},
            {value:'metodo.direttiva,' +
                    'metodo.step,' +
                    'metodo.imgDirettiva,' +
                    'metodo.titoloDirettive,' +
                    'metodo.descrizioneDirettive,' +
                    'metodo.titoloMetodo,' +
                    'metodo.descrizioneMetodo,' +
                    'contatti.form', level: 1}
        ]
    });


    if(!comeLavoriamoData)
        return NextjsUtils.returnNotFoundObject();



    //const resComeLavoriamo = await fetch(`${url}/api/come-lavoriamo?populate=*&populate[0]=metodo,contatti,blocco1,staff,img,&populate[1]=metodo.direttiva,metodo.step,metodo.imgDirettiva,contatti.form`);
    //const comeLavoriamoData = await resComeLavoriamo.json();

    return NextjsUtils.returnServerSidePropsObject({
        data: comeLavoriamoData,
    });
}
