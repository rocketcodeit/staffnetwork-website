import Head from "next/head";
import React, {useContext, useEffect, useState} from "react";
import {CartProviderContext} from "../../components/Provider/CartProvider";
import {motion} from "framer-motion";
import {blockReveal, blockTextReveal, fadeInUp} from "../../animations";
import PropTypes from "prop-types"

import {ServiceList} from "../../components/Service/ServiceList";
import {RiBuildingLine, RiUser3Line} from "react-icons/ri";
import Checkout from "../../components/Checkout/Checkout";


export default function CartPage(props: any) {
    const cartProvider = useContext(CartProviderContext);
    const [selectedOption, setSelectedOption] = useState("");
    const [categorySelectedOption, setCategorySelectedOption] = useState("");
    const [isVisible, setIsVisible] = useState<boolean>(cartProvider.getCartItems.length > 0);

    const handleRemoveAllToCart = () => {
        cartProvider.removeAllCartItem();
        setIsVisible(false);
    }

    useEffect(() => {
        if(cartProvider.getCartItems().length > 0)
            setIsVisible(true);
        else
            setIsVisible(false);
    },[cartProvider])
    return (
        <>
            <Head>
                <title>Carrello</title>
            </Head>
            <motion.div className={"relative"} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                        transition={{duration: 0.4, ease: "easeInOut"}}>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} exit={{ opacity: 0 }} transition={{duration: 0.2, ease: "easeInOut"}} >
                        <section>
                            <motion.div className="containerRight flex flex-wrap justify-between">
                                <motion.div variants={fadeInUp} className="w-full order-1">
                                    <div className={"w-fit relative"}>
                                        <motion.div variants={blockReveal} whileInView="final" viewport={{once: true}}
                                                    className="blockOverText bg-gray-200"></motion.div>
                                        <motion.h1 variants={blockTextReveal} initial="initial" whileInView="final"
                                                   viewport={{once: true}} className={"mb-4 mt-8"}>Carrello
                                        </motion.h1>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </section>
                        <section id={"form"} className={"lg:my-12 mb-10"}>
                            <div className={"container"}>
                                <div className={"flex flex-wrap justify-between"}>
                                    <div className={"w-full lg:w-4/12"}>
                                        <div className={"flex justify-between items-stretch mb-4"}>
                                            <h3>Prodotti</h3>
                                            {(cartProvider.getCartItems().length > 0) &&
                                                <button className={"btn delete !px-4 !py-1"}
                                                        onClick={handleRemoveAllToCart}>Rimuovi tutto</button>}
                                        </div>
                                        <ServiceList services={cartProvider.getCartItems()} cartList={true}/>

                                    </div>
                                    <div className={"w-full lg:w-7/12 mt-12 lg:mt-0"}>
                                        <Checkout services={cartProvider.getCartItems()}/>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </motion.div>

                    <motion.div  className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${isVisible ? 'pointer-events-none' : 'pointer-event-auto'}`}
                                 initial={{ opacity: 0 }}  animate={{ opacity: isVisible ? 0 : 1 }} transition={{duration: 0.4, delay: 0.2, ease: "easeInOut"}}>
                        <h3>Il carrello è vuoto</h3>
                    </motion.div>
            </motion.div>


        </>
    )

}