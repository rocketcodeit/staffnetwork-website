
import React from 'react';

function Footer(){
    return (
        <div className="bg-stone-800">
            <div className="container flex flex-wrap">
                <div className="w-full flex">
                    <div className="w-5/12">
                        <div className="footer_logo mb-4">
                            <svg width="283" height="64" viewBox="0 0 283 64" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#fff"/>
                            </svg>
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
                            <li className="pb-2"><a href="/">Home</a></li>
                            <li className="pb-2"><a href="/come-lavoriamo">Come lavoriamo</a></li>
                            <li className="pb-2">Clienti</li>
                            <li className="pb-2">Risorse</li>
                            <li className="pb-2">Servizi</li>
                        </ul>
                    </div>
                    <div className="w-2/12">
                        <ul className="text-white">
                            <li className="pb-2"><a href="">La storia</a></li>
                            <li className="pb-2"><a href="/come-lavoriamo">Chi siamo</a></li>
                            <li className="pb-2">Visione</li>
                            <li className="pb-2">Contatti</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex justify-end mt-6">
                    <div className="w-7/12">
                        <ul className="text-white flex flex-row justify-end">
                            <li className="ml-4">Privacy Policy</li>
                            <li className="ml-4">Cookie Policy</li>
                            <li className="ml-4">Termini e Condizioni</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;