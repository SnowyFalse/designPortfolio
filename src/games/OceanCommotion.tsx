import React, { useState } from 'react';
import {GameHeadline} from './Games';
import './OceanCommotion.scss';
import '../i18n/config';
import { useTranslation } from 'react-i18next';


export function OceanCommotion() {
  const [expandGame, setExpandGame] = useState(true);
  const handleClick = () => {
    setExpandGame(!expandGame);
  }
  const contentStyling = expandGame ? 'bar' : ' bar barClosed';
  const content = expandGame ? <Content/>: '';
  return (
    <div className={'oceanCommotion'}>
      <ul className={contentStyling}>
        <li>
          <GameHeadline name={'Ocean Commotion'} onClick={handleClick}/>
          {content}
        </li>
        <li/>
      </ul>
    </div>
  )
}

export function Content() {
  const { t } = useTranslation();
  return (
    <div className={'gameWrapper'}>
      <div>
        <b>{t('singlePerson')}</b>
        <p>{t('oceanDescription1')}</p>
        <p>{t('oceanDescription2')}</p>
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
  const { t } = useTranslation();
  const [displayGame, setDisplayGame] = useState(false);
  const handleClick = () => {
    setDisplayGame(!displayGame);
  }
  if(displayGame) {
    return (
      <>
        <iframe src={'https://snowyfalse.github.io/'} className={'webGLWrapper'} title={'Ocean Commotion Game'}/>
        <div onClick={handleClick} className={'closeButton'}>{t('closeGame')}</div>
      </>
    );
  } else {
    return (
      <div className={'container'}>
        <div onClick={handleClick}>
        <img src={require('../images/Ocean_Commotion_Screenshot.png')} width={'900'} alt={'Ocean Commotion'}/>
        <div className={'overlay'}>
          <div className={'overlayText'}>{t('clickToPlay')}</div>
        </div>
      </div>
      </div>
    );
  }
}
