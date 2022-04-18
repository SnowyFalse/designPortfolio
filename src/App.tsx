import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {AboutMe} from "./about-me/AboutMe";
import {LandingPage} from "./landing-page/LandingPage";
import {Games} from "./games/Games";
import {Navbar} from "./navbar/Navbar";
import {Web} from "./web/Web";
import {Art} from "./art/Art";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<LandingPage/>}/>
        <Route path={'/portfolio'} element={<Navbar/>}>
          <Route path={'/portfolio/aboutme'} element={<AboutMe/>}/>
          <Route path={'/portfolio/games'} element={<Games/>}/>
          <Route path={'/portfolio/web'} element={<Web/>}/>
          <Route path={'/portfolio/art'} element={<Art/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
