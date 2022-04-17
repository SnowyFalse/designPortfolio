import React, { useState } from 'react';
import {GameHeadline} from './Games';
import './EmptiWorld.scss';

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
        <b>Group project</b>
        <p>This game was developed as part of a group project containing 5 team members.</p>
        <img src={require('../images/Empti_World.jpeg')} width={'800'} alt={'Empti World'}/>
        <p>
          The work was split evening across the team members with all team members working on every aspect of the game development process.
          This means that every team member, including myself, was developing. However, the responsibilities of creating the music and the art work were assigned mainly to me and Fabian Ceolotto.
          In details, this means that the work I've contributed is the following:
        </p>
        <ul>
          <li>Designs of buttons, icons and assets</li>
          <li>character design</li>
          <li>artwork used as background</li>
          <li>development - such as inventory, (mini-)map and logic</li>
        </ul>
        <img src={require('../images/Bars.PNG')} width={'800'} alt={'Empti World Screenshot'}/>
      </div>
      <div>
        <img src={require('../images/Empti2.png')} width={'100'} className={'squid'} alt={'Empti sad'}/>
        <img src={require('../images/Empti1.png')} width={'130'} className={'squid2'} alt={'Empti happy'}/>
      </div>
    </div>
  )
}

