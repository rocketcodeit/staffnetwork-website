import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {

  return(
      <Layout>
          <h1 className=''></h1>
        <Component {...pageProps} />
      </Layout>
      )

}
