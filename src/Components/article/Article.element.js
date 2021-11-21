import styled from "styled-components";
export const ArticleCenter = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
`
export const ImageContainer = styled.div`
width:100%;
height:100%;
`
export const Content = styled.div`
padding:1rem;
background:#042C54;
`
export const Date= styled.p`
font-family: var(--font-family);
font-weight: bold;
font-size: 10px;
line-height: 35px;
color: #FFFFFF;
`
export const Title = styled.h6`
font-family: var(--font-family);
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 30px;
color: #FFFFFF;

`
export const Link = styled(Date)`
cursor:pointer;
`