import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import ServicesTags from '../ServicesTags';

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <ServicesTags />
            <Footer />
        </>
    );
};

export default RootLayout;