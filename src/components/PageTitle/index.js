import React from 'react'
import styled from 'styled-components';
import { GeneralMdText, GeneralSmText } from '../../assets/styles/GlobalStyles';


export const PageTitles = styled.div`
padding: 1rem 0;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const PageTitleLTR = styled.div`
flex: 0 0 75%
max-width: 75%;
`;

export const PageTitleRTL = styled.div`
flex: 0 0 25%
max-width: 25%;
`;

export const PageDatePicker = styled.div`
padding: 0.8rem 1.6rem;
background: var(--secondary-2);
border-radius: 4px;
margin: 10px 0;
`;

const PageTitle = ({ typeUrl, title, date, login }) => {
    return (
        <>
            {typeUrl === 'dashboard' ? (
                <PageTitles>
                    <PageTitleLTR>
                        <GeneralMdText fontSize="24px" fontWeight="700" lineHeight="29.23px" textTransform="unset" color="var(--white)" textAlign="left" margin="10px 0 5px" padding="0">{title}</GeneralMdText>
                        <GeneralSmText fontSize="15px" fontWeight="400" lineHeight="19px" textTransform="unset" color="var(--gray-4)" textAlign="left" margin="0" padding="0">{login}</GeneralSmText>
                    </PageTitleLTR>
                    <PageTitleRTL>
                        <PageDatePicker>
                            <GeneralSmText fontSize="15px" fontWeight="400" lineHeight="19px" textTransform="unset" color="var(--gray-4)" textAlign="left" margin="0" padding="0">{date}</GeneralSmText>
                        </PageDatePicker>
                    </PageTitleRTL>
                </PageTitles>
            ) : (
                <PageTitles>
                    <PageTitleLTR>
                        <GeneralMdText fontSize="24px" fontWeight="700" lineHeight="29.23px" textTransform="unset" color="var(--white)" textAlign="left" margin="10px 0 5px" padding="0">{title}</GeneralMdText>
                    </PageTitleLTR>
                    <PageTitleRTL>
                        <PageDatePicker>
                            <GeneralSmText fontSize="15px" fontWeight="400" lineHeight="19px" textTransform="unset" color="var(--gray-4)" textAlign="left" margin="0" padding="0">{date}</GeneralSmText>
                        </PageDatePicker>
                    </PageTitleRTL>
                </PageTitles>
            )}
        </>
    )
}

export default PageTitle