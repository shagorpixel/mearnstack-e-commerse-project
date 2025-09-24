import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import ServicesTags from '../ServicesTags';
import MainContextProvider from '../../Context/MainContext';

const RootLayout = () => {
    return (
        <MainContextProvider>
            <Header />
            <Outlet />
            {/* <ServicesTags />
            <Footer /> */}
        </MainContextProvider>
    );
};

export default RootLayout;