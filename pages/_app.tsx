import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layouts/Layout";
import {AnimatePresence} from "framer-motion";
import {useState} from "react";


export default function App({ Component, pageProps, router }: AppProps) {

    const [loading, setLoading] = useState(false);
    return(

      <Layout>
            <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)} >
                {!loading && <Component key={router.pathname} {...pageProps} />
                }
            </AnimatePresence>
      </Layout>
      )

}


