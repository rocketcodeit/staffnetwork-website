
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WebsiteConfig from '../../config/WebsiteConfig';

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
            <main>{props.children}</main>
            <Footer {...WebsiteConfig.footerConfiguration}/>
        </React.Fragment>
    )
}

export default Layout;



