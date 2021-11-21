import styled from "styled-components"
import { SectionMargin,BackgroundGradient,TextGradient } from "../../GlobalStyle"
export const WhatGptContainer = styled.section`
 display:flex;
 flex-direction:column;
 padding:2rem;
 filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
 ${BackgroundGradient};
 ${SectionMargin}
`
export const Possibility = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin:2rem 0 2rem 0;
@media screen and (max-width:768px){
   flex-direction :column ;
}
`
export const PossibilityTitle = styled.h1`
font-family: Manrope;
font-style: normal;
font-weight: 800;
font-size: 34px;
line-height: 45px;
${TextGradient};
`
export const PossibilityText = styled.p`
font-family: Manrope;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 30px;
color: #FF8A71;
`
export const ColumnGroup= styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
gap:2rem;

`
