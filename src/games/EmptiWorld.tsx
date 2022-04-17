import React, { useState } from 'react';
import {GameHeadline} from './Games';
import './Games.scss';

export function EmptiWorld() {
  const [expandGame, setExpandGame] = useState(true);
  const handleClick = () => {
    setExpandGame(!expandGame);
  }
  const contentStyling = expandGame ? 'bar' : ' bar barClosed';
  const content = expandGame ? <Content/>: '';
  return (
    <ul className={contentStyling}>
      <li>
        <GameHeadline name={'Empti World'} onClick={handleClick}/>
        {content}
      </li>
      <li/>
    </ul>
  )
}

export function Content() {
  return (
    <div className={'gameWrapper'}>
      <div>
        <span>Group project</span>
        <p>This is a text that describes the game.</p>
        <p>Here are some details that I can't think of right now.</p>
        <img src={require('../images/Empti_World.jpeg')} width={'800'}/>
      </div>
      <div>[Images here]</div>
    </div>
  )
}

