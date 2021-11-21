import React from 'react'
import google from "../../Assets/google.png"
import atlassian from "../../Assets/atlassian.png"
import dropbox from "../../Assets/dropbox.png"
import shopify from "../../Assets/shopify.png"
import slack from "../../Assets/slack.png"
import { BrandContainer,Brands } from './Brand.element'


const Brand = () => {
    return (
        <BrandContainer>
          <Brands>
          <img src={google} alt="google brand" />
          </Brands>
          <Brands>
          <img src={slack} alt="slack brand" />
          </Brands>
          <Brands>
          <img src={atlassian} alt="atlassian brand" />
          </Brands>
          <Brands>
          <img src={dropbox} alt="dropbox brand" />
          </Brands>
          <Brands>
          <img src={shopify} alt="shopify brand" />
          </Brands>
        </BrandContainer>
    )
}

export default Brand
