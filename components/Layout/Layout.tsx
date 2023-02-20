import React, {useContext, useEffect, useState} from 'react';
import Footer from './Footer';
import {ConfigurationDataFull} from "../../models/configuration-data";
import {Header} from "./Header";
import {ConfigurationService} from "../../services/configuration.service";
import { motion } from 'framer-motion';
import {AppProviderContext} from "../Provider/AppContext";

export interface LayoutProps{
    children : any
    isVisible? : boolean,
}

export function Layout(props: LayoutProps){
    const [data, setData] = useState<ConfigurationDataFull>()
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const [isVisible, setIsVisible] = useState(false);
    const {configuration} = useContext(AppProviderContext);

    useEffect( () => {
        if(firstLoad || !data) {
            const configService = new ConfigurationService("http://localhost:1337");

            configService.getSingle({
                populate:[
                    {value:'*'},
                    {value: 'socialLink,contattoLink,logoHeader,logoFooter,headerLinks,footerLinks,conditionLinks', level: 0},
                    {value: 'socialLink.icon,contattoLink.icon', level : 1}
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


    useEffect(() => {
        console.log(configuration);
    }, [configuration])

    return (

        <React.Fragment>
            <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 1 }} >
                {data && <Header data={data} /> }
                <main>{props.children}</main>

                <motion.div >{configuration?.openingDaysHours}</motion.div>
                {data && <Footer data={data} />}
            </motion.div>

        </React.Fragment>
    )
}

