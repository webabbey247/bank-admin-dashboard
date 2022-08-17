import React from 'react'
import { MainContainer } from '../../assets/styles/LayoutStyles';


const AuthLayout = ({children}) => {
  return (
    <>
      <MainContainer>
        {children}
      </MainContainer>
    </>
  )
}

export default AuthLayout;