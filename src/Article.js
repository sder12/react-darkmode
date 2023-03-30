import React from 'react'

const Article = (article) => {
    return (
        <article>
            <div>
                <h4>{article.title}</h4>
                <div className="underline"></div>
            </div>
            <p>{article.body}</p>
        </article>
    )
}

export default Article