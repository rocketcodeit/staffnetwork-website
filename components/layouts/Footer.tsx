
import React from 'react';
import {IFooterConfiguration} from "../../config/models/IFooterConfiguration";
import styles from "../../styles/Header.module.css";

function Footer(props : IFooterConfiguration){
    return (
        <div className="bg-stone-800">
            <div className="container flex flex-wrap">
                <div className="w-full flex">
                    <div className="w-5/12">
                        <div className="footer_logo mb-4">
                            <img src={props.logo} />
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
                                    <p>Via Genova,59<br/>70022 Altamura BA</p>
                                </div>
                                <div className="w-6/12">
                                    <p className="mb-4">Lunedi - Venerdi<br/>09:00-13:00, 15:00-17:00</p>
                                    <p>Telefono: 080 314 6422</p>
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
                            { props.primaryMenu.map((item) => {
                                return <li  className="pb-2" key={item.name} > <a href={item.url}>{item.name}</a> </li>
                            })}
                        </ul>
                    </div>
                    <div className="w-2/12">
                        <ul className="text-white">
                            { props.secondaryMenu.map((item) => {
                                return <li  className="pb-2" key={item.name} > <a href={item.url}>{item.name}</a> </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="w-full flex justify-end mt-6 mb-12">
                    <div className="w-7/12">
                        <ul className="text-white flex flex-row justify-end">
                            { props.privacyMenu.map((item) => {
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