import React from 'react';
import { DashboardLTRContent, SidebarHeader, SidebarHeaderLogo, SidebarNav, SidebarNavInactiveLink, SidebarFooter, SidebarNavGroup, SidebarNavGroupList, SidebarNavLink, SidebarSubNav, SidebarSubNavLink, SidebarNavLinkLogo } from '../../assets/styles/LayoutStyles';
import { bankLogoH, logoutIcon, messageIcon, dashboardIcon, activityIcon, cardIcon, loanIcon, settingsIcon } from '../../assets/images/images';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <DashboardLTRContent>
                <SidebarHeader>
                    <SidebarHeaderLogo src={bankLogoH} alt="Bank One" />
                </SidebarHeader>
                <SidebarNav>
                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/dashboard">
                                <SidebarNavLinkLogo src={dashboardIcon} alt='Dashboard' />
                                <>Dashboard</>
                            </SidebarNavLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

                    {/* <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavInactiveLink>
                                <SidebarNavLinkLogo src={dashboardIcon} alt='Transactions' />
                                <>Transactions</>
                            </SidebarNavInactiveLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup> */}

                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/operations/deposit">
                                <SidebarNavLinkLogo src={dashboardIcon} alt='Operations' />
                                <>Operations</>
                            </SidebarNavLink>
                            <SidebarSubNav>
                           <SidebarSubNavLink to="/operations/deposit">Deposit</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/transfer">Transfer</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/top-up">Top Up</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/utility">Utility</SidebarSubNavLink>
                            </SidebarSubNav>
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/">
                                <SidebarNavLinkLogo src={cardIcon} alt='Cards' />
                                <>Cards</>
                            </SidebarNavLink>
                            {/* <SidebarSubNav>
                           <SidebarSubNavLink to="/dashboard/transactions">Transactions</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/transfer">Transfer</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/top-up">Top Up</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/utility">Utility</SidebarSubNavLink>
                            </SidebarSubNav> */}
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/">
                                <SidebarNavLinkLogo src={loanIcon} alt='Loans' />
                                <>Loans</>
                            </SidebarNavLink>
                            {/* <SidebarSubNav>
                           <SidebarSubNavLink to="/dashboard/transactions">Transactions</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/transfer">Transfer</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/top-up">Top Up</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/utility">Utility</SidebarSubNavLink>
                            </SidebarSubNav> */}
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/">
                                <SidebarNavLinkLogo src={dashboardIcon} alt='Customers' />
                                <>Customers</>
                            </SidebarNavLink>
                            {/* <SidebarSubNav>
                           <SidebarSubNavLink to="/dashboard/transactions">Transactions</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/transfer">Transfer</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/top-up">Top Up</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/utility">Utility</SidebarSubNavLink>
                            </SidebarSubNav> */}
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/">
                                <SidebarNavLinkLogo src={dashboardIcon} alt='Agents' />
                                <>Agents</>
                            </SidebarNavLink>
                            {/* <SidebarSubNav>
                           <SidebarSubNavLink to="/dashboard/transactions">Transactions</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/transfer">Transfer</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/top-up">Top Up</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/utility">Utility</SidebarSubNavLink>
                            </SidebarSubNav> */}
                        </SidebarNavGroupList>
                    </SidebarNavGroup>


                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/">
                                <SidebarNavLinkLogo src={settingsIcon} alt='System' />
                                <>System</>
                            </SidebarNavLink>
                            {/* <SidebarSubNav>
                           <SidebarSubNavLink to="/dashboard/transactions">Transactions</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/transfer">Transfer</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/top-up">Top Up</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/utility">Utility</SidebarSubNavLink>
                            </SidebarSubNav> */}
                        </SidebarNavGroupList>
                    </SidebarNavGroup>



                    {/* <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavInactiveLink>
                                <SidebarNavLinkLogo src={cardIcon} alt='Cards' />
                                <>Cards</>
                            </SidebarNavInactiveLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup> */}

                    {/* <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/dashboard/loan">
                                <SidebarNavLinkLogo src={loanIcon} alt='Loan' />
                                <>Loan</>
                            </SidebarNavLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup> */}

                    {/* <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/dashboard/settings">
                                <SidebarNavLinkLogo src={settingsIcon} alt='Settings' />
                                <>Settings</>
                            </SidebarNavLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup> */}

                </SidebarNav>

                <SidebarFooter>
                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavInactiveLink>
                                <SidebarNavLinkLogo src={messageIcon} alt='Support' />
                                <>Support</>
                            </SidebarNavInactiveLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavInactiveLink>
                                <SidebarNavLinkLogo src={logoutIcon} alt='Logout' />
                                <>Logout</>
                            </SidebarNavInactiveLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup>
                </SidebarFooter>
            </DashboardLTRContent>
        </>
    )
}

export default Sidebar