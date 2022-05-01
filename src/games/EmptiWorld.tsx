import React, { useState } from 'react';
import {GameHeadline} from './Games';
import './EmptiWorld.scss';
import '../i18n/config';
import { useTranslation } from 'react-i18next';

export function EmptiWorld() {
  const [expandGame, setExpandGame] = useState(true);
  const handleClick = () => {
    setExpandGame(!expandGame);
  }
  const contentStyling = expandGame ? 'bar' : ' bar barClosed';
  const content = expandGame ? <Content/>: '';
  return (
    <div className={'emptiWorld'}>
      <ul className={contentStyling}>
        <li>
          <GameHeadline name={'Emptis World'} onClick={handleClick}/>
          {content}
        </li>
        <li/>
      </ul>
    </div>
  )
}

export function Content() {
  const { t } = useTranslation();
  const openLink = () => {
    const otherWindow = window.open();
    if(otherWindow) {
      otherWindow.opener = null;
      otherWindow.location = 'https://criticalclimate.itch.io/empti-world';
    }
  }
  return (
    <div className={'gameWrapper'}>
      <div>
        <b>{t('groupProject')}</b>
        <p className={'gameDescription'}>{t('emptiWorldDescription1')}</p>
        <img src={require('../images/Empti_World.jpeg')} width={'800'} alt={'Empti World'}/>
        <p className={'gameDescription'}>
          {t('emptiWorldDescription2')}
        </p>
        <ul className={'gameDescription'}>
          <li>{t('emptiWorldDescriptionList1')}</li>
          <li>{t('emptiWorldDescriptionList2')}</li>
          <li>{t('emptiWorldDescriptionList3')}</li>
          <li>{t('emptiWorldDescriptionList4')}</li>
        </ul>
        <img src={require('../images/Bars.PNG')} width={'800'} alt={'Empti World Screenshot'}/>
        <p className={'linkDescription'}>{t('playGameOnline')}<span onClick={openLink} className={'itchio'}>itch.io</span>
        </p>
      </div>
      <div className={'images'}>
        <img src={require('../images/Empti2.png')} width={'100'} className={'squid'} alt={'Empti sad'}/>
        <img src={require('../images/Empti1.png')} width={'130'} className={'squid2'} alt={'Empti happy'}/>
      </div>
    </div>
  )
}

