import styled from "styled-components"
import { BackgroundGradient,TextGradient, Container } from "../../GlobalStyle"
export const HeaderContainer= styled.section`
padding-bottom: 2rem;
display:flex;
justify-content: space-between;
align-items: center;
${BackgroundGradient};
${Container}
@media screen and (max-width:768px){
    flex-direction:column;
}
`
export const HeaderContent = styled.div`
flex:1.5;
display:flex;
flex-direction: column;
justify-content:center;
align-items:flex-start;
margin-right: 3rem;

@media screen and (max-width:768px){
    flex-direction:column;
    margin-right:auto;
    margin:2rem auto;
}
`
export const HeaderTitle = styled.h1`
font-family: var(--font-family);
font-style: normal;
font-weight: 800;
font-size: 3rem;
line-height: 75px;
letter-spacing: -0.04em;
${TextGradient};
@media screen and (max-width:1024px){
    font-size:2.5rem;
    line-height:50px;
   
}
@media screen and (max-width:1024px){
    font-size:2rem;
    line-height:40px;
   
}
`
export const HeaderDesc = styled.p`
font-family: Manrope;
font-weight: normal;
font-size: 20px;
line-height: 27px;
color: #81AFDD;
@media screen and (max-width:1024px){
    font-size:16px;
    line-height: 20px;
    
}
`
export const HeaderInputContainer = styled.div`
display:flex;
justify-content: center;
align-items:center;
width:100%;
margin:1rem auto;
@media screen and (max-width:450px){
    flex-direction:column;
    justify-content: space-between;
    align-items: flex-start;
}
div{
    flex:1;
    @media screen and (max-width:450px){
   margin-top:1rem;
}
}
`
export const HeaderInput = styled.input`
flex:2;
background: #052D56;
padding:0.3rem 1rem;
border-radius: 5px 0px 0px 5px;
font-family: Manrope;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 27px;
border:none;
outline:transparent;
color:#fff;
::placeholder{
    color: #3D6184;

}

`
export const HeaderPeopleContainer = styled.div`
display:flex;
justify-content:flex-start;

img{
    width: 181.79px;
    height: 38px;
    margin-right: 1rem;

    @media screen and (max-width:768px){
     width: 180px;
    height: 25px;
    margin: 0;
}
}
p{
 font-family: Manrope;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 38px;
color: #FFFFFF;
}
@media screen and (max-width:768px){
    flex-direction:column;
    text-align:left;
}
`
export const HeaderImage= styled.div`
flex:1;
display:flex;
justify-content: center;
align-items:center;

img{
    width:100%;
    height:100%;

   @media screen and (max-width:768px){
        flex-basis:80%;
    }
}`