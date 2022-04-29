import React, { useState } from 'react';
import {ArtHeadline} from './Art';
import './AvatarDesign.scss';
import '../../i18n/config';
import { useTranslation } from 'react-i18next';

export function AvatarDesign() {
  const [expandDesign, setExpandDesign] = useState(true);
  const handleClick = () => {
    setExpandDesign(!expandDesign);
  }
  const contentStyling = expandDesign ? 'bar' : ' bar barClosed';
  const content = expandDesign ? <Content/>: '';
  return (
    <div className={'avatarDesign'}>
      <ul className={contentStyling}>
        <li>
          <ArtHeadline name={'Avatars'} onClick={handleClick}/>
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
        <b>{t('privateProject')}</b>
        <p>{t('avatars')}</p>
        <div className={'avatarWrapper'}>
          <div className={'avatarLines'}>
            <img src={require('../images/Avatar_design-modified.png')} width={'120'} alt={'Avatar_design'}/>
            <img src={require('../images/Avatar_design-modified (1).png')} width={'120'} alt={'Avatar_design'}/>
            <img src={require('../images/Avatar_design-modified (2).png')} width={'120'} alt={'Avatar_design'}/>
            <img src={require('../images/Avatar_design-modified (3).png')} width={'120'} alt={'Avatar_design'}/>
          </div>
         <div className={'avatarLines'}>
           <img src={require('../images/Avatar_design-modified (4).png')} width={'120'} alt={'Avatar_design'}/>
           <img src={require('../images/Avatar_design-modified (5).png')} width={'120'} alt={'Avatar_design'}/>
           <img src={require('../images/Avatar_design-modified (6).png')} width={'120'} alt={'Avatar_design'}/>
         </div>
        </div>
      </div>
    </div>
  )
}

