import React, { useState } from 'react';
import Article from './Article';
import data from './data';

const App = () => {
  const [articles, setArticles] = useState(data);
  // console.log(articles)

  return (
    <section className="section-center light-mode">
      <div className="container">
        <h3>DARK MODE APP</h3>
        <button type="button" className='btn'>CHANGE</button>
        <div className='article-section'>
          {
            articles.map((article, index) => {
              return <Article key={index} {...article} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default App





