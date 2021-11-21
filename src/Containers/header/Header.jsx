import React from 'react'
import {HeaderContainer,HeaderContent,HeaderTitle,HeaderDesc,HeaderInputContainer,HeaderInput,HeaderPeopleContainer,HeaderImage} from "./Header.element"
import {Button} from "../../GlobalStyle"
import people from "../../Assets/Group 81.png"
import ai from "../../Assets/Illustration.png"

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderTitle>Let’s Build Something amazing with GPT-3 OpenAI</HeaderTitle>
                <HeaderDesc>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</HeaderDesc>
                <HeaderInputContainer>
                    <HeaderInput placeholder="Your Email Address"/>
                    <div>
                    <Button fill rnoRadiusLeft>Get started</Button>
                    </div>
                </HeaderInputContainer>
                <HeaderPeopleContainer>
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </HeaderPeopleContainer>
            </HeaderContent>
            <HeaderImage>
                <img src={ai} alt="artificial intelligence" />
            </HeaderImage>
        </HeaderContainer>
    )
}

export default Header
