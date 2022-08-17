import styled from "styled-components";
// import {Link} from "react-router-dom";
import {  NavLink } from 'react-router-dom';

export const MainContainer = styled.div`
background: var(--primary);
padding: 0 !important;
margin-right: auto;
margin-left: auto;
display: flex;
flex-direction: column;
min-height: 100vh;
// justify-content: center;
`;

export const Menu = styled.nav`
  background: var(--primary);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: background-color 0.3s ease-in;
  top: 0;
  position: sticky;
  z-index: 1020;
`;

export const MenuContainer = styled.div`
width: min(100%, 85rem);
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const NavLogo = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  z-index: 50;
`;

export const NavMenuWrapper = styled.div`
display: flex;
flex-basis: auto;
flex-grow: 1;
align-items: center;
`;

export const NavMenuUl = styled.ul`
flex-direction: row;
margin-left: auto !important;
display: flex;
padding-left: 0;
list-style: none;
margin-bottom: 15px;
`;


export const MenuNavLi = styled.li`
display: inline-block;
line-height: 40px;
margin-right: 20px;
animation: FadeIn 1s cubic-bezier(.65,.05,.36,1);
animation-fill-mode: both;
margin-top: 15px;

&:last-child {
    margin-right: 0;
}
`;

export const MenuNavHref = styled(NavLink)`
color: var(--white);
font-weight: 400;
font-size: 15px;
line-height: 19px;
color: #F7F7F7;
text-decoration: none;
`;


export const NavIcon = styled.img`
  margin-right: 1rem;
  width: 40px;
  margin-top: 2rem;
  height: 50px;
`;

export const NavLanguage = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.35rem;
`;

export const NavLanguageText = styled.p`
color: var(--white);
font-weight: 400;
font-size: 16px;
line-height: 19px;
  margin: 5px;
`;

export const NavLanguageIcon = styled.span`
  margin-left: 0.2rem;
`;

export const NavNightMood = styled.span`
  margin-left: 1rem;
`;

export const NavLanguageDropdownIcon = styled.span`
  margin-left: 0.2rem;
`;


// Dashboard Layout 
export const DashboardContainer = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: var(--primary);
`;

export const DashboardContent = styled.main`
display: flex;
justify-content: flex-start;
flex-direction: row;
`;

export const DashboardLTRContent = styled.div`
flex: 0 0 18%;
max-width: 18%;
border-right: 1px solid #667D86;
height: 100vh;
min-height: 100vh;
max-height: 100vh;
// alt
position: sticky;
display: flex;
flex-direction: column;
flex: 1 0 auto;
top: 0;
`;

export const SidebarContainer = styled.div`
position: absolute;
display: flex;
flex: 1 1 auto;
flex-direction: column;
top: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;
z-index: 10;
background: inherit;
left: 0;
`;

export const SidebarHeader = styled.div`
display: flex;
align-items: center;
width: 100%;
padding: 0.5rem 1rem;
height: 70px;
border-bottom: 1px solid #667D86;
`;

export const SidebarHeaderLogo = styled.img`
height: 80px;
width: 100%;
`;

export const SidebarNav = styled.div`
flex: 1 1 auto;
overscroll-behavior: contain;
overflow-x: hidden;
overflow-y: auto;
position: relative;
touch-action: auto;
overflow-anchor: none;
padding: 0.6rem 0;
`;

export const SidebarNavGroup = styled.div`
padding: 1rem 0 0 1rem;
`;

export const SidebarNavGroupList = styled.div`
display: flex;
flex-direction: column;
`;

export const SidebarNavLink = styled(NavLink)`
margin: 0.2rem 0;
font-weight: 700;
font-size: 14px;
line-height: 25px;
display: flex;
color: var(--dashboard-nav-color);
flex-direction: row;
text-decoration: none;

&.active {
  color: var(--white);
background: var(--orange);
padding: 10px 0;
border-radius: 4px 0px 0px 4px;
font-weight: 800 !important;
}
`;

export const SidebarNavInactiveLink = styled.div`
margin: 0.55rem 0;
font-weight: 700;
font-size: 14px;
line-height: 25px;
display: flex;
color: var(--dashboard-nav-color);
flex-direction: row;
text-decoration: none;

&.active {
  color: var(--white);
background: var(--orange);
padding: 10px 0;
border-radius: 4px 0px 0px 4px;
font-weight: 800 !important;
}
`;

export const SidebarSubNav = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: flex-start;
padding: 0 3rem;
`;

export const SidebarSubNavLink = styled(NavLink)`
margin: 0.4rem 0;
font-weight: 400;
font-size: 14px;
line-height: 21px;
display: flex;
color: var(--dashboard-nav-color);
flex-direction: row;
text-align: center;
text-decoration: none;

&.active {
  color: var(--orange);
border-radius: 4px 0px 0px 4px;
font-weight: 800 !important;
}
`;


export const SidebarNavLinkLogo = styled.img`
height: 24px;
width: 24px;
margin:0 10px;
`;

export const SidebarFooter = styled.div`
display: flex;
flex-direction: column;
padding: 0.5rem 0;
`;

export const DashboardRTLContent = styled.div`
flex: 0 0 82%;
max-width: 82%;
height: 100%;
`;

export const MainContentHeader = styled.div`
display: flex;
width: 100%;
padding: 0.3rem 1.5rem;
height: 70px;
border-bottom: 1px solid #667D86;
flex-direction: row;
justify-content: space-between;
`;

export const ProfileNav = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
flex: 0 0 50%;
max-width: 50%;
`;

export const ProfilePhoto = styled.img`
height: 40px;
margin: 0.5rem 0;
margin-right: 10px;
`;
