import React from 'react'
import Feature from "../../Components/feature/Feature"
import { featuresObj } from '../../data'
import { FeaturesContainer,LeftFeature,LeftFeatureText,LeftFeatureSubtext,FeaturesGroup } from './Features.element'
const Features = () => {
    return (
        <FeaturesContainer>
            <LeftFeature>
                <LeftFeatureText>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</LeftFeatureText>
                <LeftFeatureSubtext>Request Early Access to Get Started</LeftFeatureSubtext>
            </LeftFeature>
            <FeaturesGroup>
            {featuresObj.map((item)=>{
               return <Feature key={item.id} {...item}/>
                    
            })}
                
            </FeaturesGroup>
        </FeaturesContainer>
    )
}

export default Features
