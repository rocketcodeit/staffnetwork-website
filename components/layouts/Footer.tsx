
import React from 'react';
import {IFooterConfiguration} from "../../config/models/IFooterConfiguration";
import styles from "../../styles/Header.module.css";
import {IWebsiteConfiguration} from "../../config/models/IWebsiteConfiguration";
import Link from "next/link";
import NewLineText from '../../models/NewLineText';
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {IPost} from "../../models/IPost";
import {IArea} from "../../config/models/IArea";

let url = "http://localhost:1337";


function Footer(props : IWebsiteConfiguration, {data} : InferGetServerSidePropsType<typeof getServerSideProps>){
    return (
        <section className="bg-stone-800">
            <div className="container flex flex-wrap">
                <div className="w-full flex">
                    <div className="lg:w-5/12 w-full lg:mt-8 mt-4">
                        <div className="footer_logo mb-4">
                            <img className={" max-h-16 md:max-h-20"} src={props.footerConfiguration.logo} />
                        </div>
                    </div>
                    <div className="w-7/12"></div>
                </div>
                <div className="w-full flex lg:flex-nowrap flex-wrap">
                    <div className="lg:w-6/12 sm:w-11/12 w-full">
                        <div className="w-full flex">
                            <div className="w-10/12 flex bg-white sm:flex-nowrap lg:gap-x-6 sm:gap-x-3  gap-3 flex-wrap xs:p-8 p-5">
                                <div className="sm:w-6/12 w-full flex sm:gap-4 gap-3 flex-col">
                                    <p>Staff Network srl</p>
                                    <div><NewLineText text={props.positionOffice} /></div>
                                </div>
                                <div className="sm:w-6/12 w-full sm:gap-4 gap-3 flex flex-col">
                                    <div><NewLineText text={props.openingDaysHours} /></div>
                                    <p className={"linkItem"}>Telefono: <Link href={props.phoneContact.url}>{props.phoneContact.name}</Link></p>
                                </div>
                            </div>

                            <div className="xs:w-2/12 w-3/12 bg-primary lg:py-7 py-4">
                                <div className="icons flex flex-col justify-center gap-5 items-center h-full xs:p-0 ">
                                    {props.socialMenu?.map((item) => {
                                       return <Link href={item.url}><img className="mx-auto" src={item.name} /> </Link>
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/12 w-0"></div>
                    <div className="sm:w-2/12 w-6/12 lg:mt-0 mt-6 pr-3">
                        <ul className="text-white">
                            { props.footerConfiguration.primaryMenu.map((item) => {
                                return <li  className="linkItemWhite linkItem mb-2" key={item.name} > <a href={item.url}>{item.name}</a> </li>
                            })}
                        </ul>
                    </div>
                    <div className="sm:w-2/12 w-6/12 lg:mt-0 mt-6 pr-3">
                        <ul className="text-white">
                            { props.footerConfiguration.secondaryMenu.map((item) => {
                                return <li  className="linkItemWhite linkItem mb-2" key={item.name} > <a href={item.url}>{item.name}</a> </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="w-full flex justify-end mt-6 mb-12">
                    <div className="w-full">
                        <ul className="text-white flex xs:flex-row flex-col justify-end 2xs:flex-nowrap flex-wrap items-end gap-4">
                            { props.footerConfiguration.privacyMenu.map((item) => {
                                return <li  className="text-sm linkItemWhite linkItem" key={item.name} > <a href={item.url}>{item.name}</a> </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}



// This gets called on every request
export const getServerSideProps: GetServerSideProps<any> = async (context) => {
    // Fetch data from external API
    let url = "http://localhost:1337";

    const resData = await fetch(url + "/api/configurazione?&populate=*");
    const configurationData = await resData.json();

    const result: any = {
        data : configurationData.data.attributes
    }

    // Pass data to the page via props
    return {
        props: result
    };
}


export default Footer;