import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layouts/Layout";
import {AnimatePresence} from "framer-motion";
import {useState} from "react";
import {QueryClient,QueryClientProvider} from "react-query";


export default function App({ Component, pageProps, router }: AppProps) {

    const [loading, setLoading] = useState(false);
    const queryClient = new QueryClient()
    return(

      <Layout>
          <QueryClientProvider client={queryClient}>
            <Component key={router.pathname} {...pageProps} />
          </QueryClientProvider>
      </Layout>
      )

}


