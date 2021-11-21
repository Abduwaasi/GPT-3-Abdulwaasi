import styled from "styled-components"
import { SectionMargin } from "../../GlobalStyle";

export const CtaContainer= styled.section`
${SectionMargin};
padding:1rem;
margin-top: 4rem;
margin-bottom: 4rem;
border-radius:5px;
display:flex;
justify-content: space-between;
align-items: center;
background:var(--gradient-bar);
@media screen and (max-width:768px){
    flex-direction: column;
    margin-top: 3rem;
}

`
export const CtaContent= styled.div`
flex:1;
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

@media screen and (max-width){
    margin-bottom: 2rem;
}
`
export const SmallText= styled.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 12px;
line-height: 30px;
color: #0E0E0E;
`
export const BigText= styled.h4`
font-family: var(--font-family);
font-weight: 800;
font-size: 20px;
line-height: 45px;
color: #000000;

@media screen and (max-width:768px){
    font-size: 18px;
    line-height: 25px;
    margin-bottom:2rem;  
}
`
export const CtaButtonContainer = styled.div`
 flex-basis:0.3;
`
export const CtaButton= styled.button`
background: #000000;
border-radius: 40px;
font-family: Manrope;
font-weight: bold;
font-size: 14px;
line-height: 30px;
color: #FFFFFF;
padding:0.2rem 2rem;
border:none;
outline: none;
cursor:pointer;

`