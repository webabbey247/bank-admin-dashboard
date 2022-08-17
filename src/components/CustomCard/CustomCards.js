import React from 'react'
import styled from 'styled-components'
import { GeneralFlexRow, GeneralMdText, GeneralSmText } from '../../assets/styles/GlobalStyles';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

export const CustomCard = styled.div`
height: 128px;
background: var(--secondary-2);
box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.13);
border-radius: 8px;
padding: 1rem 1rem;
margin: 10px 0;
`;

export const CustomCardBadge = styled.span`
padding: 8px 12px;
background: #123D4A;
border-radius: 4px;
font-weight: 400;
font-size: 10px;
line-height: 10px;
color: var(--success);
margin-left: 10px;

&:first-child {
    margin-left: 0;
    color: var(--text-inactive);

}
`;

export const RateIndex = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
margin: auto;

& > svg {
    color: var(--success);
}

& > svg:first-child {
    color: blue;
}
`;


const CustomCards = ({ typeUrl, title, amount, active, inactive, rate }) => {
    return (
        <>
                {typeUrl === 'top' && (
                    <CustomCard>
                        <GeneralSmText fontSize="12px" fontWeight="400" lineHeight="20px" textTransform="unset" color="var(--white)" textAlign="left" margin="0" padding="0">{title}</GeneralSmText>
                        <GeneralFlexRow margin="0" justifyContent="space-between">
                        <GeneralMdText fontSize="32px" fontWeight="700" lineHeight="32px" textTransform="unset" color="var(--white)" textAlign="left" margin="9px 0" padding="0">{amount}</GeneralMdText>
                        <RateIndex>
                        <GeneralSmText fontSize="12px" fontWeight="400" lineHeight="10px" textTransform="unset" color="var(--white)" textAlign="right" margin="6px 5px 0 0" padding="0">{rate}%</GeneralSmText>
                        <FiArrowUp size="20" />
                        <FiArrowDown color="var(--debit-color)" size="20" />
                        </RateIndex>
                        </GeneralFlexRow>

                        <GeneralFlexRow margin="0" justifyContent="flex-start">
                        <CustomCardBadge>105 Inactive</CustomCardBadge>
                        <CustomCardBadge>249 Active</CustomCardBadge>
                        </GeneralFlexRow>
                    </CustomCard>
                )}

                {typeUrl === 'bottom' && (
                    <CustomCard>
                        <GeneralSmText fontSize="15px" fontWeight="400" lineHeight="19px" textTransform="unset" color="var(--white)" textAlign="left" margin="0" padding="0">{title}</GeneralSmText>
                        <GeneralMdText fontSize="24px" fontWeight="700" lineHeight="29.23px" textTransform="unset" color="var(--tint-green)" textAlign="left" margin="15px 0" padding="0">{amount}</GeneralMdText>
                        <GeneralSmText fontSize="15px" fontWeight="400" lineHeight="19px" textTransform="unset" color="var(--white)" textAlign="left" margin="0" padding="0">+{rate}%</GeneralSmText>
                    </CustomCard>
                )}
        </>
    )
}

export default CustomCards