import React, {useContext, useEffect, useState} from 'react';
import Footer from './Footer';
import {ConfigurationDataFull} from "../../models/configuration-data";
import {Header} from "./Header";
import {ConfigurationService} from "../../services/configuration.service";
import { motion } from 'framer-motion';
import {AppProviderContext} from "../Provider/AppContext";
import {CartProviderContext} from "../Provider/CartProvider";
import {RiShoppingCartLine} from "react-icons/ri";
import Link from "next/link";
import {useRouter} from "next/router";
import Head from 'next/head';

export interface LayoutProps{
    children : any
    isVisible? : boolean,
}

export const CART_URL = '/cart';

export function Layout(props: LayoutProps){
    const [data, setData] = useState<ConfigurationDataFull>()
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const [isVisible, setIsVisible] = useState(false);
    const {configuration} = useContext(AppProviderContext);
    const cartProvider = useContext(CartProviderContext);
    const [isVisibleCart, setIsVisibleCart] = useState(false);

    const router = useRouter();
    useEffect(() => {
        if(cartProvider.getCartItems().length > 0)
            setIsVisibleCart(true);
        else
            setIsVisibleCart(false);
    },[cartProvider])

    useEffect( () => {
        if(firstLoad || !data) {
            /**
             * @warning Va eliminata la gestione del baseUrl dal component
             */
            const configService = new ConfigurationService();

            configService.getSingle({
                populate:[
                    {value:'*'},
                    {value: 'socialLink,contattoLink,logoHeader,logoFooter,favicon,headerLinks,footerLinks,shareLinks,conditionLinks', level: 0},
                    {value: 'socialLink.icon,contattoLink.icon,shareLinks.icon', level : 1}
                ]
            }).then((res) =>{
                setData(res);
                setFirstLoad(false);
            })
        }
        else{
            setIsVisible(true);
        }

        //fetchData();
    }, [firstLoad,data])


    return (

        <React.Fragment>

            <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 1 }} >
                <Head>
                    <link rel="icon" type="image/x-icon" href={data?.faviconLogo} />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                {data && <Header data={data} /> }
                <main>{props.children}</main>
                <motion.div  className={"fixed top-1/2 right-0"} initial={{opacity: 0}}  animate={{ opacity: isVisibleCart ? 1 : 0, x: isVisibleCart ? 0 : 100}} transition={{duration: 0.4, delay: 0.2, ease: "easeInOut"}}>
                   <Link href={CART_URL} className={`btnCart ${router.asPath == CART_URL ? 'active' : ''}`}>
                       <RiShoppingCartLine />
                   </Link>
                </motion.div>
                {data && <Footer data={data} />}
            </motion.div>

        </React.Fragment>
    )
}

