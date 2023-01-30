
import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import WebsiteConfig from '../../config/WebsiteConfig';
import {motion,AnimatePresence} from "framer-motion";
import {pageAnimation} from "../../animations";

export interface LayoutProps{
    children : any
    isVisible? : boolean
}

function Layout(props: LayoutProps){

    return (
        //only single element can be returned
        // <> same React.Fragment
        // <Header menuItems={WebsiteConfig.headerConfiguration.menuItems} />
        <React.Fragment>
            <Header {...WebsiteConfig.headerConfiguration} />
            <main>{props.children}</main>
            <Footer {...WebsiteConfig}/>
        </React.Fragment>
    )
}

export default Layout;



