import React from 'react'
import { FeatureContainer,LineGroup,Line,Title,Text } from './Feature.element'


const Feature = ({title,text,row}) => {
    return (
        <FeatureContainer row={row}>
            <LineGroup>
                <Line/>
                <Title>{title}</Title>
            </LineGroup>
        <Text>{text}</Text>
        </FeatureContainer>
    )
}

export default Feature
