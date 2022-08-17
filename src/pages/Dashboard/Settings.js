import React, { useState } from 'react'
import styled from 'styled-components';
import Select from 'react-dropdown-select';
import { Form, Input, InputIcon, InputLabel } from '../../assets/styles/FormStyles';
import { Content2Column2, Content3Column3, Content4Column4, ContentFullColumn, ContentRow, CustomButton, CustomDiv, GeneralFlexColumn, GeneralFlexRow, GeneralMdText, MainContainer, SiteContainer } from '../../assets/styles/GlobalStyles'
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import { PageTitleSection } from './TransactionHistory';
import { caretRightIcon, caretUpIcon, profilePhoto } from '../../assets/images/images';
import { FiEye, FiEyeOff } from "react-icons/fi";


export const SettingsSection = styled.section`
display: flex;
justify-content: center;
padding: 1.5rem 1.5rem;
`;

export const SettingsCard = styled.div`
background: var(--secondary-2);
padding: 1rem;
border-radius: 8px;
margin: 0 0 2rem;
`;

export const SettingsCardProfile = styled.img`
width: 140px;
height: 140px;
`;

export const SettingsCardContent = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
`;

export const SettingsCardContentGroup = styled.div`
display: flex;
flex-direction: column;
padding: 1rem 0 1rem;
`;

export const SettingsCardFormList = styled.div`
display: flex;
flex-direction: column;
padding: 0.8rem 1rem;
width: 100%;
background: var(--primary);
margin: 1rem 0;
border-radius: 8px;
`;

export const SettingsCardList = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 1rem 0;
`;

export const SettingsCardListImg = styled.img`
width: 24px;
height: 24px;
`;




const Settings = () => {
    const [showPinForm, setShowPinForm] = useState(false);
    const [showPin, setShowPin] = useState(false);

    return (
        <>
            <DashboardLayout>

                <PageTitleSection>
                    <SiteContainer>
                        <ContentRow>
                            <Content2Column2>
                                <GeneralMdText fontWeight="600" textAlign="left" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="capitalize">Settings</GeneralMdText>
                            </Content2Column2>
                        </ContentRow>
                    </SiteContainer>
                </PageTitleSection>

                <SettingsSection>
                    <SiteContainer>

                        <SettingsCard>
                            <ContentRow>
                                <ContentFullColumn>
                                    <GeneralMdText fontSize="18px" lineHeight="24px" color="var(--orange)" margin="10px 0" textTransform="unset" fontWeight="600">Personal Information</GeneralMdText>
                                </ContentFullColumn>

                                <ContentFullColumn>
                                    <SettingsCardContent>
                                        <SettingsCardContentGroup>
                                            <GeneralFlexColumn margin="auto">
                                                <SettingsCardProfile src={profilePhoto} alt="Damola Alausa" />
                                                <CustomButton background="var(--orange)" border="1px solid var(--orange)" color="var(--white)" fontWeight="600" margin="10px 0">Upload</CustomButton>
                                            </GeneralFlexColumn>
                                        </SettingsCardContentGroup>


                                        <SettingsCardContentGroup>
                                            <GeneralFlexColumn>
                                                <GeneralMdText fontSize="16px" lineHeight="20px" color="var(--gray-3)" margin="10px 0" textTransform="unset" fontWeight="400">Name</GeneralMdText>
                                                <GeneralMdText fontSize="18px" lineHeight="24px" color="var(--white)" margin="0" textTransform="unset" fontWeight="600">Alausa Adedamola</GeneralMdText>
                                            </GeneralFlexColumn>

                                            <GeneralFlexColumn margin="10px 0">
                                                <GeneralMdText fontSize="16px" lineHeight="20px" color="var(--gray-3)" margin="10px 0" textTransform="unset" fontWeight="400">Email</GeneralMdText>
                                                <GeneralMdText fontSize="18px" lineHeight="24px" color="var(--white)" margin="0" textTransform="unset" fontWeight="600">adedamolajose@gmail.com</GeneralMdText>
                                            </GeneralFlexColumn>

                                            <GeneralFlexColumn>
                                                <GeneralMdText fontSize="16px" lineHeight="20px" color="var(--gray-3)" margin="10px 0" textTransform="unset" fontWeight="400">Phone Number</GeneralMdText>
                                                <GeneralMdText fontSize="18px" lineHeight="24px" color="var(--white)" margin="0" textTransform="unset" fontWeight="600">+234 706 727 6819</GeneralMdText>
                                            </GeneralFlexColumn>
                                        </SettingsCardContentGroup>

                                        <SettingsCardContentGroup>
                                            <GeneralFlexColumn>
                                                <GeneralMdText fontSize="16px" lineHeight="20px" color="var(--gray-3)" margin="10px 0" textTransform="unset" fontWeight="400">Address</GeneralMdText>
                                                <GeneralMdText fontSize="18px" lineHeight="24px" color="var(--white)" margin="0" textTransform="unset" fontWeight="600">Raymon Njoku street, Lagos</GeneralMdText>
                                            </GeneralFlexColumn>

                                            <GeneralFlexColumn margin="10px 0">
                                                <GeneralMdText fontSize="16px" lineHeight="20px" color="var(--gray-3)" margin="10px 0" textTransform="unset" fontWeight="400">Identification</GeneralMdText>
                                                <GeneralMdText fontSize="20px" lineHeight="24px" color="var(--white)" margin="0" textTransform="unset" fontWeight="600">Utility bill</GeneralMdText>
                                            </GeneralFlexColumn>
                                        </SettingsCardContentGroup>

                                    </SettingsCardContent>
                                </ContentFullColumn>
                            </ContentRow>
                        </SettingsCard>


                        <SettingsCard>
                            <ContentRow>
                                <ContentFullColumn>
                                    <GeneralMdText fontSize="18px" lineHeight="24px" color="var(--orange)" margin="10px 0" textTransform="unset" fontWeight="600">Account Settings</GeneralMdText>
                                </ContentFullColumn>

                                <ContentFullColumn>
                                    <SettingsCardFormList onClick={() => setShowPinForm(!showPinForm)}>
                                        <GeneralFlexRow margin="10px 0">
                                            <GeneralMdText fontSize="16px" lineHeight="24px" color="var(--white)" textTransform="unset" fontWeight="600">Change Transaction Pin</GeneralMdText>
                                            <SettingsCardListImg src={showPinForm ? caretUpIcon : caretRightIcon} />
                                        </GeneralFlexRow>
                                    </SettingsCardFormList>

                                    {showPinForm && (
                                        <GeneralFlexRow>
                                            <Form>
                                                <ContentRow>
                                                    <Content3Column3>
                                                        <InputLabel>Current PIN</InputLabel>
                                                        <Input type={showPin ? "text" : "password"}  />
                                                        <InputIcon onClick={() => setShowPin(!showPin)}>
                                                            {showPin ? <FiEye size="20" color='var(--white)' /> : <FiEyeOff size="20" color='var(--white)' />}
                                                        </InputIcon>
                                                    </Content3Column3>

                                                    <Content3Column3>
                                                        <InputLabel>New PIN</InputLabel>
                                                        <Input type={showPin ? "text" : "password"}  />
                                                        <InputIcon onClick={() => setShowPin(!showPin)}>
                                                            {showPin ? <FiEye size="20" color='var(--white)' /> : <FiEyeOff size="20" color='var(--white)' />}
                                                        </InputIcon>
                                                    </Content3Column3>

                                                    <Content3Column3>
                                                        <InputLabel>Confirm New PIN</InputLabel>
                                                        <Input type={showPin ? "text" : "password"}  />
                                                        <InputIcon onClick={() => setShowPin(!showPin)}>
                                                            {showPin ? <FiEye size="20" color='var(--white)' /> : <FiEyeOff size="20" color='var(--white)' />}
                                                        </InputIcon>
                                                    </Content3Column3>

                                                    <ContentFullColumn>
                                                        <CustomButton width="30%" margin="10px 0" type="button" color="var(--white)" background="var(--step-color)" border="1px solid var(--step-color)">Update Pin </CustomButton>
                                                    </ContentFullColumn>
                                                </ContentRow>
                                            </Form>
                                        </GeneralFlexRow>
                                    )}
                                </ContentFullColumn>
                            </ContentRow>
                        </SettingsCard>

                        <SettingsCard>
                            <ContentRow>
                                <ContentFullColumn>
                                    <GeneralMdText fontSize="18px" lineHeight="24px" color="var(--orange)" margin="10px 0" textTransform="unset" fontWeight="600">Others</GeneralMdText>
                                </ContentFullColumn>

                                <ContentFullColumn>
                                    <SettingsCardList>
                                        <GeneralFlexRow margin="5px 0">
                                            <GeneralMdText fontSize="16px" lineHeight="24px" color="var(--white)" textTransform="unset" fontWeight="600">Privacy Policy</GeneralMdText>
                                            <SettingsCardListImg src={caretRightIcon} />
                                        </GeneralFlexRow>
                                    </SettingsCardList>

                                    <SettingsCardList>
                                        <GeneralFlexRow margin="5px 0">
                                            <GeneralMdText fontSize="16px" lineHeight="24px" color="var(--white)" textTransform="unset" fontWeight="600">Terms and Conditions</GeneralMdText>
                                            <SettingsCardListImg src={caretRightIcon} />
                                        </GeneralFlexRow>
                                    </SettingsCardList>

                                    <SettingsCardList>
                                        <GeneralFlexRow margin="5px 0">
                                            <GeneralMdText fontSize="16px" lineHeight="24px" color="var(--white)" textTransform="unset" fontWeight="600">FAQs</GeneralMdText>
                                            <SettingsCardListImg src={caretRightIcon} />
                                        </GeneralFlexRow>
                                    </SettingsCardList>

                                    <SettingsCardList>
                                        <GeneralFlexRow margin="5px 0">
                                            <GeneralMdText fontSize="16px" lineHeight="24px" color="var(--white)" textTransform="unset" fontWeight="600">Contact Us</GeneralMdText>
                                            <SettingsCardListImg src={caretRightIcon} />
                                        </GeneralFlexRow>
                                    </SettingsCardList>
                                </ContentFullColumn>
                            </ContentRow>
                        </SettingsCard>
                    </SiteContainer>
                </SettingsSection>



            </DashboardLayout>
        </>
    )
}

export default Settings