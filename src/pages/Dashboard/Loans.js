import React, { useState } from 'react'
import styled from 'styled-components';
import Select from 'react-dropdown-select';
import { Form, Input, InputIcon, InputLabel } from '../../assets/styles/FormStyles';
import { Content2Column2, Content3Column3, Content4Column4, ContentFullColumn, ContentRow, CustomButton, CustomDiv, GeneralFlexColumn, GeneralFlexRow, GeneralMdText, MainContainer, SiteContainer } from '../../assets/styles/GlobalStyles'
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import { PageTitleSection } from './TransactionHistory';
import OperationSummaryModal from '../../components/Modals/OperationSummaryModal';



export const LoanSection = styled.section`
display: flex;
justify-content: center;
padding: 1.5rem 1.5rem;
`;

export const LoanCard = styled.div`
background: var(--secondary-2);
padding: 1rem 1rem;
border-radius: 8px;
margin-left: 3rem;
width: 300px;
`;

export const LoanFormContainer = styled.div`
width: min(100%, 45rem);
background: var(--secondary-2);
padding: 2rem 4rem 0;
border-radius: 8px;
margin: 2rem 0;
`;


export const LoanSummaryContainer = styled.section`
width: min(100%, 45rem);
background: var(--secondary-2);
padding: 3rem 8rem;
border-radius: 8px;
`;

export const OTPFormContainer = styled.div`
padding: 1rem 5.5rem 2rem;
`;



const Loans = () => {

    const LoanOptions = [
        { value: 'Automobile Loan', label: 'Automobile Loan' },
        { value: 'Mortgage Loan', label: 'Mortgage Loan' },
        { value: 'Secured Loan', label: 'Secured Loan' },
        { value: 'Salary Advance Loans', label: 'Salary Advance Loans:' },
    ];

    const [stepOneForm, setStepOneForm] = useState(true);
    const [showOTPForm, setShowOTPForm] = useState(false);
    const [showModal, setShowModal] = React.useState(false)

    const openModal = () => {
        setShowModal(!showModal);
      }
    

    return (
        <>
            <DashboardLayout>

                <PageTitleSection>
                    <SiteContainer>
                        <ContentRow>
                            <Content4Column4>
                                <GeneralFlexRow justifyContent="flex-start" width="20%">
                                    <GeneralMdText fontWeight="600" textAlign="left" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="capitalize">Loans</GeneralMdText>
                                </GeneralFlexRow>
                            </Content4Column4>
                            <Content2Column2>
                            {/* <LoanCard>
                                        <GeneralMdText opacity="0.8" fontWeight="600" textAlign="left" fontSize="16px" color="var(--gray)" lineHeight="20px" textTransform="capitalize">Account 1</GeneralMdText>
                                        <GeneralFlexRow justifyContent="space-between" margin="20px 0 0">
                                            <GeneralFlexColumn>
                                                <GeneralMdText fontWeight="400" textAlign="left" fontSize="12px" color="var(--gray)" lineHeight="15px" textTransform="capitalize">Balance</GeneralMdText>
                                                <GeneralMdText fontWeight="600" textAlign="left" fontSize="24px" color="var(--orange)" lineHeight="29px" textTransform="capitalize">N14,500.00</GeneralMdText>
                                            </GeneralFlexColumn>

                                            <GeneralFlexColumn margin="10px 0">
                                                <GeneralMdText fontWeight="400" textAlign="right" fontSize="12px" color="var(--gray)" lineHeight="15px" textTransform="capitalize">Status</GeneralMdText>
                                                <GeneralMdText fontWeight="600" textAlign="right" fontSize="16px" color="var(--success)" lineHeight="19px" textTransform="capitalize">Eligible</GeneralMdText>
                                            </GeneralFlexColumn>
                                        </GeneralFlexRow>
                                    </LoanCard> */}
                            </Content2Column2>
                        </ContentRow>
                    </SiteContainer>
                </PageTitleSection>

                {stepOneForm ? (
 <LoanSection>
 <LoanFormContainer>
     <GeneralMdText fontWeight="600" textAlign="center" fontSize="20px" color="var(--white)" lineHeight="24px" textTransform="unset" margin="0 0 4rem">Please provide the following information to continue with the process</GeneralMdText>
     <Form>
         <ContentRow>
             <Content2Column2>
                 <InputLabel>Select Loan</InputLabel>
                 <Select
                     placeholder="Select Preferred Loan"
                     options={LoanOptions}
                 />
             </Content2Column2>

             <Content2Column2>
                 <InputLabel>Amount</InputLabel>
                 <Input type="text" placeholder="" />
             </Content2Column2>

             <Content2Column2>
                 <InputLabel>SMaximum Tenor (Months)</InputLabel>
                 <Input type="text" placeholder="" />
             </Content2Column2>

             <Content2Column2>
                 <InputLabel>Interest Rate</InputLabel>
                 <Input type="text" placeholder="" />
             </Content2Column2>

             <Content2Column2>
                 <InputLabel>Monthly Repayment</InputLabel>
                 <Input type="text" placeholder="" />
             </Content2Column2>

             <Content2Column2>
                 <InputLabel>Total Repayment</InputLabel>
                 <Input type="text" placeholder="" />
             </Content2Column2>

             <ContentFullColumn>
                 <CustomButton onClick={() => setStepOneForm(false)} fontWeight="600" margin="20px 0" type="button" color="var(--white)" background="var(--orange)" border="1px solid var(--orange)">
                     Continue
                 </CustomButton>
             </ContentFullColumn>
         </ContentRow>


     </Form>
 </LoanFormContainer>
</LoanSection>
                ) : (
                    <LoanSection>
                    <LoanSummaryContainer>
                        <GeneralMdText fontWeight="600" textAlign="center" fontSize="20px" color="var(--white)" lineHeight="24px" textTransform="unset" margin="0 0 4rem">You are about to procure a loan</GeneralMdText>

                        <GeneralFlexColumn margin="10px 0">
                            <GeneralFlexRow>
                            <GeneralMdText fontWeight="600" textAlign="left" fontSize="16px" color="var(--input-border-color)" lineHeight="19px" textTransform="capitalize">Amount</GeneralMdText>
                            <GeneralMdText fontWeight="600" textAlign="right" fontSize="16px" color="var(--gray)" lineHeight="19px" textTransform="capitalize">N1,500,000</GeneralMdText>
                            </GeneralFlexRow>
                        </GeneralFlexColumn>

                        <GeneralFlexColumn margin="20px 0">
                            <GeneralFlexRow>
                            <GeneralMdText fontWeight="600" textAlign="left" fontSize="16px" color="var(--input-border-color)" lineHeight="19px" textTransform="capitalize">Tenor</GeneralMdText>
                            <GeneralMdText fontWeight="600" textAlign="right" fontSize="16px" color="var(--gray)" lineHeight="19px" textTransform="capitalize">3 months</GeneralMdText>
                            </GeneralFlexRow>
                        </GeneralFlexColumn>

                        <GeneralFlexColumn margin="20px 0">
                            <GeneralFlexRow>
                            <GeneralMdText fontWeight="600" textAlign="left" fontSize="16px" color="var(--input-border-color)" lineHeight="19px" textTransform="capitalize">Monthly Repayment</GeneralMdText>
                            <GeneralMdText fontWeight="600" textAlign="right" fontSize="16px" color="var(--gray)" lineHeight="19px" textTransform="capitalize">N560,000</GeneralMdText>
                            </GeneralFlexRow>
                        </GeneralFlexColumn>

                        <GeneralFlexColumn margin="20px 0">
                            <GeneralFlexRow>
                            <GeneralMdText fontWeight="600" textAlign="left" fontSize="16px" color="var(--input-border-color)" lineHeight="19px" textTransform="capitalize">Next Payment Date</GeneralMdText>
                            <GeneralMdText fontWeight="600" textAlign="right" fontSize="16px" color="var(--gray)" lineHeight="19px" textTransform="capitalize">24 August 2022</GeneralMdText>
                            </GeneralFlexRow>
                        </GeneralFlexColumn>

                        <GeneralFlexColumn margin="20px 0">
                            <GeneralFlexRow>
                            <GeneralMdText fontWeight="600" textAlign="left" fontSize="16px" color="var(--input-border-color)" lineHeight="19px" textTransform="capitalize">Interest Rate</GeneralMdText>
                            <GeneralMdText fontWeight="600" textAlign="right" fontSize="16px" color="var(--gray)" lineHeight="19px" textTransform="capitalize">7%</GeneralMdText>
                            </GeneralFlexRow>
                        </GeneralFlexColumn>

                        <GeneralFlexColumn margin="20px 0">
                            <GeneralFlexRow>
                            <GeneralMdText fontWeight="600" textAlign="left" fontSize="16px" color="var(--input-border-color)" lineHeight="19px" textTransform="capitalize">Total Repayment</GeneralMdText>
                            <GeneralMdText fontWeight="600" textAlign="right" fontSize="16px" color="var(--gray)" lineHeight="19px" textTransform="capitalize">N1,630,000</GeneralMdText>
                            </GeneralFlexRow>
                        </GeneralFlexColumn>


                      {showOTPForm && (
                        <>
                          <hr />
                          <OTPFormContainer>
                          <ContentRow>
                              <Content4Column4>
                                  <Input type="password" maxLength="1" />
                              </Content4Column4>

                              <Content4Column4>
                                  <Input type="password" maxLength="1" />
                              </Content4Column4>

                              <Content4Column4>
                                  <Input type="password" maxLength="1" />
                              </Content4Column4>

                              <Content4Column4>
                                  <Input type="password" maxLength="1" />
                              </Content4Column4>
                          </ContentRow>
                      </OTPFormContainer>
                      </>
                      )}

                       <GeneralFlexColumn>
                        {showOTPForm ? (
                            <CustomButton onClick={()=> setShowModal(true)}  fontWeight="600" margin=" 0" type="button" color="var(--white)" background="var(--orange)" border="1px solid var(--orange)">
                            Verify OTP
                           </CustomButton>
                        ): (
                            <CustomButton onClick={()=> setShowOTPForm(true)} fontWeight="600" margin="30px 0" type="button" color="var(--white)" background="var(--orange)" border="1px solid var(--orange)">
                               Continue
                              </CustomButton>
                        )}
                        </GeneralFlexColumn>
                    </LoanSummaryContainer>
                </LoanSection>  
                )}
            </DashboardLayout>
            {showModal && (
          <OperationSummaryModal typeUrl="loans" close={openModal} />)}
        </>
    )
}

export default Loans