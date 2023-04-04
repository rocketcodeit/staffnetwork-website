import React, {useContext, useEffect} from "react";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {config} from "../../config/breadcrumbs.config";
import {motion} from "framer-motion";
import styles from "../../styles/Service.module.css";
import {blockReveal, blockTextReveal, fadeInUp} from "../../animations";
import Head from "next/head";

import {IService} from "../../models/IService";
import Link from "next/link";
import {ProductService} from "../../services/service.service";
import {NextjsUtils} from "../../services/nextjs-utils";
import {CartContextProvider, CartProviderContext} from "../../components/Provider/CartProvider";
import {useRouter} from "next/router";
import Form, {TypeCategory} from "../../components/FormRequest/FormRequest";

interface ServicePageProps{
    service : IService,
}

export default function ServicePage({service} : ServicePageProps){
    const cartProvider = useContext(CartProviderContext);
    const router = useRouter();

    const handleAddToCart = () => {
        cartProvider.addCartItem(service);
        router.push('/cart');
    };
    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}}>
            <Head>
                <title>{service.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>
                <div className="container">

                <section className={"mt-8 py-12 relative before:block before:absolute before:w-full before:h-full before:top-0 before:bg-black before:opacity-40 bg-cover"} style={{backgroundImage: `url("${service.img}")`}}>
                    <BreadCrumbs mappedPaths={config} showHome={true} transformDynamicPath={path => {
                        if(path === "[slug]"){
                            return service.title
                        }
                        return path;
                    }} />
                    <div className={"w-fit relative mx-auto"}>
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                        <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className="mb-6 text-white text-center">{service.title}</motion.h1>
                    </div>
                    <div className={"w-full sm:w-6/12 relative mx-auto"}>
                        <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                        <motion.p variants={blockTextReveal} initial="initial" whileInView="final" className="text-center text-white" viewport={{ once: true }}>{service.details.summary}</motion.p>
                    </div>
                </section>


                    {( (service.details?.obj && service.details?.obj?.length > 0) || service.buyable) && <section id={"dettagli"}>
                        <div className={"w-12/12 bg-gray-200 p-6 pb-0 pr-0  mt-4" }>
                            <h4 className={""}>Dettagli del servizio</h4>

                            <div className={"mt-4 flex gap-10 flex-wrap mb-8 pr-8"}>

                                {service.details.obj?.map((o, index) => {
                                    return <div key={index}>
                                        <div>{o.title}</div>
                                        <div className={styles.childDescriptionList} dangerouslySetInnerHTML={{__html:o.value}} />
                                    </div>
                                })}
                            </div>

                            <div className={styles.buttonsContainer}>
                                {service.buyable &&
                                    <div className={"flex flex-row items-center gap-5"}>
                                        {
                                            service.buyable?.discountPrice ?
                                                <div className={"text-end flex flex-row items-center gap-3"} >
                                                    <del className={"text-gray-600"}>{service.buyable?.price} €</del>
                                                    <h3>{service.buyable?.discountPrice} €</h3>
                                                </div>  :
                                                <h5> {service.buyable?.price} €</h5>


                                        }
                                        <Link href={"#acquista"} className={"btn black min-w-[120px] text-center"}>Acquista</Link>
                                    </div>
                                }
                                 <Link href={"#contattaci"} className={"btn min-w-[120px] text-center"}>Contattaci</Link>
                            </div>

                        </div>
                    </section> }

                    <section id={"descrizione"}>
                        <div className={"flex flex-wrap justify-between"}>
                            <div className={`w-12/12 lg:w-6/12 ${styles.content}`}>
                                <div className={`mt-8`} dangerouslySetInnerHTML={{__html:service.description}} />
                                {service.obj?.map((o) =>{
                                    return <div key={o.id} className={"mt-8"}>
                                        <h3 className={"mb-3"}>{o.title}</h3>
                                        <div dangerouslySetInnerHTML={{__html:o.value}} />
                                    </div>
                                })}
                            </div>
                            <div className={"w-11/12 lg:w-5/12"}>
                                {service.buyable && <div id={"acquista"} className={"bg-gray-200 flex w-full mt-12 mb-8 "}>
                                    <div className={"flex flex-row flex-wrap w-full justify-between"}>
                                        <div className={"w-full flex flex-row justify-between px-4 pt-6 pb-3"}>
                                            <div className={"w-6/12"}>
                                                <h4 className={"mb-2"}>{service.buyable.title}</h4>
                                                { service.buyable?.description && <div  dangerouslySetInnerHTML={{__html:service.buyable?.description}} /> }
                                            </div>
                                            {
                                                service.buyable?.discountPrice ?
                                                    <div className={"w-6/12 text-end"} >
                                                        <del className={"text-gray-600"}>{service.buyable?.price} €</del>
                                                        <h3>{service.buyable?.discountPrice} €</h3>
                                                    </div>  :
                                                    <h3 className={"w-6/12 text-end"}> {service.buyable?.price} €</h3>


                                            }
                                        </div>
                                        <button onClick={handleAddToCart} className={"btn w-full text-center"}>Acquista</button>
                                    </div>
                                </div> }
                                <div id={"contattaci"} className={"w-full relative mt-6 lg:mt-12 "}>
                                    <Form title={service.requestForm?.title} description={service.requestForm?.text} page={"Servizio - " + service.title}
                                          typePage={service.buyable ? TypeCategory.purchasableItem : TypeCategory.item}/>
                                </div>
                            </div>
                        </div>
                    </section>




                    <section className={`my-12 flex flex-wrap flex-row ${service.buyable ? " justify-center lg:justify-between" : "justify-center"} items-start`}>
                    </section>


                </div>
            </main>

        </motion.section>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    const { slug } = context.query

    const productService = new ProductService();

    if(!slug)
        return NextjsUtils.returnNotFoundObject();

    const serviceData = await productService.getBySlug(slug.toString());

    if(!serviceData)
        return NextjsUtils.returnNotFoundObject();


    const result: any = {
        service: serviceData
    }


    // Pass data to the page via props
    return {
        props: result
    };

   // return {props : { a : 3 }}
}
