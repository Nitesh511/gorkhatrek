import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/home";
import Aboutus from "../aboutus/aboutus";
import TrendingDestinations from "../trendingdestination/trendingdesti";
import ServicesPage from "../services/services";
import Blogspage from "../blogs/blogspage";
import ContactForm from "../contactus/contactus";

function AppRoutes(){

    return(

        <>
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/about" element={<Aboutus/>}></Route>
                <Route path="/trending" element={<TrendingDestinations/>}></Route>
                <Route path="/services" element={<ServicesPage/>}></Route>
                <Route path="/blogs" element={<Blogspage/>}></Route>
                <Route path="/contact" element={<ContactForm/>}></Route>
            </Routes>
        </>
    )



}

export default AppRoutes