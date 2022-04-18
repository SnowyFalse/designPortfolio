import React, { useState } from 'react';
import {GameHeadline} from './Games';
import './Awkward.scss';

export function Awkward() {
  const [expandGame, setExpandGame] = useState(true);
  const handleClick = () => {
    setExpandGame(!expandGame);
  }
  const contentStyling = expandGame ? 'barFC' : ' barFC barFCClosed';
  const content = expandGame ? <Content/>: '';
  return (
    <ul className={contentStyling}>
      <li>
        <GameHeadline name={'Friends Cube'} onClick={handleClick}/>
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
        <p>This game is the most recent work and is yet still in development. I am developing the game with a friend.</p>
        <img src={require('../images/NeverHaveIEver.jpeg')} width={'800'} alt={'Never have I ever'}/>
        <p>
          My friend Mahir and me had the idea of developing a casual game that is played together.
          While he was implementing most of the logic and network communication, I focused on the game mechanics, the overall design and the artwork.
          For this game I am responsible for the following tasks:
        </p>
        <ul>
          <li>Game Design - Mechanics, Dynamics and Aesthetics</li>
          <li>Artwork - all the artwork seen in the game is created by myself, no additional sources were used</li>
          <li>Prototyping</li>
          <li>Implementation of the UI</li>
        </ul>
      </div>
    </div>
  )
}

