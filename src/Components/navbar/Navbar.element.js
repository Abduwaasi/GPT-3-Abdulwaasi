import styled from "styled-components"
import {Container,BackgroundGradient,ScaleUp} from "../../GlobalStyle"
export const NavContainer = styled.nav`
max-width:1200px;
/* padding:2rem 6rem; */
height: 58px;
display:flex;
justify-content: space-between;
align-items:center;
${Container};
${BackgroundGradient};

`
export const NavLeft = styled.div`
 justify-self: flex-start;
 flex:1;
 display:flex;
 align-items:center;
`
export const NavLogoLink = styled.a`
 color:#fff;
 margin-right:2rem;

`
export const NavLogo = styled.img`
 width: 4rem;
 height:1rem;
`
export const NavMenu = styled.ul`
 display:flex;
 @media screen and (max-width:900px){
    display:none;
}
 
`
export const NavItem = styled.li`
 color:#fff;
 margin-right: 1rem;
`
export const NavLink = styled.a`
color:#fff;
font-family: Manrope;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 25px;
`
export const NavButtonContainer = styled.div`
justify-self:flex-end;
display:flex;
@media screen and (max-width:768px){
    display:none;
}

div{
    margin-right:1rem;
}

`

export const MenuIcon = styled.div`
display: none;
@media screen and (max-width:900px){
    display:block;
    padding-left:1rem;
}
`

export const MobileMenu = styled.div`
display:flex;
justify-content: flex-start;
text-align:left;
flex-direction:column;
position:absolute;
padding:2rem;
top:6rem;
left:3rem;
min-width:250px;
border-radius:10px;
box-shadow:0px 0px 5px rgba(0,0, 0,0.2);
${ BackgroundGradient};
animation: ${ScaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;;
`

