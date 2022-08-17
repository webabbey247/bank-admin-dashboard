import React from 'react';
import { DashboardRTLContent, MainContentHeader, ProfileNav, ProfilePhoto } from '../../assets/styles/LayoutStyles';
import { GeneralMdText } from '../../assets/styles/GlobalStyles';
import { profilePhoto } from '../../assets/images/images';



const MainContent = ({ children }) => {
  return (
    <DashboardRTLContent>
      <MainContentHeader>
        <GeneralMdText fontSize="20px" lineHeight="30px" color="var(--white)" fontWeight="700" margin="0.8rem 0" textTransform="unset">Welcome Adedamola,</GeneralMdText>
        <ProfileNav>
          <ProfilePhoto src={profilePhoto} alt='Adedamola Alausa' />
        </ProfileNav>
      </MainContentHeader>
      {children}
    </DashboardRTLContent>
  )
}

export default MainContent;