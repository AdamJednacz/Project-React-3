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

const LayoutCms = () => {
    return (
        < >
         <Header/>
         <Main/>
         <Mission/>
         <Visitors/>
         <Overview/>
         <Connectivitiy/>
         <Pricing/>
         <ContactUs/>
         <Footer/>
        </>
    );
};

export default LayoutCms;
