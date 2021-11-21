import React from 'react'
import Feature from '../../Components/feature/Feature'
import {whatGptRow,whatGptCol1,whatGptCol2,whatGptCol3} from "../../data"
import { WhatGptContainer,Possibility,PossibilityTitle,PossibilityText,ColumnGroup } from './WhatGPT3.element'

const WhatGPT3 = () => {
    return (
       <WhatGptContainer>
           <Feature {...whatGptRow}/>
           <Possibility>
               <PossibilityTitle>The possibilities are beyond your imagination</PossibilityTitle>
               <PossibilityText>Explore The Library</PossibilityText>
           </Possibility>
           <ColumnGroup>
           <div>
           <Feature {...whatGptCol1}/>
           </div>
           <div>
           <Feature {...whatGptCol2}/>

           </div>
           <div>
           <Feature {...whatGptCol3}/>
               
           </div>
           </ColumnGroup>
           
       </WhatGptContainer>
    )
}

export default WhatGPT3
