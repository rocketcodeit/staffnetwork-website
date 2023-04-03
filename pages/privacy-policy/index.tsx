import Head from 'next/head'
import {motion} from "framer-motion"
import React from "react";
import {blockReveal, blockTextReveal, fadeInUp} from "../../animations";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import {config} from "../../config/breadcrumbs.config";
import Script from "next/script";


export default function PrivacyPolicyPage({data}: any) {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                    transition={{duration: 0.4, ease: "easeOut"}}>
            <Head>
                <title>Privacy Policy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <section>
                <motion.div className="container flex flex-wrap justify-between mt-8">
                    <motion.div variants={fadeInUp} className="w-full pr-3 order-1">
                        <BreadCrumbs mappedPaths={config} showHome={true} transformDynamicPath={path => {
                            return path;
                        }}/>
                        <div className="relative w-fit">
                            <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                        className="blockOverText bg-gray-100"></motion.div>
                            <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final"
                                       viewport={{once: true}}>Privacy Policy
                            </motion.h1>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div className={"my-12 container"}>
                    <div className={"lg:w-8/12 w-full"}>
                        <div className={"w-fit relative"}>
                            <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                        className="blockOverText bg-gray-100"></motion.div>
                            <a href="https://www.iubenda.com/privacy-policy/34652697"
                               className="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed"
                               title="Privacy Policy">Privacy Policy</a>
                            <Script type={"text/javascript"}  src="/static/privacy_policy-iubenda.js" />
                        </div>
                    </div>

                </motion.div>
            </section>
        </motion.div>
    )
}