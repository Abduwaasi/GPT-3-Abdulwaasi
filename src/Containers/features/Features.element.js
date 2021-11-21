import styled from "styled-components"
import { Container,TextGradient } from "../../GlobalStyle"
export const FeaturesContainer = styled.section`
display:flex;
justify-content: space-between;
padding-top:4rem;
padding-bottom:4rem;
${Container}
@media screen and (max-width:768px){
    flex-direction: column;
}
`
export const LeftFeature = styled.div`
flex:1;
display:flex;
flex-direction: column;

`
export const LeftFeatureText = styled.h1`
margin-right:3rem;
font-family: Manrope;
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 45px;
${TextGradient};
@media screen and (max-width:768px){
font-size: 25px;
line-height: 25px;  
}
`
export const LeftFeatureSubtext = styled.p`
font-family: Manrope;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 30px;
color: #FF8A71;
`
export const FeaturesGroup = styled.section`
flex:1.5
`