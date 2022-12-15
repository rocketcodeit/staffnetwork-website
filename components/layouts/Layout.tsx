
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WebsiteConfig from '../../config/WebsiteConfig';
import {AnimatePresence} from "framer-motion";

export interface LayoutProps{
    children : any
}

function Layout(props: LayoutProps){

    return (
        //only single element can be returned
        // <> same React.Fragment
        // <Header menuItems={WebsiteConfig.headerConfiguration.menuItems} />
        <React.Fragment>
            <Header {...WebsiteConfig.headerConfiguration} />
            <AnimatePresence mode={'sync'}>
                <main>{props.children}</main>
            </AnimatePresence>
            <Footer {...WebsiteConfig}/>
        </React.Fragment>
    )
}

export default Layout;



