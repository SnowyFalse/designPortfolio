import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {AboutMe} from "./about-me/AboutMe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/aboutme'} element={<AboutMe/>}/>
      </Routes>
    </div>
  );
}

export default App;
