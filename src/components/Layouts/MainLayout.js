import React from 'react';
import Header from './Header';
import { MainContainer } from '../../assets/styles/LayoutStyles';

const MainLayout = ({ children }) => {
    return (
        <>
            <MainContainer>
                <Header />
                {children}
            </MainContainer>
        </>
    )
}

export default MainLayout;