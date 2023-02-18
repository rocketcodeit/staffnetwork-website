import React, {useEffect, useState} from 'react';
import Footer from './Footer';
import WebsiteConfig from "../../config/WebsiteConfig";
import {ConfigurationData, ConfigurationDataFull} from "../../models/configuration-data";
import {Header} from "./Header";
import {GetServerSideProps, GetStaticProps} from "next";
import {ConfigurationService} from "../../services/configuration.service";
import {NextjsUtils} from "../../services/nextjs-utils";

export interface LayoutProps{
    children : any
    isVisible? : boolean,
}

export function Layout(props: LayoutProps){
    const [data, setData] = useState<ConfigurationDataFull>()
    const [firstLoad, setFirstLoad] = useState<boolean>(true);


    useEffect( () => {
        if(firstLoad || !data) {
            const configService = new ConfigurationService();

            fetch(`http://localhost:1337/api/configurazione?populate=*&populate[0]=socialLink,contattoLink,logoHeader,logoFooter,headerLinks,footerLinks,conditionLinks&populate[1]=socialLink.icon,contattoLink.icon`)
                .then((res) => {

                    res.json().then((dataConfiguration) => {
                        let dataConfig = configService.mapForLayout(dataConfiguration.data);
                        console.log(dataConfig);
                        setData(dataConfig);
                    })
                });
            setFirstLoad(false);
        }

        //fetchData();
    }, [firstLoad,data])

    console.log(data);
    return (
        //only single element can be returned
        // <> same React.Fragment
        // <Header menuItems={WebsiteConfig.headerConfiguration.menuItems} />
        <React.Fragment>
            {data && <Header data={data} /> }
            <main>{props.children}</main>
            {data && <Footer data={data} />}
        </React.Fragment>
    )
}

