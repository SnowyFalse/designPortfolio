import React, { useState } from 'react';
import {GameHeadline} from './Games';
import './Awkward.scss';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        <p>This game is the most recent work and is yet still in development.
          I am developing the game with a friend. Below is a mockup of one of the categories than can be played.
        </p>
        <p>
          The concept of the game is relatively simple: Two players - one player is answering a question and the other player has to guess their answer.
          The goal is to get as many questions as possible correctly.
        </p>
        <p>
          Currently, 5 categories are designed and 4 are implemented. The planned categories are 'Chill', Spicy', 'Never have I ever', 'Fuck, Marry, Kill' and 'Smash or Pass'.
        </p>
        <p>Our plan is to release the game to the Epic Games Store once it is completed.</p>
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
        <AdditionalContent/>
      </div>
    </div>
  )
}

export function AdditionalContent() {
  const [showMocks, setShowMocks] = useState(false);
  const handleOpen = () => {
    setShowMocks(!showMocks);
  }
  const renderMocks = showMocks ? (
    <div>
      <p>The following screens show the different categories that can be played. The host can choose which categories will be included in the game session.</p>
      <div className={'imageWrapper'}>
        <img src={require('../images/mock_ups/Chill.jpeg')} width={'400'} alt={'Chill'}/>
        <img src={require('../images/mock_ups/FuckMarryKill.jpeg')} width={'400'} alt={'FuckMarryKill'}/>
        <img src={require('../images/mock_ups/SmashOrPass.jpeg')} width={'400'} alt={'SmashOrPass'}/>
        <img src={require('../images/mock_ups/Spicy.jpeg')} width={'400'} alt={'Spicy'}/>
      </div>
      <div onClick={handleOpen} className={'showMoreMocks'}><KeyboardArrowUpIcon/>Show Less</div>
    </div>
    ) : <div onClick={handleOpen} className={'showMoreMocks'}><KeyboardArrowDownIcon/>Show More Mock Ups</div>;
  return (
    <div className={'moreInfo'}>
      {renderMocks}
    </div>
  )
}

