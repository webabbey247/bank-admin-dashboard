import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { DashboardContainer, DashboardContent } from '../../assets/styles/LayoutStyles';
import { MainContentList, MainContentChildred } from '../../assets/styles/DashboardStyles';


const DashboardLayout = ({ children }) => {
    return (
        <>
            <DashboardContainer>
                <DashboardContent>
                    <Sidebar />
                    <MainContent>
                        <MainContentList>
                            <MainContentChildred>
                                {children}
                            </MainContentChildred>
                        </MainContentList>
                    </MainContent>
                </DashboardContent>
            </DashboardContainer>
        </>
    )
}

export default DashboardLayout;