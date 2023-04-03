import Head from 'next/head'
import {motion} from "framer-motion"
import React from "react";
import {blockReveal, blockTextReveal, fadeInUp} from "../../animations";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {config} from "../../config/breadcrumbs.config";
import {GetServerSideProps} from "next";
import {ProductService} from "../../services/service.service";
import {AreaService} from "../../services/area.service";
import {NextjsUtils} from "../../services/nextjs-utils";
import {TermsConditionsService} from "../../services/terms-conditions.service";
import {TermsConditionsData} from "../../models/terms_conditions-data";
import {ComeLavoriamoData} from "../../models/come-lavoriamo-data";

interface TermsConditionPageProps {
    data : TermsConditionsData,

}
export default function CookiePolicyPage({data} : TermsConditionPageProps) {
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeOut"}}>
            <Head>
                <title>{data.dataSeo?.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section>
                <motion.div className="container flex flex-wrap justify-between mt-8">
                    <motion.div variants={fadeInUp} className="w-full pr-3 order-1">
                        <BreadCrumbs  mappedPaths={config} showHome={true} transformDynamicPath={path => {
                            return path;
                        }} />
                        <div className="relative w-fit">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }}>{data.title}</motion.h1>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div className={"my-12 container"}>
                    <div className={"lg:w-8/12 w-full"}>
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-100"></motion.div>
                            <motion.div dangerouslySetInnerHTML={{__html:data.description}} variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} />
                        </div>
                    </div>

                </motion.div>
            </section>
        </motion.div>
    )
}

export const getServerSideProps: GetServerSideProps<any> = async (context) =>{
    // Fetch data from external API

    const termsConditionService = new TermsConditionsService();
    const termsConditionData = await termsConditionService.getSingle({
        populate:[
            {value:'*'}
        ]
    })

    if(!termsConditionData)
        return NextjsUtils.returnNotFoundObject();


    return NextjsUtils.returnServerSidePropsObject({
        data: termsConditionData
    })

}
