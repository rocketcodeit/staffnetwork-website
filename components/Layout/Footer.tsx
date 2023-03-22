import React from 'react';
import {IWebsiteConfiguration} from "../../config/models/IWebsiteConfiguration";
import Link from "next/link";
import NewLineText from '../NewLineText/NewLineText';
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {ConfigurationDataFull} from "../../models/configuration-data";
import {ReactSVG} from "react-svg";

interface FooterProps {
    data : ConfigurationDataFull
}

function Footer(props : FooterProps){
    return (
        <section className="bg-primary-800">
            <div className="container flex flex-wrap">
                <div className="w-full flex">
                    <div className="lg:w-5/12 w-full lg:mt-8 mt-4">
                        <div className="footer_logo mb-4">
                            <img className={" max-h-16 md:max-h-20"} src={props.data.footerLogo} />
                        </div>
                    </div>
                    <div className="w-7/12"></div>
                </div>

                <div className="w-full flex lg:flex-nowrap flex-wrap">
                    <div className="lg:w-6/12 sm:w-11/12 w-full">
                        <div className="w-full flex">
                            <div className="w-10/12 flex bg-white sm:flex-nowrap lg:gap-x-6 sm:gap-x-3  gap-3 flex-wrap xs:p-8 p-5">
                                <div className="sm:w-6/12 w-full flex sm:gap-4 gap-3 flex-col">
                                    <div dangerouslySetInnerHTML={{__html:props.data.positionOffice!}} />
                                    <div dangerouslySetInnerHTML={{__html:props.data.openingDaysHours!}} />
                                </div>
                                <div className="sm:w-6/12 w-full sm:gap-4 gap-3 flex flex-col">
                                    {props.data.contactLinks?.map((link : any, index: number) => {
                                        return <div key={index} className={"linkItem linkItemPrimary"}>
                                            {link.beforeTitle ? link.beforeTitle : ""}
                                            <Link  className="text-primary hover:text-primary-600" href={link.href}>{link.title}</Link>
                                            {link.afterTitle ? link.afterTitle : ""}
                                        </div>

                                    })}
                                </div>
                            </div>

                            <div className="xs:w-2/12 w-3/12 bg-primary lg:py-7 py-4">
                                <div className="icons flex flex-col justify-center gap-5 items-center h-full xs:p-0 ">
                                    {props.data.socialLinks?.map((linkSocial : any, index: number) => {
                                        return <Link key={index} href={linkSocial.href}>
                                            {linkSocial.beforeTitle ? linkSocial.beforeTitle : ""}
                                            <img src={linkSocial.icon} />

                                            {linkSocial.afterTitle ? linkSocial.afterTitle : ""}
                                        </Link>

                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/12 w-0"></div>
                    <div className="sm:w-4/12 w-full lg:mt-0 mt-6 pr-3">
                        <ul className="text-white grid grid-cols-2 md:grid-rows-3 grid-flow-row md:grid-flow-col gap-2">
                            { props.data.footerLinks?.map((item, i) => {
                                return <li key={i} className="linkItemWhite linkItem ">
                                    <Link href={item.href}>{item.title}</Link> </li>
                            })}
                        </ul>
                    </div>

                </div>
                <div className="w-full flex justify-end mt-6 mb-12">
                    <div className="w-full">
                        <ul className="text-white flex justify-end gap-4 flex-wrap sm:flex-nowrap flex-col xs:flex-row items-end">
                            { props.data.conditionLinks?.map((item, i) => {
                                return <li key={i} className="text-sm linkItemWhite linkItem" >
                                    <Link href={item.href}>{item.title}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}


export default Footer;
