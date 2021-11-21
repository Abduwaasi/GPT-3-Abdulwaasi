import styled, {createGlobalStyle,css, keyframes} from "styled-components"
 const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

:root {
  --font-family: 'Manrope', sans-serif;

  --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
  --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
  
  --color-bg: #040C18;
  --color-footer : #031B34;
  --color-blog: #042c54;
  --color-text: #81AFDD;
  --color-subtext: #FF8A71;
}
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
    scroll-behavior: smooth;
}
body{
   background:var(--color-bg); 
   font-family:var(---font-family);
}
li{
    list-style-type:none;
}
a{
    text-decoration: none;
    color:unset;
}
img{
  width:100%;
  height:100%;
}
`
export const BackgroundGradient= css`
 background:radial-gradient(circle at 3% 25%, #012349 0%, #040D19 100%);
`
export const TextGradient = css`
background: var(--gradient-text);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
`
export const Container= css`
width:100%;
max-width:1200px;
padding-left: 5rem;
padding-right: 5rem;
margin-left:auto;
margin-right:auto;
@media screen and (max-width:768px){
padding-left: 2rem;
padding-right:2rem;
}
`
export const SectionMargin= css`
margin-left:5rem;
margin-right:5rem;

@media screen and (max-width:768px){
  margin:auto 1rem;
 
}
`
export const Button = styled.button`
 font-family: Manrope;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 25px;
color: #FFFFFF;
background:${({fill})=>(fill?"#FF4820": "transparent")};
border:none;
outline:none;
border-radius: ${({radius})=>(radius?"5px":0)};
border-radius: ${({noRadiusLeft})=>(noRadiusLeft&&"0 5px 5px 0")};
padding:0.2rem 1rem;
cursor:pointer;


`
export const ScaleUp  = keyframes`
 0% {
            transform: scale(0.5);
  }
  100% {
            transform: scale(1);
  }
`
export default GlobalStyle;