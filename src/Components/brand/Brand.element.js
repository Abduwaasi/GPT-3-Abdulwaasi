import styled from "styled-components"
import {Container} from "../../GlobalStyle"

export const BrandContainer = styled.section`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
align-items:center;
height: 200px;
${Container};
`
export const Brands = styled.div`
max-width:150px;
min-width:120px;
height:50px;

img{
    width:100%;
    height:100%;
}
`