import React from 'react';
import './Art.scss';
import {AvatarDesign} from "./AvatarDesign";
import {Climbing} from "./Climbing";
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import {ScrollToTop} from "../ScrollToTop";


export function Art() {
  const { t } = useTranslation();
  return(
    <div className={'art'}>
      <ScrollToTop/>
      <div className={'headline'}>
        <span className={'pink'}>{t('art')}</span>
        <span className={'deepPurple'}>{t('projects')}</span>
        {/*<p className={'headlineDescription'}></p>*/}
      </div>
      <AvatarDesign/>
      <Climbing/>
    </div>
  )
}

export function ArtHeadline({name, onClick}: {name: string, onClick: () => void}) {
  const { t } = useTranslation();
  return (
    <div className={'artHeadline'} onClick={onClick}>
      <span className={'pink'}>{t('art')}</span>
      <span className={'deepPurple'}>{t('projects(')}</span>
      <span className={'white'}>{name}</span>
      <span className={'deepPurple'}>{t('bracket')}</span>
    </div>
  )
}
