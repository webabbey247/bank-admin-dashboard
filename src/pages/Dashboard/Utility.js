import React, { useState } from 'react'
import styled from 'styled-components';
import Select from 'react-dropdown-select';
import { Form, Input, InputLabel, FormOperation, FormOperationsContainer, FormOTP, FormOTPContainer } from '../../assets/styles/FormStyles';
import { Content2Column2, Content4Column4, ContentFullColumn, ContentRow, CustomButton, CustomDiv, GeneralMdText } from '../../assets/styles/GlobalStyles'
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import { PageTitleSection, PageTitleContainer, } from './TransactionHistory';
import OperationSummaryModal from '../../components/Modals/OperationSummaryModal';
import { cableTvIcon, electricityIcon, taxesIcon, visaIcon, caretRightIcon } from '../../assets/images/images';

export const AccountSummary = styled.div`
display: flex;
justify-content: flex-end;
float: right;
`;

export const AccountSummaryChild = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-right: 2rem;

&:last-child {
  margin-right: 0;
}
`;


// export const FormOperation = styled.section`
// display: flex;
// justify-content: center;
// flex-direction: column;
// align-items: center;
// margin: 2rem 0;
// `;

// export const FormOperationsContainer = styled.form`
// width: min(100%, 45rem);
// background: var(--secondary-2);
// padding: 3rem 2rem;
// `;

// export const FormOTP = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// padding: 4rem;
// `;

// export const FormOTPContainer = styled.div`
// width:min(100%, 25rem);
// `;


export const UtilitySection = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 2rem 0;
`;

export const UtilityContainer = styled.div`
width: min(100%, 40rem);
padding: 2rem;
`;

export const UtilityFormContainer = styled.div`
width: min(100%, 40rem);
padding: 2rem;
background: var(--secondary-2);
`;



export const UtilityCards = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background: var(--secondary-2);
padding: 1.1rem 1rem;
border-radius: 8px;
margin-bottom: 1rem;
`;

export const UtilityCardsLTR = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;

export const UtilityCardsLTRIcon = styled.img`
width: 40px;
height: 40px;
`;

export const UtilityCardsRTL = styled.div``;

export const UtilityCardsRTLIcon = styled.img`
width: 24px;
height: 24px;
`;



const Utility = () => {
    const [showUtility, setShowUtility] = useState(true);
    const [showForm, setShowForm] = React.useState(false)
    const [showOTPForm, setShowOTPForm] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)

    const openModal = () => {
        setShowModal(!showModal);
      }

    const AccountOptions = [
        { value: 'Account 1', label: 'Account 1' },
        { value: 'Account 1', label: 'Account 2' },
    ];

    const BillerOptions = [
        { value: 'GOTV', label: 'GOTV' },
        { value: 'DSTV', label: 'DSTV' },
    ];

    const PackageOptions = [
        { value: 'JumboOne', label: 'JumboOne' },
        { value: 'JumboTwo', label: 'JumboTwo' },
    ];


    return (
        <>
            <DashboardLayout>
                <PageTitleSection>
                    <PageTitleContainer>
                        <ContentRow>
                            <Content2Column2>
                                <GeneralMdText fontWeight="600" textAlign="left" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="capitalize">Utility</GeneralMdText>
                            </Content2Column2>
                            <Content2Column2>
                                <AccountSummary>
                                    <AccountSummaryChild>
                                        <GeneralMdText fontWeight="600" textAlign="center" fontSize="14px" color="var(--orange)" lineHeight="19.49px" textTransform="unset">Total Balance</GeneralMdText>
                                        <GeneralMdText fontWeight="600" textAlign="center" fontSize="30px" color="var(--white)" lineHeight="41px" textTransform="unset">N177,000</GeneralMdText>
                                    </AccountSummaryChild>
                                    <AccountSummaryChild>
                                        <GeneralMdText fontWeight="600" textAlign="center" fontSize="14px" color="var(--orange)" lineHeight="19.49px" textTransform="unset">Spend Today</GeneralMdText>
                                        <GeneralMdText fontWeight="600" textAlign="center" fontSize="30px" color="var(--white)" lineHeight="41px" textTransform="unset">N500</GeneralMdText>
                                    </AccountSummaryChild>
                                </AccountSummary>
                            </Content2Column2>
                        </ContentRow>
                    </PageTitleContainer>
                </PageTitleSection>


                {showUtility && (
                    <UtilitySection>
                        <UtilityContainer>
                            <ContentRow>
                                <ContentFullColumn>
                                <UtilityCards onClick={() => {setShowForm(true); setShowUtility(false)}}>
                                        <UtilityCardsLTR>
                                            <UtilityCardsLTRIcon src={cableTvIcon} alt="Cable Tv" />
                                            <GeneralMdText fontWeight="600" fontSize="16px" lineHeight="19px" color="var(--white)" textTransform="unset" margin="12px 10px">
                                                Cable Tv
                                            </GeneralMdText>
                                        </UtilityCardsLTR>
                                        <UtilityCardsRTL>
                                            <UtilityCardsRTLIcon src={caretRightIcon} />
                                        </UtilityCardsRTL>
                                    </UtilityCards>
                                </ContentFullColumn>

                                <ContentFullColumn>
                                <UtilityCards onClick={() => {setShowForm(true); setShowUtility(false)}}>
                                        <UtilityCardsLTR>
                                            <UtilityCardsLTRIcon src={electricityIcon} alt="Electricity" />
                                            <GeneralMdText fontWeight="600" fontSize="16px" lineHeight="19px" color="var(--white)" textTransform="unset" margin="12px 10px">
                                                Electricity
                                            </GeneralMdText>
                                        </UtilityCardsLTR>
                                        <UtilityCardsRTL>
                                            <UtilityCardsRTLIcon src={caretRightIcon} />
                                        </UtilityCardsRTL>
                                    </UtilityCards>
                                </ContentFullColumn>

                                <ContentFullColumn>
                                <UtilityCards onClick={() => {setShowForm(true); setShowUtility(false)}}>
                                        <UtilityCardsLTR>
                                            <UtilityCardsLTRIcon src={taxesIcon} alt="Taxes and levies" />
                                            <GeneralMdText fontWeight="600" fontSize="16px" lineHeight="19px" color="var(--white)" textTransform="unset" margin="12px 10px">
                                                Taxes and levies
                                            </GeneralMdText>
                                        </UtilityCardsLTR>
                                        <UtilityCardsRTL>
                                            <UtilityCardsRTLIcon src={caretRightIcon} />
                                        </UtilityCardsRTL>
                                    </UtilityCards>
                                </ContentFullColumn>

                                <ContentFullColumn>
                                <UtilityCards onClick={() => {setShowForm(true); setShowUtility(false)}}>
                                        <UtilityCardsLTR>
                                            <UtilityCardsLTRIcon src={visaIcon} alt="Visa Fees" />
                                            <GeneralMdText fontWeight="600" fontSize="16px" lineHeight="19px" color="var(--white)" textTransform="unset" margin="12px 10px">
                                                Visa Fees
                                            </GeneralMdText>
                                        </UtilityCardsLTR>
                                        <UtilityCardsRTL>
                                            <UtilityCardsRTLIcon src={caretRightIcon} />
                                        </UtilityCardsRTL>
                                    </UtilityCards>
                                </ContentFullColumn>
                            </ContentRow>

                        </UtilityContainer>
                    </UtilitySection>
                )}

                {showForm && (
                      <FormOperation>
                      <FormOperationsContainer>
                                <ContentRow>
                                    <ContentFullColumn>
                                        <InputLabel>Select Account To Debit</InputLabel>
                                        <Select
                                            placeholder="Select Preferred Account"
                                            options={AccountOptions}
                                        />
                                    </ContentFullColumn>


                                    <ContentFullColumn>
                                        <InputLabel>Select Biller/Provider</InputLabel>
                                        <Select
                                            placeholder="Select Provider"
                                            options={BillerOptions}
                                        />
                                    </ContentFullColumn>


                                    <ContentFullColumn>
                                        <InputLabel>Select Package</InputLabel>
                                        <Select
                                            placeholder="Select Package"
                                            options={PackageOptions}
                                        />
                                    </ContentFullColumn>


                                    <ContentFullColumn>
                                        <InputLabel>Smart Card Number</InputLabel>
                                        <Input
                                            type='text'
                                        />
                                    </ContentFullColumn>

                                    <ContentFullColumn>
                                        <InputLabel>Amount</InputLabel>
                                        <Input
                                            className=""
                                            type='text'
                                        />
                                    </ContentFullColumn>

                                    {showOTPForm && (
                <ContentFullColumn>
                  <FormOTP>
                    <FormOTPContainer>
                      <ContentRow>
                        <ContentFullColumn>
                          <GeneralMdText fontWeight="600" textAlign="center" fontSize="18px" color="var(--white)" lineHeight="28px" textTransform="unset">Enter your transfer pin</GeneralMdText>
                        </ContentFullColumn>
                        <Content4Column4>
                          <Input
                            type='password'
                            maxLength="1"
                          />
                        </Content4Column4>
                        <Content4Column4>
                          <Input
                            type='password'
                            maxLength="1"
                          />
                        </Content4Column4>
                        <Content4Column4>
                          <Input
                            type='password'
                            maxLength="1"
                          />
                        </Content4Column4>
                        <Content4Column4>
                          <Input
                            type='password'
                            maxLength="1"
                          />
                        </Content4Column4>

                        <ContentFullColumn>

                        </ContentFullColumn>
                      </ContentRow>
                    </FormOTPContainer>
                  </FormOTP>
                </ContentFullColumn>

              )}

              {!showOTPForm ? (
                <CustomButton onClick={() => setShowOTPForm(true)} margin="10px 0 0" type="button" color="var(--white)" background="var(--orange)" border="1px solid var(--orange)" fontWeight="600">
                  Continue
                </CustomButton>
              ) : (
                <CustomButton onClick={() => setShowModal(true)} margin="10px 0 0" type="button" color="var(--white)" background="var(--orange)" border="1px solid var(--orange)" fontWeight="600">
                  Continue
                </CustomButton>
              )}
                                </ContentRow>
                        </FormOperationsContainer>
                    </FormOperation>
                )}


                {showModal && (
                    <OperationSummaryModal typeUrl="utility" close={openModal} />)}
            </DashboardLayout>
        </>
    )
}

export default Utility