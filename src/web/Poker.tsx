import React, { useState } from 'react';
import {WebHeadline} from './Web';
import './Poker.scss';
import '../i18n/config';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <div className={'webWrapper'}>
      <div>
        <b>{t('singlePerson')}</b>
        <p>{t('pokerDescription1')}</p>
        <p>{t('pokerDescription2')}</p>
        <p className={'imageDescription'}>{t('pokerDescription5')}</p>
        <img src={require('../images/ScrumPoker.jpeg')} width={'800'} alt={'Scrum Poker'}/>
        <p className={'imageDescription'}>{t('pokerDescription3')}</p>
        <img src={require('../images/ScrumPokerResults.jpeg')} width={'800'} alt={'Results'}/>
        <p className={'imageDescription'}>{t('pokerDescription4')}</p>
        <img src={require('../images/ScrumPokerCreate.jpeg')} width={'800'} alt={'Create'}/>
      </div>
    </div>
  )
}

