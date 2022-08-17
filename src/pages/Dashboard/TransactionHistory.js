import React from 'react'
import styled from 'styled-components'
import { ContentRow, GeneralMdText, GeneralSmText, ContentFullColumn } from '../../assets/styles/GlobalStyles'
import { debitIcon, creditIcon } from '../../assets/images/images';
import DashboardLayout from '../../components/Layouts/DashboardLayout'
// import TransactionTable from '../../components/Transactions/TransactionTable'
import TransactionSummaryModal from '../../components/Modals/TransactionSummaryModal'


export const PageTitleSection = styled.section`
display: flex;
justify-content: center;
padding: 1.5rem 1.5rem;
`;

export const PageTitleContainer = styled.div`
width: min(100%, 80rem)
`;

export const TransactionHistorySection = styled.section`
padding: 1rem;
display: flex;
justify-content: center;
`;

export const TransactionTableContainer = styled.div`
width: min(100%, 80rem);
`;

export const TransactionTableGroup = styled.div`
margin: 10px 0;
display: flex;
flex-direction: column;
`;

export const TransactionTableSummary = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1rem 0;
border-bottom: 1px solid #16323E;

`;

export const TransactionTableSummaryLeft = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;

export const TransactionTableSummaryLeftIcon = styled.img`
height: 32px;
width: 32px;
margin-right: 10px;
`;

export const TransactionTableSummaryLeftContent = styled.div`
display: flex;
flex-direction: column;
`;

export const TransactionTableSummaryRight = styled.div`
text-align: right:
`;

const TransactionHistory = () => {
    const [transaction, setTransaction] = React.useState('debit');
    const [showModal, setShowModal] = React.useState(false)

    const openModal = () => {
        setShowModal(!showModal);
      }

    return (
        <DashboardLayout>
            <PageTitleSection>
                <PageTitleContainer>
                    <GeneralMdText fontWeight="600" textAlign="left" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="capitalize">Transaction History</GeneralMdText>
                </PageTitleContainer>
            </PageTitleSection>

            <TransactionHistorySection>
                <TransactionTableContainer>
                    <ContentRow>
                        <ContentFullColumn>
                            <TransactionTableGroup>
                                <GeneralSmText color="var(--white)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="0.5rem 0">Today</GeneralSmText>
                                <TransactionTableSummary onClick={() => {
                                    setTransaction('debit');
                                    setShowModal(true)
                                }}>
                                    <TransactionTableSummaryLeft>
                                        <TransactionTableSummaryLeftIcon src={debitIcon} alt="Debit" />
                                        <TransactionTableSummaryLeftContent>
                                            <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0" opacity="0.8">YEMI SALEM</GeneralSmText>
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" opacity="0.8">9:00PM</GeneralSmText>
                                        </TransactionTableSummaryLeftContent>
                                    </TransactionTableSummaryLeft>
                                    <TransactionTableSummaryRight>
                                        <GeneralSmText color="var(--debit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                    </TransactionTableSummaryRight>
                                </TransactionTableSummary>

                                <TransactionTableSummary onClick={() => {
                                    setTransaction('credit');
                                    setShowModal(true)
                                }}>
                                    <TransactionTableSummaryLeft>
                                        <TransactionTableSummaryLeftIcon src={creditIcon} alt="Debit" />
                                        <TransactionTableSummaryLeftContent>
                                            <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0">YEMI SALEM</GeneralSmText>
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left">9:00PM</GeneralSmText>
                                        </TransactionTableSummaryLeftContent>
                                    </TransactionTableSummaryLeft>
                                    <TransactionTableSummaryRight>
                                        <GeneralSmText color="var(--credit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                    </TransactionTableSummaryRight>
                                </TransactionTableSummary>

                                <TransactionTableSummary onClick={() => {
                                    setTransaction('debit');
                                    setShowModal(true)
                                }}>
                                    <TransactionTableSummaryLeft>
                                        <TransactionTableSummaryLeftIcon src={debitIcon} alt="Debit" />
                                        <TransactionTableSummaryLeftContent>
                                            <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0" opacity="0.8">YEMI SALEM</GeneralSmText>
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" opacity="0.8">9:00PM</GeneralSmText>
                                        </TransactionTableSummaryLeftContent>
                                    </TransactionTableSummaryLeft>
                                    <TransactionTableSummaryRight>
                                        <GeneralSmText color="var(--debit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                    </TransactionTableSummaryRight>
                                </TransactionTableSummary>

                            </TransactionTableGroup>

                            <TransactionTableGroup>
                                <GeneralSmText color="var(--white)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="0.5rem 0">23 July 2022</GeneralSmText>
                                <TransactionTableSummary onClick={() => {
                                    setTransaction('debit');
                                    setShowModal(true)
                                }}>
                                    <TransactionTableSummaryLeft>
                                        <TransactionTableSummaryLeftIcon src={debitIcon} alt="Debit" />
                                        <TransactionTableSummaryLeftContent>
                                            <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0" opacity="0.8">YEMI SALEM</GeneralSmText>
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" opacity="0.8">9:00PM</GeneralSmText>
                                        </TransactionTableSummaryLeftContent>
                                    </TransactionTableSummaryLeft>
                                    <TransactionTableSummaryRight>
                                        <GeneralSmText color="var(--debit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                    </TransactionTableSummaryRight>
                                </TransactionTableSummary>

                                <TransactionTableSummary onClick={() => {
                                    setTransaction('credit');
                                    setShowModal(true)
                                }}>
                                    <TransactionTableSummaryLeft>
                                        <TransactionTableSummaryLeftIcon src={creditIcon} alt="Debit" />
                                        <TransactionTableSummaryLeftContent>
                                            <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0">YEMI SALEM</GeneralSmText>
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left">9:00PM</GeneralSmText>
                                        </TransactionTableSummaryLeftContent>
                                    </TransactionTableSummaryLeft>
                                    <TransactionTableSummaryRight>
                                        <GeneralSmText color="var(--credit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                    </TransactionTableSummaryRight>
                                </TransactionTableSummary>

                                <TransactionTableSummary onClick={() => {
                                    setTransaction('credit');
                                    setShowModal(true)
                                }}>
                                    <TransactionTableSummaryLeft>
                                        <TransactionTableSummaryLeftIcon src={creditIcon} alt="Debit" />
                                        <TransactionTableSummaryLeftContent>
                                            <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0">YEMI SALEM</GeneralSmText>
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left">9:00PM</GeneralSmText>
                                        </TransactionTableSummaryLeftContent>
                                    </TransactionTableSummaryLeft>
                                    <TransactionTableSummaryRight>
                                        <GeneralSmText color="var(--credit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                    </TransactionTableSummaryRight>
                                </TransactionTableSummary>

                                <TransactionTableSummary onClick={() => {
                                    setTransaction('credit');
                                    setShowModal(true)
                                }}>
                                    <TransactionTableSummaryLeft>
                                        <TransactionTableSummaryLeftIcon src={creditIcon} alt="Debit" />
                                        <TransactionTableSummaryLeftContent>
                                            <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0">YEMI SALEM</GeneralSmText>
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left">9:00PM</GeneralSmText>
                                        </TransactionTableSummaryLeftContent>
                                    </TransactionTableSummaryLeft>
                                    <TransactionTableSummaryRight>
                                        <GeneralSmText color="var(--credit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                    </TransactionTableSummaryRight>
                                </TransactionTableSummary>

                                <TransactionTableSummary onClick={() => {
                                    setTransaction('credit');
                                    setShowModal(true)
                                }}>
                                    <TransactionTableSummaryLeft>
                                        <TransactionTableSummaryLeftIcon src={creditIcon} alt="Debit" />
                                        <TransactionTableSummaryLeftContent>
                                            <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0">YEMI SALEM</GeneralSmText>
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left">9:00PM</GeneralSmText>
                                        </TransactionTableSummaryLeftContent>
                                    </TransactionTableSummaryLeft>
                                    <TransactionTableSummaryRight>
                                        <GeneralSmText color="var(--credit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                    </TransactionTableSummaryRight>
                                </TransactionTableSummary>

                            </TransactionTableGroup>
                            {/* <TransactionTable onClick={() => setTransaction('debit')} typeUrl="debit" /> */}
                        </ContentFullColumn>
                    </ContentRow>
                </TransactionTableContainer>
            </TransactionHistorySection>

            {showModal && (<TransactionSummaryModal close={openModal} transactionType={transaction} />
            )}

        </DashboardLayout>
    )
}

export default TransactionHistory