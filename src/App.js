import React from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Footer from "./Footer";
import Projects from "./Projects";
import Slogan from "./Slogan";
import Contacts from "./Contacts";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Slogan/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
