import React, { useState } from 'react';
import {WebHeadline} from './Web';
import './Portfolio.scss';

export function Portfolio() {
  const [expandGame, setExpandGame] = useState(true);
  const handleClick = () => {
    setExpandGame(!expandGame);
  }
  const contentStyling = expandGame ? 'bar' : ' bar barClosed';
  const content = expandGame ? <Content/>: '';
  return (
    <div className={'portfolio'}>
      <ul className={contentStyling}>
        <li>
          <WebHeadline name={'Portfolio'} onClick={handleClick}/>
          {content}
        </li>
        <li/>
      </ul>
    </div>
  )
}

export function Content() {
  return (
    <div className={'webWrapper'}>
      <div>
        <b>Private project</b>
        <p>Last but not least, a very important project is the portfolio itself. As this is the biggest web design I've worked on alone, I want to include it as a project as well.</p>
        <p>The most important part of the portfolio is the landing page, as it should catch the users attention but also represent what I stand for. Therefore, I created multiple designs.</p>
        <p>It was important to me that the landing page would represent what I stand for. For this reason, all the art used in the designs was created by myself, including photography and edits.</p>
        <img src={require('../images/Landingpage1.jpeg')} width={'800'} alt={'Landingpage 1'}/>
        <img src={require('../images/LandingPage2.jpeg')} width={'800'} alt={'Landingpage 2'}/>
        <img src={require('../images/Landingpage3.jpeg')} width={'800'} alt={'Landingpage 3'}/>
        <img src={require('../images/LandingPage4.jpeg')} width={'800'} alt={'Landingpage 4'}/>
      </div>
    </div>
  )
}

