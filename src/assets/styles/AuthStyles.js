import styled from "styled-components";

export const AuthSection = styled.section`
padding: 3rem 0;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

export const AuthContainer = styled.div`
width: min(100%, 40rem);
display: flex;
justify-content: center;
flex-direction: column;
`;

export const AuthLogoContainter = styled.div`
margin: 3rem 0 1rem;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`;

export const AuthLogo = styled.img`
width: 60px;
height: 80px;
`;

export const ResendCode = styled.span`
padding: 0.5rem 0.8rem;
font-size: 12px;
line-height: 15px;
color: var(--gray-color);
background: rgba(228,111,36, 0.18);
border-radius: 4px;
`;