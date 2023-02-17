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
import {PostDetail} from "../../models/postDetail";
import {IArea} from "../../config/models/IArea";
import {ReactSVG} from "react-svg";
import {ComeLavoriamoData} from "../../models/come-lavoriamo-data";
import {ComeLavoriamoService} from "../../services/comeLavoriamo.service";
import {NextjsUtils} from "../../services/nextjs-utils";


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
                <title>Come lavoriamo</title>
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
                                {data.bloccoDirettiva.direttiva.map((dir : any, index : number) =>{
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
                        <div className={"flex flex-3 gap-0 flex-wrap w-full h-full mt-8"}>
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
                        </div>

                    </div>
                </section>
                <section className={"mt-12"}>
                    <div className={"container"}>
                        <div className={"w-11/12 md:w-8/12 lg:w-6/12 mx-auto"}>
                            <div className={"w-fit relative mx-auto"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.h2 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"text-center"} >{data.contatti.title}</motion.h2>
                            </div>
                            <div className={"w-fit relative mt-2 mx-auto"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                                <motion.div dangerouslySetInnerHTML={{__html:data.contatti.description}} variants={blockTextReveal} className={"text-center"} initial="initial" whileInView="final" viewport={{ once: true }} />
                            </div>




                        </div>
                        <div className={"xl:w-7/12 lg:w-8/12 w-11/12 mx-auto"}>
                            <div className={"w-fit relative mx-auto"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                                <motion.div variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={" bg-gray-200 lg:p-12 md:p-8 px-6 py-4 mx-auto flex gap-x-9 gap-y-6 flex-2-1.5 flex-wrap mt-8 mb-20"}>


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
                        </div>
                    </div>
                </section>
            </main>





        </motion.div>
    )
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
    // Fetch data from external API

    const comeLavoriamoService = new ComeLavoriamoService();
    const comeLavoriamoData = await comeLavoriamoService.getSingle({
        populate : [
            {value:'*'},
            {value:'metodo,contatti,blocco1,staff,img', level: 0},
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