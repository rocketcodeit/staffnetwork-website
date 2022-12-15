import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layouts/Layout";
import {AnimatePresence} from "framer-motion";


export default function App({ Component, pageProps, router }: AppProps) {

  return(
      <Layout>
          <Component key={router.pathname} {...pageProps} />
      </Layout>
      )

}


