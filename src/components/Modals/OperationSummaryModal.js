import React from 'react';
import styled from 'styled-components';
import { CustomButton, CustomDiv, GeneralMdText, GeneralSmText } from '../../assets/styles/GlobalStyles';
import { successIcon, modalCloseIcon } from '../../assets/images/images';


export const ModalContainer = styled.div`
background: rgba(0, 0, 0, 0.75) none repeat scroll 0% 0%;
position: fixed;
inset: 0px;
overflow: hidden;
`;

export const TransactionModalBody = styled.div`
background: var(--primary);
border-radius: 0.5em;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
left: 50%;
right: 50%;
position: absolute;
top: 50%;
transform: translate(-50%, -50%);
width: 40vw;
display: flex;
align-item: center;
flex-direction: column;
`;

export const TransactionModal = styled.div`
display: flex;
justify-content: center;
align-items:center;
padding: 1.5rem 0 3rem;
flex-direction: column;
`;

export const ModalClose = styled.div`
align-items: center;
display: flex;
height: 40px;
justify-content: center;
position: absolute;
right: 5%;
top: 5%;
width: 40px;
border-radius: 50%;
background: rgba(255,196,158, 0.4);
z-index: 1026;

&:hover {
    background: var(--orange);
}
`;

export const ModalIcon = styled.img`
height: 25px;
width: 25px;
`;


// export const TransactionModalTitle = styled.div`
// color: #111827;
// padding: 1.5em 2em;
// pointer-events: all;
// position: relative;
// width: calc(100% - 4.5em);
// `;

export const TransactionModalContent = styled.div`
width:min(100%,30rem);
`;

export const ModalTopInfo = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 2rem 0;
`;

export const ModalTopChildren = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 0 2rem;
`;

export const TransactionIconHolder = styled.div`
padding:  0.6rem 2rem;
background: var(--secondary-2);
display: flex;
flex-direction: row;
border-radius: 8px;
`;

export const TransactionIcon = styled.img`
width: 80px;
height: 80px;
`;


export const TransactionInfo = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-bottom: 2rem;
background: var(--secondary-2);
padding: 2rem;
border-radius: 8px;
margin-left: 3rem;
margin-right: 3rem;
`;

export const TransactionInfoGroup = styled.div`
display: flex;
flex-direction: column;
border-bottom: 0.05px solid #F7F7F7;
padding: 12px 0;
`;

export const OperationsInfoGroup = styled.div`
display: flex;
flex-direction: row;
padding: 12px 0;
`;

export const ModalBottomButton = styled.div`
display: flex;
flex-direction: row;
margin: auto 3rem;
`;

export const ThemeText = styled.span`
color: var(--orange);
`;



const OperationSummaryModal = ({ typeUrl, close }) => {
    return (
        <>
            <ModalContainer>
                <TransactionModalBody>
                    <TransactionModal>
                        <TransactionModalContent>
                        <ModalClose onClick={(close)}>
                                <ModalIcon src={modalCloseIcon} alt="close modal" />
                            </ModalClose>

                            {typeUrl === 'loans' && (
                                <ModalTopInfo>
                                    <TransactionIcon src={successIcon} alt="Success" />
                                    <GeneralMdText textAlign="center" margin="10px 0" fontSize="24px" lineHeight="29.23px" color="var(--white)" fontWeight="600" textTransform="unset">Success</GeneralMdText>

                                    <ModalTopChildren>
                                        <GeneralMdText fontSize="14px" lineHeight="19.05px" color="var(--gray-2)" fontWeight="600" textAlign="center" textTransform="unset" margin="10px 0">A loan of N1,500,000.00 has be granted to your
                                            account and willl be decuted automatically at the end
                                            of each intalmment month.</GeneralMdText>
                                    </ModalTopChildren>
                                </ModalTopInfo>
                            )}


                            {typeUrl === 'utility' && (
                                <ModalTopInfo>
                                    <TransactionIcon src={successIcon} alt="Success" />
                                    <GeneralMdText textAlign="center" margin="10px 0" fontSize="24px" lineHeight="29.23px" color="var(--white)" fontWeight="600" textTransform="unset">Success</GeneralMdText>

                                    <ModalTopChildren>
                                        <GeneralMdText fontSize="14px" lineHeight="19.05px" color="var(--gray-2)" fontWeight="600" textAlign="center" textTransform="unset" margin="10px 0">You have subscribed for the GoTV Jumbo plan</GeneralMdText>
                                    </ModalTopChildren>
                                </ModalTopInfo>
                            )}


                            {typeUrl === 'topup' && (
                                <ModalTopInfo>
                                    <TransactionIcon src={successIcon} alt="Success" />
                                    <GeneralMdText textAlign="center" margin="10px 0" fontSize="24px" lineHeight="29.23px" color="var(--white)" fontWeight="600" textTransform="unset">Success</GeneralMdText>

                                    <ModalTopChildren>
                                        <GeneralMdText fontSize="14px" lineHeight="19.05px" color="var(--gray-2)" fontWeight="600" textAlign="center" textTransform="unset" margin="10px 0">The Top-up of <ThemeText> N500</ThemeText> was successfully transfered to <ThemeText> 07067276819</ThemeText></GeneralMdText>
                                        <GeneralMdText fontSize="14px" lineHeight="17.05px" color="var(--gray-2)" fontWeight="600" textAlign="center" textTransform="unset">TXN ID: 11004535646868</GeneralMdText>
                                    </ModalTopChildren>
                                </ModalTopInfo>
                            )}

                            {typeUrl === 'transfer' && (
                                <>
                                    <ModalTopInfo>
                                        <TransactionIcon src={successIcon} alt="Success" />
                                        <GeneralMdText textAlign="center" margin="10px 0" fontSize="24px" lineHeight="29.23px" color="var(--white)" fontWeight="600" textTransform="unset">Success</GeneralMdText>
                                        <GeneralMdText fontSize="14px" lineHeight="17.05px" color="var(--gray-2)" fontWeight="400" textAlign="center" textTransform="unset">Your transaction is successfull</GeneralMdText>
                                    </ModalTopInfo>
                                    <TransactionInfo>
                                        <OperationsInfoGroup>
                                            <GeneralMdText fontWeight="600" color="var(--gray-2)" fontSize="14px" lineHeight="19.49px" textAlign="center" textTransform="unset">Transaction details</GeneralMdText>
                                        </OperationsInfoGroup>

                                        <OperationsInfoGroup>
                                            <GeneralMdText fontWeight="400" color="var(--gray-2)" fontSize="14px" lineHeight="19.49px" textAlign="left" textTransform="unset">Amount</GeneralMdText>
                                            <GeneralMdText fontWeight="600" color="var(--white)" fontSize="16px" lineHeight="19.49px" textAlign="right" margin="" textTransform="unset">N2,000.00</GeneralMdText>
                                        </OperationsInfoGroup>

                                        <OperationsInfoGroup>
                                            <GeneralMdText fontWeight="400" color="var(--gray-2)" fontSize="14px" lineHeight="19.49px" textAlign="left" textTransform="unset">Beneficiary</GeneralMdText>
                                            <GeneralMdText fontWeight="600" color="var(--white)" fontSize="16px" lineHeight="19.49px" textAlign="right" margin="" textTransform="unset">Yemi Salem</GeneralMdText>
                                        </OperationsInfoGroup>

                                        <OperationsInfoGroup>
                                            <GeneralMdText fontWeight="400" color="var(--gray-2)" fontSize="14px" lineHeight="19.49px" textAlign="left" textTransform="unset">From</GeneralMdText>
                                            <GeneralMdText fontWeight="600" color="var(--white)" fontSize="16px" lineHeight="19.49px" textAlign="right" margin="" textTransform="unset">Adedamola Alausa</GeneralMdText>
                                        </OperationsInfoGroup>

                                        <OperationsInfoGroup>
                                            <GeneralMdText fontWeight="400" color="var(--gray-2)" fontSize="14px" lineHeight="19.49px" textAlign="left" textTransform="unset">Date</GeneralMdText>
                                            <GeneralMdText fontWeight="600" color="var(--white)" fontSize="16px" lineHeight="19.49px" textAlign="right" margin="" textTransform="unset">24 July 2022, 13:05</GeneralMdText>
                                        </OperationsInfoGroup>
                                    </TransactionInfo>
                                    <ModalBottomButton>
                                        <CustomButton fontWeight="600" background="var(--orange)" fontSize="16px" lineHeight="24.63px" color="var(--white)" border="1px solid var(--orange)" textTransform="unset" margin="0">Download Receipt</CustomButton>
                                    </ModalBottomButton>
                                </>
                            )}
                        </TransactionModalContent>
                    </TransactionModal>
                </TransactionModalBody>
            </ModalContainer>
        </>
    )
}

export default OperationSummaryModal