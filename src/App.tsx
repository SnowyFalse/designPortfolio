import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {AboutMe} from "./about-me/AboutMe";
import {LandingPage} from "./landing-page/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<LandingPage/>}/>
        <Route path={'/aboutme'} element={<AboutMe/>}/>
      </Routes>
    </div>
  );
}

export default App;
