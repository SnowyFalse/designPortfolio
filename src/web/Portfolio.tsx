import React, { useState } from 'react';
import {WebHeadline} from './Web';
import './Portfolio.scss';
import '../i18n/config';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <div className={'webWrapper'}>
      <div>
        <b>{t('privateProject')}</b>
        <p>{t('portfolioDescription1')}</p>
        <p>{t('portfolioDescription2')}</p>
        <img src={require('../images/Moodboard.png')} width={'800'} alt={'Moodboard'}/>
        <p>{t('portfolioDescription3')}</p>
        <img src={require('../images/LandingPage2.jpeg')} width={'800'} alt={'Landingpage 1'}/>
        <img src={require('../images/LandingPage4.jpeg')} width={'800'} alt={'Landingpage 2'}/>
        <p>{t('portfolioDescription4')}</p>
        <img src={require('../images/ProjectPage.png')} width={'800'} alt={'Project Page'}/>
      </div>
    </div>
  )
}

