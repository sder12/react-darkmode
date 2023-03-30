import React, { useState, useEffect } from 'react';
import Article from './Article';
import data from './data';

// Function take the theme of the localStorage
const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme"); //return its value
  } else {
    return "light-mode"; //default return light-mode
  }
};

const App = () => {
  //state of the theme if not chosen set light-mode
  const [theme, setTheme] = useState(getFromLocalStorage());

  //when btn is clicked change the theme
  const changeTheme = () => {
    theme == "light-mode" ? setTheme("dark-mode") : setTheme("light-mode")
    // if (theme === "light-mode") {
    //   setTheme("dark-mode");
    // } else {
    //   setTheme("light-mode");
    // }
  }

  //HOOK 
  useEffect(() => {
    //Add class written in theme in html 
    document.documentElement.className = theme;
    //each time I click btn, I change the theme and I insert it in localstorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  //COMPONENT
  return (
    <section id="theme" className="section-center">
      <div className="container">
        <h2>DARK MODE APP</h2>
        <button type="button" className='btn' onClick={changeTheme}>CHANGE</button>
        <div className='article-section'>
          {
            data.map((article, index) => {
              return <Article key={index} {...article} />
            })
          }
        </div>
      </div >
    </section >
  )
}

export default App





