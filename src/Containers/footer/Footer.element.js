import styled from "styled-components"
import { Container, TextGradient } from "../../GlobalStyle"
export const FooterCenter = styled.section`
display:flex;
flex-direction: column;
background: var(--color-footer);
${Container};
`
export const FooterContent = styled.div`
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`
export const H1 = styled.h1`
font-family: var(--font-family);
font-style: normal;
font-weight: 800;
font-size: 48px;
line-height: 75px;
text-align: center;
letter-spacing: -0.04em;
max-width:90%;
margin:2rem auto;
cursor:pointer;
${TextGradient};
@media screen and (max-width:760px){
    font-size: 32px;
    line-height: 40px;
}
@media screen and (max-width:550px){
    font-size: 24px;
    line-height: 30px;
}
`
export const FooterButton = styled.button`
border: 1px solid #FFFFFF;
box-sizing: border-box;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
background: #031B34;
padding:0.3rem 1rem;
outline:none;
margin-bottom: 3rem;
`
export const FooterLinks = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;

`
export const FooterLinkLogo = styled.div`
flex-basis: 250px;
margin-right:3rem;
img{
    width: 100px;
    height: 30px;
}
p{
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    max-width: 200px;
}
`
export const FooterLinkItems = styled.div`
flex-basis: 200px;
display: flex;
flex-direction: column;

h4{
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    font-weight:800;
}
p{
    font-size: 12px;
    line-height: 30px;
    color: #FFFFFF;
    cursor: pointer;
    
}
@media screen and (max-width:760px){
    padding-top: 2rem;
}

`
export const CopyRight = styled.p`
display:flex;
justify-content: center;
align-items: center;
margin-top: 2rem;
padding-bottom: 2rem;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
`
