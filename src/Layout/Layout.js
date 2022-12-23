import React from 'react';
import Tours from "../Tours/Tours";
import Comments from "../Comments/Comments";
import Shop from "../Shop/Shop";
import Footer from "./Footer/Footer";
import Travel from "../Travel/Travel";
import Mount from "../Mount/Mount";

const Layout = () => {
    return (
        <>
            <Tours/>
            <Comments/>
            <Shop/>
            <Mount/>
            <Travel/>
            <Footer/>
        </>
    );
};

export default Layout;