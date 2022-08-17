import React, { useState } from 'react'
import styled from 'styled-components';
import Select from 'react-dropdown-select';
import { Form, Input, InputLabel, FormOperation, FormOperationsContainer, FormOTP, FormOTPContainer } from '../../assets/styles/FormStyles';
import { Content2Column2, Content4Column4, ContentFullColumn, ContentRow, CustomButton, CustomDiv, GeneralMdText } from '../../assets/styles/GlobalStyles'
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import { PageTitleSection, PageTitleContainer, } from './TransactionHistory';
import OperationSummaryModal from '../../components/Modals/OperationSummaryModal';

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
// // padding: 3rem 2rem;
// padding: 3rem 2rem 1.5rem;
// border-radius: 8px;

// `;

// export const FormOTP = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// padding: 2rem 6rem;
// `;

// export const FormOTPContainer = styled.div`
// width:min(100%, 16rem);
// `;



const Transfer = () => {
  const [showOTPForm, setShowOTPForm] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)

  const openModal = () => {
    setShowModal(!showModal);
  }


  const AccountOptions = [
    { value: 'Account 1', label: 'Account 1' },
    { value: 'Account 1', label: 'Account 2' },
  ];

  const TransferOptions = [
    { value: 'To Bank One', label: 'To Bank One' },
    { value: 'To Bank Two', label: 'To Bank Two' },
  ];

  const BankOptions = [
    { value: 'First Bank', label: 'First Bank' },
    { value: 'United Bank Of Africa', label: 'United Bank Of Africa' },
  ];


  return (

    <>
      <DashboardLayout>
        <PageTitleSection>
          <PageTitleContainer>
            <ContentRow>
              <Content2Column2>
                <GeneralMdText fontWeight="600" textAlign="left" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="capitalize">Transfer</GeneralMdText>
              </Content2Column2>
              <Content2Column2>
                <AccountSummary>
                  <AccountSummaryChild>
                    <GeneralMdText fontWeight="400" textAlign="center" fontSize="15px" color="var(--orange)" lineHeight="19.49px" textTransform="unset">Total Balance</GeneralMdText>
                    <GeneralMdText fontWeight="600" textAlign="center" fontSize="30px" color="var(--white)" lineHeight="41px" textTransform="unset">N177,000</GeneralMdText>
                  </AccountSummaryChild>
                  <AccountSummaryChild>
                    <GeneralMdText fontWeight="400" textAlign="center" fontSize="15px" color="var(--orange)" lineHeight="19.49px" textTransform="unset">Spend Today</GeneralMdText>
                    <GeneralMdText fontWeight="600" textAlign="center" fontSize="30px" color="var(--white)" lineHeight="41px" textTransform="unset">N500</GeneralMdText>
                  </AccountSummaryChild>
                </AccountSummary>
              </Content2Column2>
            </ContentRow>
          </PageTitleContainer>
        </PageTitleSection>

        <FormOperation>
          <FormOperationsContainer>
            <ContentRow>
              <Content2Column2>
                <InputLabel>Select Account To Debit</InputLabel>
                <Select
                  placeholder="Select Preferred Account"
                  options={AccountOptions}
                />
              </Content2Column2>

              <Content2Column2>
                <InputLabel>Select Transfer Type</InputLabel>
                <Select
                  placeholder="Select Transfer Type"
                  options={TransferOptions}
                />
              </Content2Column2>

              <Content2Column2>
                <InputLabel>Beneficiary Bank</InputLabel>
                <Select
                  placeholder="Select Bank"
                  options={BankOptions}
                />
              </Content2Column2>

              <Content2Column2>
                <InputLabel>Beneficiary Account</InputLabel>
                <Input
                  className=""
                  type='text'
                  placeholder=""
                />
              </Content2Column2>

              <Content2Column2>
                <InputLabel>Beneficiary Name</InputLabel>
                <Input
                  className=""
                  type='text'
                  placeholder=''
                />
              </Content2Column2>

              <Content2Column2>
                <InputLabel>Amount</InputLabel>
                <Input
                  className=""
                  type='text'
                  placeholder=''
                />
              </Content2Column2>

              <ContentFullColumn>
                <InputLabel>Description</InputLabel>
                <Input
                  className=""
                  type='text'
                  placeholder=''
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

        {showModal && (
          <OperationSummaryModal typeUrl="transfer" close={openModal} />)}
      </DashboardLayout>
    </>
  )
}

export default Transfer