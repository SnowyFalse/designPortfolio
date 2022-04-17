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
        <b>Single person production</b>
        <p>This simple underwater shoot'em up was designed and developed fully by myself. All the artwork used in the game,
          except for the music and sound effects - which are copy right free - are selfmade and no additional sources are used</p>
        <p>This game is the first game I developed back in 2019.</p>
        <WebGLBuild/>
      </div>
      <div className={'images'}>
        <img src={require('../images/Squid.png')} width={'150'} className={'squid'} alt={'Squid 1'}/>
        <img src={require('../images/PlayerSlow.png')} width={'100'} className={'squid2'}  alt={'Squid 2'}/>
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
        <iframe src={'https://snowyfalse.github.io/'} className={'webGLWrapper'} title={'Ocean Commotion Game'}/>
        <div onClick={handleClick} className={'closeButton'}>Close game</div>
      </>
    );
  } else {
    return (
      <div className={'container'}>
        <div onClick={handleClick}>
        <img src={require('../images/Ocean_Commotion.jpeg')} width={'900'} alt={'Ocean Commotion'}/>
        <div className={'overlay'}>
          <div className={'overlayText'}>Click to play the game</div>
        </div>
      </div>
      </div>
    );
  }

}
