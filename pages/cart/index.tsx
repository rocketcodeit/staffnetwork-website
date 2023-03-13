import Head from "next/head";
import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {IService} from "../../models/IService";
import {CartProviderContext} from "../../components/Provider/CartProvider";
import {motion} from "framer-motion";
import {blockReveal, blockTextReveal, fadeInUp} from "../../animations";
import Link from "next/link";
import {ReactSVG} from "react-svg";
import {Marker} from "react-mapbox-gl";
import {ServiceList} from "../../components/Service/ServiceList";
import {RiBuildingLine, RiUser3Line} from "react-icons/ri";
import Checkout from "../../components/Checkout/Checkout";


export default function CartPage(props : any){
    const cartProvider  = useContext(CartProviderContext);
    const [selectedOption, setSelectedOption] = useState("");
    const [categorySelectedOption, setCategorySelectedOption] = useState("");

    const handleRemoveAllToCart = () => {
        cartProvider.removeAllCartItem();
    }

    console.log(cartProvider.getCartItems());

    return(
        <>
            <Head>
                <title>Carrello</title>
            </Head>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}}>
                <section>
                    <motion.div className="containerRight flex flex-wrap justify-between">
                        <motion.div variants={fadeInUp} className="w-full order-1">
                            <div className={"w-fit relative"}>
                                <motion.div variants={blockReveal} whileInView="final" viewport={{ once: true }} className="blockOverText bg-gray-200"></motion.div>
                                <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final" viewport={{ once: true }} className={"mb-4 mt-8"}>Carrello</motion.h1>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                <section id={"form"} className={"lg:my-12 mt-10"}>
                    <div className={"container"}>
                        <div className={"flex flex-wrap justify-between"}>
                            <div className={"w-4/12"}>
                                <h3 className={"mb-4"}>Prodotti</h3>
                                <ServiceList services={cartProvider.getCartItems()} cartList={true} />
                            </div>
                            <div className={"w-7/12"}>
                                <Checkout />
                            </div>
                        </div>
                    </div>

                </section>
            </motion.div>

        </>
    )

}