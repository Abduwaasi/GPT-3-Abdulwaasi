import React from 'react'
import footerLogo from "../../Assets/GPT-3.svg"
import {FooterCenter,FooterContent,H1,FooterButton,FooterLinks,FooterLinkLogo,FooterLinkItems,CopyRight} from "./Footer.element"

const Footer = () => {
    return (
        <FooterCenter>
            <FooterContent>
                <H1>Do you want to step in to the future before others</H1>
                <FooterButton>Request Early Access</FooterButton>
            </FooterContent>
            <FooterLinks>
                <FooterLinkLogo>
                    <img src={footerLogo} alt="footer logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </FooterLinkLogo>
                <FooterLinkItems>
                    <h4>Links</h4>
                     <p href="#">Overons</p>
                     <p href="#">Social media</p>
                     <p href="#">Counters</p>
                     <p href="#">Contact</p>
                </FooterLinkItems>
                <FooterLinkItems>
                    <h4>Company</h4>
                     <p href="#">Terms & Conditions</p>
                     <p href="#">Privacy Policy</p>
                     <p href="#">Contact</p>
                </FooterLinkItems>
                <FooterLinkItems>
                    <h4>Get in touch</h4>
                     <p href="#">Crechterwoord K12 182 DK Alknjkcb</p>
                     <p href="#">085-132567</p>
                     <p href="#">info@payme.net</p>
                </FooterLinkItems>
            </FooterLinks>
            <CopyRight>© 2021 GPT-3. All rights reserved.</CopyRight>
        </FooterCenter>
    )
}

export default Footer
