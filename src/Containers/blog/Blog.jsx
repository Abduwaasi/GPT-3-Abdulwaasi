import React from 'react'
import { Article } from '../../Components'
import { BlogContainer,H1,ArticleGroup,LeftArticle,RightArticle } from './Blog.element'
import { blog01,blog02,blog03,blog04,blog05 } from './imports'

const Blog = () => {
    return (
        <BlogContainer>
            <H1>A lot is happening, 
We are blogging about it.</H1>
            <ArticleGroup>
                <LeftArticle>
                    <Article image={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" links="Read Full Article"/>
                </LeftArticle>
                <RightArticle>
                    <Article image={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" links="Read Full Article"/>
                    <Article image={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" links="Read Full Article"/>
                    <Article image={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" links="Read Full Article"/>
                    <Article image={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" links="Read Full Article"/>
                </RightArticle>
            </ArticleGroup>
        </BlogContainer>
    )
}

export default Blog
