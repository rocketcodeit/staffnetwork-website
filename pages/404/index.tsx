import React from 'react';
import Link from "next/link";

export default function FourOrFour(){
    return(
        <>
            <section className={"h-screen-90"}>
                <div className={"container flex flex-row flex-wrap justify-center items-center h-full"}>
                    <div className={"flex-auto"}>
                        <h4>Pagina non trovata </h4>
                        <Link className="btn block w-fit mt-6" href="/">Vai alla Home</Link>


                    </div>
                </div>
            </section>

        </>
    )
}

