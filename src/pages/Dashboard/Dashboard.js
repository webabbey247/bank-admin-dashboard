import React from 'react';
import { Content4Column4, ContentFullColumn, ContentRow } from '../../assets/styles/GlobalStyles';
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import CustomCards from '../../components/CustomCard/CustomCards';
import PageTitle from '../../components/PageTitle';
// import { spiralBg } from '../../assets/images/images';
import { DashboardAreaChart } from '../../assets/styles/DashboardStyles';

const Dashboard = () => {
    return (
        <DashboardLayout>
            <ContentRow>
                <ContentFullColumn>
                    <PageTitle title="Good Afternooon, Kuti" date="24th April, 2022     08:43am" login="Last Login: Yesterday, 2:00pm" />
                </ContentFullColumn>

                <Content4Column4>
                    <CustomCards typeUrl="top" title="Total Customers" rate="12" amount="352" />
                </Content4Column4>

                <Content4Column4>
                    <CustomCards typeUrl="top" title="Total Accounts" rate="12" amount="420" />
                </Content4Column4>

                <Content4Column4>
                    <CustomCards typeUrl="top" title="Total Agents" rate="12" amount="96" />
                </Content4Column4>

                <Content4Column4>
                    <CustomCards typeUrl="top" title="Total Employees" rate="12" amount="112" />
                </Content4Column4>

                <Content4Column4>
                    <CustomCards typeUrl="bottom" title="Total Deposits" rate="12" amount="N430,000,000" />
                </Content4Column4>

                <Content4Column4>
                    <CustomCards typeUrl="bottom" title="Total Withdrawals" rate="12" amount="N280,000,000" />
                </Content4Column4>

                <Content4Column4>
                    <CustomCards typeUrl="bottom" title="Total Transfers" rate="12" amount="N112,000,000" />
                </Content4Column4>

                <Content4Column4>
                    <CustomCards typeUrl="bottom" title="Total Payments" rate="12" amount="N30,000,000" />
                </Content4Column4>
            </ContentRow>

            <ContentRow>
                <ContentFullColumn>
                    <DashboardAreaChart />
                </ContentFullColumn>
            </ContentRow>
        </DashboardLayout>
    )
}

export default Dashboard;