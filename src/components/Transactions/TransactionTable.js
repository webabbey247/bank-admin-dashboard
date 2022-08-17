import React from 'react'
import styled from 'styled-components';
import { debitIcon, creditIcon } from '../../assets/images/images';
import { GeneralSmText } from '../../assets/styles/GlobalStyles';

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


const TransactionTable = ({ typeUrl }) => {
    return (
        <>

            {typeUrl === "debit" && (
                <TransactionTableGroup>
                    <GeneralSmText color="var(--white)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="0.5rem 0">Today</GeneralSmText>
                    <TransactionTableSummary>
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

                    <TransactionTableSummary>
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

                    <TransactionTableSummary>
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
            )}

{typeUrl === "credit" && (
                <TransactionTableGroup>
                <GeneralSmText color="var(--white)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="0.5rem 0">23 July</GeneralSmText>

                <TransactionTableSummary>
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

                <TransactionTableSummary>
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

                <TransactionTableSummary>
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
            )}

        </>
    )
}

export default TransactionTable