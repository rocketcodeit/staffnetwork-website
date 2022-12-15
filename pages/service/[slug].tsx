import React from "react";
import {IService} from "../../config/models/IService";
import {config} from "../../config/breadcrumbs.config";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {GetServerSideProps} from "next";
import {services} from "../api/service/ServiceData";
import styles from "../../styles/Service.module.css";
import {motion} from "framer-motion";
import {fadeInUp, opacityAnimation} from "../../animations";

export default function ServicePage(props:{service : IService}){

    return(
        <motion.section variants={opacityAnimation} initial="initial" animate="final" className="overflow-hidden mt-4 mb-12">
            <motion.div className="containerRight flex flex-wrap justify-between">
                <motion.div variants={fadeInUp} className="w-full order-1">
                    <BreadCrumbs  mappedPaths={config} showHome={true} transformDynamicPath={path => {
                        if(path === "[slug]"){
                            return props.service.name
                        }
                        return path;
                    }} />
                    <h1>{props.service.name}</h1>
                </motion.div>

                <motion.div variants={fadeInUp} className="w-full lg:w-6/12 order-last lg:order-2">

                    <ul className={styles.activities}>{props.service.activities?.map((i) =>{
                            return  <li className={styles.activity}>
                                        <div className={styles.content}>
                                            <h5>{i.title}</h5>
                                            <p>{i.description}</p>
                                        </div>

                                    </li>
                    })}</ul>
                </motion.div>
                <motion.div variants={fadeInUp} className={`w-full lg:w-5/12 backgroundRight bg-cover relative h-56 lg:h-auto order-2 lg:order-last`}>
                    <img className={styles.img} src={props.service.img} />
                </motion.div>
            </motion.div>

            <motion.div className="container mt-12" variants={fadeInUp}>
                <div className="w-12/12">
                    <h2 className={`mb-3`}> Cosa facciamo</h2>
                    <p className={styles.description}>{props.service.description}</p>
                </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="container mt-12 flex justify-between flex-wrap lg:flex-nowrap" >
                <div className=" w-full lg:w-6/12">
                    <h2 className={`mb-8`}> Come lo facciamo</h2>
                    <div className={styles.methods}>
                        {props.service.methods?.map((i) =>{
                            let count = 0, active;
                            count++;
                            return  <div className={styles.method}>
                                        <div className={styles.number}>{count}</div>
                                        <div className={styles.content}>
                                            <h4 className="mb-2">{i.title}</h4>
                                            <p>{i.description}</p>
                                        </div>

                                    </div>
                        })}
                    </div>
                </div>
                <div className={` w-full lg:w-5/12 ${styles.resultsContainer}`}>
                    <h2 className={`mb-3`}> Risultati</h2>
                    <div className={styles.results}>
                        {props.service.results?.map((result) =>{
                            let count = 0, active;
                            count++;
                            return  <div className={styles.result}>
                                <div className={styles.number}>{result.number}{result.term}</div>
                                <div className={styles.title}>{result.title}</div>
                            </div>
                        })}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const { slug } = context.query

    const serviceFound = services.find( (service) => service.slug === slug);

    if(serviceFound){
        return{
            props : {
                service : serviceFound
            }
        }
    }

    return {
        notFound : true
    };
    // return {props : { a : 3 }}
}