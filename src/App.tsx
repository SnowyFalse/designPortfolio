import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {AboutMe} from "./about-me/AboutMe";
import {LandingPage} from "./landing-page/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/aboutme'} element={<AboutMe/>}/>
        <Route path={'/'} element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
