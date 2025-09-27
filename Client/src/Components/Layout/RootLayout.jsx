import React from 'react';
import Header from '../Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer';
import ServicesTags from '../ServicesTags';
import MainContextProvider from '../../Context/MainContext';

const RootLayout = () => {
    const location = useLocation();
    console.log(location);
    return (
        <MainContextProvider>
            <Header />
            <Outlet />

        </MainContextProvider>
    );
};

export default RootLayout;