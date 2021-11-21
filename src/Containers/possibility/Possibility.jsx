import React from 'react'
import possibility from "../../Assets/Feature Image.png"
import { PossibilityCenter,PossibilityImage,PossibilityContent,H4,H3,Paragragh } from './Possibility.element'

const Possibility = ({lightGreen}) => {
    return (
        <PossibilityCenter>
            <PossibilityImage>
             <img src={possibility} alt="possibility" />
            </PossibilityImage>
            <PossibilityContent>
                <H4 lightGreen>Request Early Access to Get Started</H4>
                <H3>The possibilities are beyond your imagination</H3>
                <Paragragh>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</Paragragh>
                <H4>Request Early Access to Get Started</H4>
            </PossibilityContent>
        </PossibilityCenter>
    )
}

export default Possibility
