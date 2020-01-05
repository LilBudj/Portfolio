import React from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Footer from "./Footer";
import Projects from "./Projects";
import Slogan from "./Slogan";
import Contacts from "./Contacts";
import Particles from "react-particles-js";

const particlesOpt = {
    particles: {
        number: {
            value: null,
            density: {
                enable: true,
                value_area: 800
            }
        }
    },
    color: {
        value: "#990556"
    },
    shape: {
        type: "circle",
        stroke: {
            width: 0,
            color: "#ffffff"
        },
        polygon: {
            nb_sides: 8
        }
    }
};

function App() {
  return (
    <div className="App">
        <Particles params={particlesOpt} className="particles" />
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
