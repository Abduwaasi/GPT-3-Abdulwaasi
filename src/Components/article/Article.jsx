import React from 'react'
import { ArticleCenter,ImageContainer,Content,Date, Link,Title } from './Article.element'

const Article = ({image,date,title,links}) => {
    return (
        <ArticleCenter>
            <ImageContainer>
                <img src={image} alt="article" />
            </ImageContainer>
            <Content>
                <Date>{date}</Date>
               <Title>{title}</Title>
               <Link>{links}</Link>
            </Content>
        </ArticleCenter>
    )
}

export default Article
