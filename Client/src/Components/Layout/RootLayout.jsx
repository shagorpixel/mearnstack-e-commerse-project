import Header from '../Header';
import { Outlet } from 'react-router-dom';
import MainContextProvider from '../../Context/MainContext';

const RootLayout = () => {
    return (
        <MainContextProvider>
            <Header />
            <Outlet />

        </MainContextProvider>
    );
};

export default RootLayout;