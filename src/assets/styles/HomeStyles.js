import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { chartPlaceholder } from '../images/images';

export const HomeSection = styled.section`
padding: 3rem 0;
display: flex;
justify-content: center;
align-items: center;
`;

export const ContentContainer = styled.div`
width: min(100%, 48rem);
display: flex;
justify-content: center;
flex-direction: column;
`;

export const HeroBannerTop = styled.div`
margin: 2rem 0;
position: relative;
display: flex;
justify-content: center;
flex-direction: column;
`;

export const HeroBannerCta = styled.a`
text-align: center;
padding: 1rem 6rem;
background: var(--orange);
text-decoration: none;
color: var(--white);
margin: 10px auto;
border-radius: 4px;
`;

export const InternalCta = styled(Link)`
text-align: center;
color: var(--white);
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-decoration: none;
margin: 10px 0;
`;

export const ThemedText = styled.a`
color: var(--orange);
font-weight: 600;
`;

export const HeroImgContainer = styled.div`
background-image: url("${chartPlaceholder}");
background-repeat: no-repeat;
background-position: 50%;
background-size: contain;
height: 285px;
`;

export const SummaryContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const SummaryIcon = styled.img`
width: 80px;
height: 80px;
margin: auto;
`;

export const SummaryCtaBtn = styled(Link)`
text-align: center;
padding: 1rem 6rem;
background: var(--orange);
color: var(--white);
margin: 20px auto 10px;
border-radius: 4px;
font-weight: 600;
`;
