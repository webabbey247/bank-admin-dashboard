import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/Layouts/AuthLayout';
import { ContentFullColumn, ContentRow, GeneralMdText, CustomButton } from '../../assets/styles/GlobalStyles';
import { AuthSection, AuthContainer, AuthLogoContainter, AuthLogo, ResendCode } from '../../assets/styles/AuthStyles';
import { AuthForm, FormWrapper, Input, InputIcon } from '../../assets/styles/FormStyles';
import { bankLogo } from '../../assets/images/images';
import { FiEye, FiEyeOff } from 'react-icons/fi';


const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showOTPForm, setShowOTPForm] = useState(false);

    const navigateTo = () => {
        setTimeout(() => {
            navigate("/dashboard");
        }, 1000);
    }

    return (
        <AuthLayout>
            <AuthSection>
                <AuthContainer>
                    <AuthLogoContainter>
                        <AuthLogo src={bankLogo} alt="Bank One" />
                    </AuthLogoContainter>

                    <GeneralMdText fontWeight="600" margin="1rem 0" textTransform="unset" color="var(--orange)" fontSize="35px" lineHeight="48.72px" textAlign="center">Admin Login</GeneralMdText>

                    <AuthForm>
                        <FormWrapper>
                            <ContentRow>

                                {showOTPForm ? (
                                    <ContentFullColumn>
                                        <Input
                                            className=""
                                            type='text'
                                            placeholder='Email'
                                        />
                                        <InputIcon top="10%" right="5%">
                                            <ResendCode>Resend code</ResendCode>
                                        </InputIcon>
                                    </ContentFullColumn>
                                ) : (
                                    <>
                                        <ContentFullColumn>
                                            <Input
                                                className=""
                                                type='text'
                                                placeholder='Email'
                                            />
                                        </ContentFullColumn>

                                        <ContentFullColumn>
                                            <Input
                                                className=""
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder='Password'
                                            />
                                            <InputIcon right="5%" top="10%" onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <FiEye size="20" color="var(--orange)" /> : <FiEyeOff size="20" color="var(--orange)" />}
                                            </InputIcon>
                                        </ContentFullColumn>
                                    </>
                                )}

                                <ContentFullColumn>
                                    {showOTPForm ? (
                                        <CustomButton onClick={navigateTo} fontWeight="700" type="button" color="var(--white)" background="var(--orange)" border="1px solid var(--orange)" margin="10px 0">
                                            Continue
                                        </CustomButton>
                                    ) : (
                                        <CustomButton onClick={() => setShowOTPForm(true)} fontWeight="700" type="button" color="var(--white)" background="var(--orange)" border="1px solid var(--orange)" margin="10px 0">
                                            Login
                                        </CustomButton>
                                    )}
                                </ContentFullColumn>
                            </ContentRow>
                        </FormWrapper>
                    </AuthForm>
                </AuthContainer>
            </AuthSection>
        </AuthLayout >
    )
}

export default Login;