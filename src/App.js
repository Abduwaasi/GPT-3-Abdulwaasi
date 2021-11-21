import React, {Fragment} from 'react'
import GlobalStyle from "./GlobalStyle"
import {Navbar, Brand, Cta} from "./Components"
import {Blog,Features, Footer, Header,Possibility, WhatGPT3} from "./Containers"

const App = () => {
  return (
    <Fragment>
      <GlobalStyle/>
     <Navbar/>
     <Header/>
     <Brand/>
     <WhatGPT3/>
     <Features/>
     <Possibility/>
     <Cta/>
     <Blog/>
     <Footer/>
    </Fragment>
  )
}

export default App

