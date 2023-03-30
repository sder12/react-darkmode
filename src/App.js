import React, { useState } from 'react';
import Article from './Article';
import data from './data';

const App = () => {
  const [articles, setArticles] = useState(data);
  console.log(articles)



  return (
    <section className="section-center">
      <div className="container">
        <h2>DARK MODE APP</h2>
        <button type="button" className='btn'>CHANGE</button>
        {
          articles.map((el) => {
            return <Article />
          })
        }
      </div>
    </section>
  )
}

export default App





