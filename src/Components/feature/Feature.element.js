import styled from "styled-components"
export const FeatureContainer = styled.div`
/* display:grid;
grid-template-columns: ${({row})=>(row?"1fr 3fr":"1fr")};
row-gap:3rem;
column-gap:3rem;

@media screen and (max-width:768px){
    grid-template-columns: 1fr;
} */
display:flex;
flex-direction: ${({row})=>(row?"row":"column")};
justify-content: space-between;
@media screen and (max-width:768px){
    flex-direction: column; 
}
`
export const LineGroup = styled.div`
display:flex;
flex-direction:column;
flex-basis:30%;
max-width:150px;
@media screen and (max-width:768px){
    flex-basis:100%; 
    max-width:100%;
    margin-top:2rem;
}
`
export const Line = styled.div`
width: 38px;
height: 3px;
background: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%), #FFFFFF;
`
export const Title = styled.h3`
font-family: Manrope;
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 40px;
letter-spacing: -0.04em;
color: #FFFFFF;

`
export const Text = styled.p`
flex-basis:60%;
font-family: Manrope;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 30px;
color: #81AFDD;
@media screen and (max-width:768px){
    flex-basis:100%; 
}
`