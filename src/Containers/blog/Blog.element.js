import styled from "styled-components"
import {Container, TextGradient} from "../../GlobalStyle"
export const  BlogContainer = styled.section`
padding-top:3rem;
padding-bottom:3rem;
${Container};

`
export const  H1 = styled.h1`
font-family: var(--font-family);
font-style: normal;
font-weight: 800;
font-size: 42px;
line-height: 75px;
letter-spacing: -0.04em;
max-width:90%;
margin-bottom:2rem;
${TextGradient}

@media screen and (max-width:768px){
    font-size: 30px;
    line-height: 32px;
    max-width:100%;
}
`
export const  ArticleGroup = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
align-items: stretch;

@media screen and (max-width:768px){
    flex-direction:column;
    /* max-width:80%;
    margin:auto; */
}
@media screen and (max-width:435px){
    max-width:100%;
    
}
`
export const  LeftArticle = styled.aside`
flex-basis:32%;


@media screen and (max-width:768px){
    max-width:80%;
    margin-bottom:2rem;
}
@media screen and (max-width:768px){
    max-width:100%;
}
`
export const  RightArticle= styled.aside`
flex-basis:65%;
display:grid;
grid-template-columns: repeat(2,1fr);
gap:1rem;
@media screen and (max-width:600px){
    grid-template-columns: 1fr;
}
`