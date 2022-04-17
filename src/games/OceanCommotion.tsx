import React, { useState } from 'react';
import {GameHeadline} from './Games';
import './OceanCommotion.scss';


export function OceanCommotion() {
  const [expandGame, setExpandGame] = useState(true);
  const handleClick = () => {
    setExpandGame(!expandGame);
  }
  const contentStyling = expandGame ? 'bar' : ' bar barClosed';
  const content = expandGame ? <Content/>: '';
  return (
    <ul className={contentStyling}>
      <li>
        <GameHeadline name={'Ocean Commotion'} onClick={handleClick}/>
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
        <span>Single person production</span>
        <p>This is a text that describes the game.</p>
        <p>Here are some details that I can't think of right now.</p>
        <WebGLBuild/>
      </div>
      <div>
        <img src={require('../images/Squid.png')} width={'150'} className={'squid'}/>
        <img src={require('../images/PlayerSlow.png')} width={'100'} className={'squid2'}/>
      </div>
    </div>
  )
}

export function WebGLBuild() {
  const [displayGame, setDisplayGame] = useState(false);
  const handleClick = () => {
    setDisplayGame(!displayGame);
  }
  if(displayGame) {
    return (
      <>
        <iframe src={'https://snowyfalse.github.io/'} className={'webGLWrapper'}/>
        <div onClick={handleClick} className={'closeButton'}>Close game</div>
      </>
    );
  } else {
    return (
      <div className={'container'}>
        <div onClick={handleClick}>
        <img src={require('../images/Ocean_Commotion.jpeg')} width={'1000'} height={'700'}/>
        <div className={'overlay'}>
          <div className={'overlayText'}>Click to play the game</div>
        </div>
      </div>
      </div>
    );
  }

}
