import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layouts/Layout";
import {AnimatePresence} from "framer-motion";
import {useState} from "react";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {IPost} from "../models/IPost";
import {IArea} from "../config/models/IArea";


export default function App({ Component, pageProps, router }: AppProps, {layoutData} : InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(layoutData);
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

// This gets called on every request
export const getServerSideProps: GetServerSideProps<any> = async (context) => {
    // Fetch data from external API
    let url = "http://localhost:1337";


    const resConfigurazione = await fetch(`${url}/api/configurazione?populate=*`);
    const configurazioneData  =  await resConfigurazione.json();


    if(!configurazioneData.data) {
        return {
            notFound: true,
        }
    }

    const result: any = {
        layoutData : configurazioneData
    }


    // Pass data to the page via props
    return {
        props: result
    };
}