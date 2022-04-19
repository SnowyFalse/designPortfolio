import React, { useState } from 'react';
import {WebHeadline} from './Web';
import './Poker.scss';

export function Poker() {
  const [expandGame, setExpandGame] = useState(true);
  const handleClick = () => {
    setExpandGame(!expandGame);
  }
  const contentStyling = expandGame ? 'bar' : ' bar barClosed';
  const content = expandGame ? <Content/>: '';
  return (
    <div className={'poker'}>
      <ul className={contentStyling}>
        <li>
          <WebHeadline name={'Scrum Poker'} onClick={handleClick}/>
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
        <p>The idea of a scrum poker tool was born after I noticed that there is no good free to use online tool for scrum pokers. Most online applications are lacking important features or are not working properly.</p>
        <p>For this reason, I decided to design a Scrum poker tool myself. The following designs show the basic application with its main features. The design and features were created by me only. For the design process I started with requirements engineering and afterwards created a lofi userflow. Afterwards, I created hifi mock screens that can be used as reference for implementing.</p>
        <p className={'imageDescription'}>The first mock up displays the view that lets users vote on stories.</p>
        <img src={require('../images/ScrumPoker.jpeg')} width={'800'} alt={'Scrum Poker'}/>
        <p className={'imageDescription'}>The second mock up displays the view after every player has voted and the results are revealed.</p>
        <img src={require('../images/ScrumPokerResults.jpeg')} width={'800'} alt={'Results'}/>
        <p className={'imageDescription'}>The last mock up displays the start screen a user gets when creating a new poker session.</p>
        <img src={require('../images/ScrumPokerCreate.jpeg')} width={'800'} alt={'Create'}/>
      </div>
    </div>
  )
}

