import React, { useState } from 'react';
import {ArtHeadline} from './Art';
import './Climbing.scss';
import '../i18n/config';
import { useTranslation } from 'react-i18next';

export function Climbing() {
  const [expandDesign, setExpandDesign] = useState(true);
  const handleClick = () => {
    setExpandDesign(!expandDesign);
  }
  const contentStyling = expandDesign ? 'bar' : ' bar barClosed';
  const content = expandDesign ? <Content/>: '';
  return (
    <div className={'climbing'}>
      <ul className={contentStyling}>
        <li>
          <ArtHeadline name={'Art & Sketches'} onClick={handleClick}/>
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
    <div className={'ArtWrapper'}>
      <div>
        <p>{t('climbingDescription')}</p>
        <p className={'imageDescription'}>{t('climbingImage')}</p>
        <img src={require('../images/climbing.png')} width={'800'} alt={'Avatar_design-modified'}/>
        <p className={'imageDescription'}>{t('drawing')}</p>
        <div className={'climbingWrapper'}>
          <div className={'climbingLines'}>
            <img src={require('../images/sketches/sketch3.jpeg')} width={'300'} alt={'Avatar_design-modified'}/>
            <img src={require('../images/sketches/sketch4.jpeg')} width={'300'} alt={'Avatar_design-modified'}/>
          </div>
          <div className={'climbingLines'}>
            <img src={require('../images/sketches/sketch1.jpeg')} width={'300'} alt={'Avatar_design-modified'}/>
            <img src={require('../images/sketches/sketch2.jpeg')} width={'300'} alt={'Avatar_design-modified'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

