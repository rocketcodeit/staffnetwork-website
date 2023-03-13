import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AnimatePresence} from "framer-motion";
import {useContext, useState} from "react";
import {Layout} from "../components/Layout/Layout";
import {AppProvider, AppProviderContext} from "../components/Provider/AppContext";
import {CartContextProvider} from "../components/Provider/CartProvider";






export default function App({ Component, pageProps, router }: AppProps) {
    return(
        <AppProvider>
            <CartContextProvider>
                <AppInner pageProps={pageProps} Component={Component} router={router} />
            </CartContextProvider>

        </AppProvider>
    );
}
export  function AppInner({ Component, pageProps, router }: AppProps) {
    const [loading, setLoading] = useState(false);

    return(
        <Layout>
            <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)} >
                {!loading &&
                    <Component key={router.pathname} {...pageProps} />
                }
            </AnimatePresence>
        </Layout>
    );
}

// This gets called on every request


