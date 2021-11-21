import styled from "styled-components"
import { Container, TextGradient } from "../../GlobalStyle"
export const PossibilityCenter = styled.section`
display:flex;
flex-direction: row;
justify-content: flex-start;
align-items:flex-end;
${Container}

@media screen and (max-width:768px){
    flex-direction: column;
}
`
export const PossibilityImage = styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
max-width:500px;
height: 500px;
margin-right:2rem;
@media screen and (max-width:768px){
    max-width:400px;
   min-width:250px;
}

`
export const PossibilityContent = styled.div`
flex:1;
display:flex;
flex-direction: column;
@media screen and (max-width:768px){
   margin-top:2rem ;
}

`
export const H4 = styled.h4`
font-family: Manrope;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 30px;
color: ${({lightGreen})=>(lightGreen?"#71E5FF;":" #FF8A71;")};
`

export const H3 = styled.h1`
font-family: Manrope;
font-weight: 800;
font-size: 34px;
line-height: 45px;
${TextGradient}
@media screen and (max-width:768px){
    font-size: 28px;
}
`
export const Paragragh = styled.p`
font-family: Manrope;
font-weight: normal;
font-size: 16px;
line-height: 30px;
color:#81AFDD;
`