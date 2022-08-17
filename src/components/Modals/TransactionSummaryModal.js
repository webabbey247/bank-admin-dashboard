import React from 'react';
import styled from 'styled-components';
import { CustomButton, CustomDiv, GeneralMdText, GeneralSmText } from '../../assets/styles/GlobalStyles';
import { debitIcon, creditIcon, modalCloseIcon } from '../../assets/images/images';


export const TransactionModalContainer = styled.div`
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
padding: 1.5rem 0;
flex-direction: column;
// z-index: 1001;
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

export const TransactionTopInfo = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

export const TransactionIconHolder = styled.div`
padding:  0.6rem 2rem;
background: var(--secondary-2);
display: flex;
flex-direction: row;
border-radius: 8px;
`;

export const TransactionIcon = styled.img`
width: 25px;
height: 25px;
margin-right: 10px;
`;


export const TransactionInfo = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-bottom: 2rem;
`;

export const TransactionInfoGroup = styled.div`
display: flex;
flex-direction: column;
border-bottom: 0.05px solid #F7F7F7;
padding: 12px 0;

`;

export const TransactionBottomButton = styled.div`
display: flex;
flex-direction: row;
`;

const TransactionSummaryModal = ({ transactionType, close }) => {
    return (
        <>
            <TransactionModalContainer>
                <TransactionModalBody>
                    <TransactionModal>
                        <TransactionModalContent>
                            <ModalClose onClick={(close)}>
                                <ModalIcon src={modalCloseIcon} alt="close modal" />
                            </ModalClose>
                            <TransactionTopInfo>
                                <TransactionIconHolder>
                                    {transactionType === "debit" ? <TransactionIcon src={debitIcon} alt="Debit" />
                                        : <TransactionIcon src={creditIcon} alt="Credit" />
                                    }
                                    <GeneralMdText margin="5px 0" fontSize="16px" lineHeight="19.49px" color="var(--white)" fontWeight="600" textTransform="unset">Transfer</GeneralMdText>
                                </TransactionIconHolder>
                                <GeneralMdText fontSize="14px" lineHeight="17.05px" color="var(--gray-2)" fontWeight="600" textAlign="center" textTransform="unset" margin="1rem 0">On July 26 at 14.46 PM</GeneralMdText>
                            </TransactionTopInfo>
                            <TransactionInfo>
                                <TransactionInfoGroup>
                                    <GeneralMdText fontWeight="600" color="var(--white)" fontSize="24px" lineHeight="29px" textAlign="left" margin="10px 0" textTransform="unset">N2,000.00</GeneralMdText>
                                    <GeneralMdText fontWeight="600" color="var(--white)" fontSize="16px" lineHeight="19.49px" textAlign="left" margin="" textTransform="unset">Yemi Salem</GeneralMdText>
                                </TransactionInfoGroup>

                                <TransactionInfoGroup>
                                    <GeneralMdText fontWeight="600" color="var(--gray-2)" fontSize="14px" lineHeight="19.49px" textAlign="left" textTransform="unset" margin="10px 0">To</GeneralMdText>
                                    <GeneralMdText fontWeight="600" color="var(--white)" fontSize="16px" lineHeight="19.49px" textAlign="left" margin="" textTransform="unset">First Bank</GeneralMdText>
                                </TransactionInfoGroup>

                                <TransactionInfoGroup>
                                    <GeneralMdText fontWeight="600" color="var(--gray-2)" fontSize="14px" lineHeight="19.49px" textAlign="left" textTransform="unset" margin="10px 0">Description</GeneralMdText>
                                    <GeneralMdText fontWeight="600" color="var(--white)" fontSize="16px" lineHeight="19.49px" textAlign="left" margin="" textTransform="unset">Buy food stuff</GeneralMdText>
                                </TransactionInfoGroup>

                                <TransactionInfoGroup>
                                    <GeneralMdText fontWeight="600" color="var(--gray-2)" fontSize="14px" lineHeight="19.49px" textAlign="left" textTransform="unset" margin="10px 0">Transaction ID</GeneralMdText>
                                    <GeneralMdText fontWeight="600" color="var(--white)" fontSize="16px" lineHeight="19.49px" textAlign="left" margin="" textTransform="unset">100002023244</GeneralMdText>
                                </TransactionInfoGroup>

                                <TransactionInfoGroup>
                                    <GeneralMdText fontWeight="600" color="var(--gray-2)" fontSize="14px" lineHeight="19.49px" textAlign="left" textTransform="unset" margin="10px 0">Charge</GeneralMdText>
                                    <GeneralMdText fontWeight="600" color="var(--white)" fontSize="16px" lineHeight="19.49px" textAlign="left" margin="" textTransform="unset">N50.00</GeneralMdText>
                                </TransactionInfoGroup>
                            </TransactionInfo>
                            <TransactionBottomButton>
                                <CustomButton fontWeight="600" background="var(--orange)" fontSize="16px" lineHeight="24.63px" color="var(--white)" border="1px solid var(--orange)" textTransform="unset" margin="0 10px 0 0">Share</CustomButton>
                                <CustomButton fontWeight="600" background="var(--orange)" fontSize="16px" lineHeight="24.63px" color="var(--white)" border="1px solid var(--orange)" textTransform="unset" margin="0 0 0 10px">Download</CustomButton>
                            </TransactionBottomButton>
                        </TransactionModalContent>
                    </TransactionModal>
                </TransactionModalBody>
            </TransactionModalContainer>

        </>
    )
}

export default TransactionSummaryModal