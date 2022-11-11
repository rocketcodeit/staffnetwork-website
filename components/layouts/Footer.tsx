
import React from 'react';

function Footer(){
    return (
        <div className="bg-stone-800">
            <div className="container">
                <div className="w-5/12">
                    <div className="w-full flex">
                        <div className="w-10/12 flex bg-white p-6">
                            <div className="w-6/12">
                                <p className="mb-4">Staff Network srl</p>
                                <p>Via Genova,59<br/>70022 Altamura BA</p>
                            </div>
                            <div className="w-6/12">
                                <p className="mb-4">Lunedi - Venerdi<br/>09:00-13:00, 15:00-17:00</p>
                                <p>Telefono: 080 314 6422</p>
                            </div>
                        </div>

                        <div className="w-2/12 bg-primary">
                            <div className="icons">
                                <img src="/assets/drawable/facebook.svg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/12">

                </div>
                <div className="w-2/12">

                </div>
            </div>
        </div>
    );
}

export default Footer;