import React, { useState } from 'react';
import {WebHeadline} from './Web';
import './Multivative.scss';
import '../i18n/config';
import { useTranslation } from 'react-i18next';

export function Multivative() {
  const [expandDesign, setExpandDesign] = useState(true);
  const handleClick = () => {
    setExpandDesign(!expandDesign);
  }
  const contentStyling = expandDesign ? 'bar' : ' bar barClosed';
  const content = expandDesign ? <Content/>: '';
  return (
    <div className={'multivative'}>
      <ul className={contentStyling}>
        <li>
          <WebHeadline name={'Multivative'} onClick={handleClick}/>
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
        <p>{t('multivativeDescription1')}</p>
        <p>{t('multivativeDescription2')}</p>
        <img src={require('../images/Multivative_Designer.jpeg')} width={'800'} alt={'Multivative_Designer'}/>
        <p className={'imageDescription'}>{t('multivativeDescription3')}</p>
        <img src={require('../images/Multivative_Components.jpeg')} width={'800'} alt={'Multivative_Components'}/>
        <p className={'imageDescription'}>{t('multivativeDescription4')}</p>
        <img src={require('../images/Multivative_JobView.jpeg')} width={'800'} alt={'Multivative_JobView'}/>
      </div>
    </div>
  )
}

