import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Mission from "./Mission";
import Visitors from "./Visitors";
import Overview from "./Overview";
import Connectivitiy from "./Connectivitiy";
import Pricing from "./Pricing";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import {useParams} from "react-router";

const Layout = () => {

    const { pageType } = useParams();
    return (
        < >
            <Header pageType={pageType}/>
            <Main pageType={pageType}/>
            <Mission pageType={pageType}/>
            <Visitors pageType={pageType}/>
            <Overview pageType={pageType}/>
            <Connectivitiy pageType={pageType}/>
           {pageType === 'mobile' ? '' : <Pricing pageType={pageType}/>}
            <ContactUs pageType={pageType}/>
            <Footer pageType={pageType}/>
        </>
    );
};

export default Layout;
