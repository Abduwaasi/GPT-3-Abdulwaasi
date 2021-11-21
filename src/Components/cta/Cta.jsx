import React from 'react'
import { CtaContainer,CtaContent,SmallText,BigText,CtaButton,CtaButtonContainer } from './Cta.element'

const Cta = () => {
    return (
        <CtaContainer>
            <CtaContent>
                <SmallText>Request Early Access to Get Started</SmallText>
                <BigText>Register today & start exploring the endless possiblities.</BigText>
            </CtaContent>
            <CtaButtonContainer>
            <CtaButton>Get Started</CtaButton>
            </CtaButtonContainer>
        </CtaContainer>
    )
}

export default Cta
