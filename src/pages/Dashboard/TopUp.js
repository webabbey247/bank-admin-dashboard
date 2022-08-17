import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Select from 'react-dropdown-select';
import { Form, Input, InputLabel, CountryPickerCard, CountryPicker, FormOperation, FormOperationsContainer, FormOTP, FormOTPContainer } from '../../assets/styles/FormStyles';
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


// export const FormOperation = styled.div`
// display: flex;
// justify-content: center;
// flex-direction: column;
// align-items: center;
// margin: 2rem 0;
// `;

// export const FormOperationsContainer = styled.form`
// width: min(100%, 38rem);
// background: var(--secondary-2);
// padding: 4rem 2rem;
// border-radius: 8px;
// `;

// export const FormOTP = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// margin-top: 20px;
// // padding: 2rem 4rem 0;
// `;

// export const FormOTPContainer = styled.div`
// width:min(100%, 15rem);
// text-align: center;
// `;

// export const TopUpForm = styled.form`
// padding: 1rem 6rem;
// `;



const TopUp = () => {
  const [areaCode, setAreaCode] = useState([]);
  const [selectedAreaCode, setSelectedAreaCode] = useState("");
const [showOTPForm, setShowOTPForm] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)

  const openModal = () => {
    setShowModal(!showModal);
  }

  const AccountOptions = [
    { value: 'Account 1', label: 'Account 1' },
    { value: 'Account 1', label: 'Account 2' },
  ];

  const NetworkProvider = [
    { value: 'MTN', label: 'MTN' },
    { value: 'AIRTEL', label: 'AIRTEL' },
    { value: 'GLOBACOM', label: 'GLOBACOM' },
    { value: 'SPECTRANET', label: 'SPECTRANET' },
  ];

  useEffect(() => {
    fetch("https://restcountries.com/v3/all")
        .then((response) => response.json())
        .then((data) => {
            const areaCodeData = data.map((item) => {
                return {
                    code: item.cca2,
                    name: item.name.common,
                    flag: item.flags[1],
                    dialCode: [item.idd.root, (item.idd.suffixes || [])[0]].join(""),
                };
            });

            setAreaCode(areaCodeData);
            if (areaCodeData.length > 0) {
                let defaultAreaData = areaCodeData.filter((a) => a.code === "NG");
                if (defaultAreaData.length > 0) {
                    setSelectedAreaCode(defaultAreaData[0]);
                }
            }
        })
        .catch((err) => {
            console.error("Request failed", err);
        });
}, []);


  return (
    <>
      <DashboardLayout>
        <PageTitleSection>
          <PageTitleContainer>
            <ContentRow>
              <Content2Column2>
                <GeneralMdText fontWeight="600" textAlign="left" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="capitalize">Top-Up</GeneralMdText>
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
                  <InputLabel>Amount</InputLabel>
                  <Input
                    type='text'
                    placeholder='Amount'
                  />
                </ContentFullColumn>

                <ContentFullColumn>
                  <InputLabel>Network Provider</InputLabel>
                  <Select
                    placeholder="Select Provider"
                    options={NetworkProvider}
                  />
                </ContentFullColumn>

                <ContentFullColumn>
                                            <CountryPickerCard>
                                                <CountryPicker>
                                                    <Select placeholder={selectedAreaCode.dialCode} options={areaCode.map(({ dialCode }) =>
                                                        ({ label: dialCode, value: dialCode })
                                                    )}
                                                    />
                                                </CountryPicker>
                                                <Input
                                                    className=""
                                                    type='text'
                                                    placeholder='Phone Number'
                                                />
                                            </CountryPickerCard>
                                        </ContentFullColumn>

                {showOTPForm && (
                  <ContentFullColumn>
                    <FormOTP>
                      <FormOTPContainer>
                        <ContentRow>
                          <ContentFullColumn>
                            <GeneralMdText fontWeight="600" textAlign="center" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="unset">Enter your transfer pin</GeneralMdText>
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
                        </ContentRow>
                      </FormOTPContainer>
                    </FormOTP>
                  </ContentFullColumn>
                )}
                



                {!showOTPForm ? (
                  <ContentFullColumn>
                    <CustomButton fontWeight="600" onClick={() => setShowOTPForm(true)} margin="10px 0" type="button" color="var(--white)" background="var(--orange)" border="1px solid var(--orange)">
                      Continue
                    </CustomButton>
                  </ContentFullColumn>
                ) : (
                  <ContentFullColumn>
                            <CustomButton fontWeight="600" onClick={() => setShowModal(true)} margin="10px 0" type="button" color="var(--white)" background="var(--orange)" border="1px solid var(--orange)">
                              Continue
                            </CustomButton>
                          </ContentFullColumn>
                )}
              </ContentRow>
          </FormOperationsContainer>
        </FormOperation>

        {showModal && (
          <OperationSummaryModal typeUrl="topup" close={openModal} />)}
      </DashboardLayout>
    </>
  )
}

export default TopUp