import React from 'react'
import styled from 'styled-components'
import DashboardLayout from '../../../components/Layouts/DashboardLayout'
import PageTitle from '../../../components/PageTitle'
import { ContentRow, ContentFullColumn, GeneralFlexColumn, GeneralFlexRow } from '../../../assets/styles/GlobalStyles'
import { FormOperation, FormWrapper, FormOperationsContainer, Input, InputGroup } from '../../../assets/styles/FormStyles'

export const ToggleDeposit = styled.div`
background: var(--primary);
padding: 0.5rem 0.4rem;
border-radius: 100px;
display: flex;
flex-direction: row;
justify-content: space-around;
`;

export const ToggleDepositTab = styled.div`
background: transparent none repeat scroll 0% 0%;
text-align: center;
color: var(--gray);
font-size: 14px;
font-weight: 600;
line-height: 17px;
padding: 0.8rem 2rem;


&.active {
    background: var(--orange);
    padding: 0.8rem 3.5rem;
    border-radius: 100px;
    color: var(--white);
  }
}
`;

const Deposit = () => {
  return (
    <DashboardLayout>
    <ContentRow>
        <ContentFullColumn>
            <PageTitle title="Deposit" date="24th April, 2022 08:43am" login="" />
        </ContentFullColumn>
    </ContentRow>

    <ContentRow>
        <ContentFullColumn>
            <FormOperation>
            <FormOperationsContainer>
                <ToggleDeposit>
                    <ToggleDepositTab className='active'>In-Bank Deposit</ToggleDepositTab>
                    <ToggleDepositTab>Tokenized Deposit</ToggleDepositTab>
                </ToggleDeposit>

                <GeneralFlexColumn>
                    <InputGroup>
                    <Input type="text" placeholder="Account Number" />
                    </InputGroup>

                    <InputGroup>
                    <Input type="text" placeholder="Account Name" readOnly />
                    </InputGroup>

                   <GeneralFlexRow justifyContent="space-between">
                   <InputGroup style={{
                    marginTop: 0,
                   }}>
                    <Input type="text" placeholder="Amount" />
                    </InputGroup>

                    <InputGroup>
                    <Input type="text" placeholder="Teller Number" />
                    </InputGroup>
                   </GeneralFlexRow>

                    <InputGroup>
                    <Input type="text" placeholder="Depositor" />
                    </InputGroup>

                    <InputGroup>
                    <Input type="text" placeholder="Description (Optional)" />
                    </InputGroup>
                </GeneralFlexColumn>
            </FormOperationsContainer>
            </FormOperation>
        </ContentFullColumn>
    </ContentRow>
</DashboardLayout>
  )
}

export default Deposit