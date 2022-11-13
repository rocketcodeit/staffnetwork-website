
import React from 'react';
import {IFooterConfiguration} from "../../config/models/IFooterConfiguration";
import styles from "../../styles/Header.module.css";
import {IWebsiteConfiguration} from "../../config/models/IWebsiteConfiguration";

function Footer(props : IWebsiteConfiguration){
    return (
        <div className="bg-stone-800">
            <div className="container flex flex-wrap">
                <div className="w-full flex">
                    <div className="w-5/12">
                        <div className="footer_logo mb-4">
                            <img src={props.footerConfiguration.logo} />
                        </div>
                    </div>
                    <div className="w-7/12"></div>
                </div>
                <div className="w-full flex">
                    <div className="w-5/12">
                        <div className="w-full flex">
                            <div className="w-10/12 flex bg-white p-8">
                                <div className="w-6/12">
                                    <p className="mb-4">Staff Network srl</p>
                                    <p>{props.positionOffice}</p>
                                </div>
                                <div className="w-6/12">
                                    <p className="mb-4">{props.openingDaysHours}</p>
                                    <p>Telefono: <a href={`tel:+39${props.phoneContact}`}>{props.phoneContact}</a></p>
                                </div>
                            </div>

                            <div className="w-2/12 bg-primary py-4">
                                <div className="icons flex flex-col justify-evenly items-center h-full">
                                    <img className="mx-auto" src="/assets/drawable/facebook.svg" />
                                    <img className="mx-auto" src="/assets/drawable/instagram.svg" />
                                    <img className="mx-auto" src="/assets/drawable/twitter.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/12"></div>
                    <div className="w-2/12">
                        <ul className="text-white">
                            { props.footerConfiguration.primaryMenu.map((item) => {
                                return <li  className="pb-2" key={item.name} > <a href={item.url}>{item.name}</a> </li>
                            })}
                        </ul>
                    </div>
                    <div className="w-2/12">
                        <ul className="text-white">
                            { props.footerConfiguration.secondaryMenu.map((item) => {
                                return <li  className="pb-2" key={item.name} > <a href={item.url}>{item.name}</a> </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="w-full flex justify-end mt-6 mb-12">
                    <div className="w-7/12">
                        <ul className="text-white flex flex-row justify-end">
                            { props.footerConfiguration.privacyMenu.map((item) => {
                                return <li  className="ml-4" key={item.name} > <a href={item.url}>{item.name}</a> </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;