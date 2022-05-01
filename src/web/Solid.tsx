import React, { useState } from 'react';
import {WebHeadline} from './Web';
import './Solid.scss';
import '../i18n/config';
import { useTranslation } from 'react-i18next';

export function Solid() {
  const [expandGame, setExpandGame] = useState(true);
  const handleClick = () => {
    setExpandGame(!expandGame);
  }
  const contentStyling = expandGame ? 'bar' : ' bar barClosed';
  const content = expandGame ? <Content/>: '';
  return (
    <div className={'solid'}>
      <ul className={contentStyling}>
        <li>
          <WebHeadline name={'Solid'} onClick={handleClick}/>
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
        <b>{t('companyProject')}</b>
        <p>{t('solidDescription1')}</p>
        <p>{t('solidDescription2')}</p>
        <p className={'imageDescription'}>{t('solidDescription3')}</p>
        <img src={require('../images/Solid_user.jpeg')} width={'800'} alt={'Solid_user'}/>
        <p className={'imageDescription'}>{t('solidDescription4')}</p>
        <img src={require('../images/Solid_Permissiontable.jpeg')} width={'800'} alt={'Permission_table'}/>
        <p className={'imageDescription'}>{t('solidDescription5')}</p>
      </div>
    </div>
  )
}

