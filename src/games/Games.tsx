import React from 'react';
import './Games.scss';
import {EmptiWorld} from './EmptiWorld';
import {OceanCommotion} from './OceanCommotion';
import {Awkward} from "./Awkward";
import '../i18n/config';
import { useTranslation } from 'react-i18next';


export function Games() {
  const { t } = useTranslation();
  return(
    <div className={'games'}>
      <div className={'headline'}>
        <span className={'blue'}>{t('game')}</span>
        <span className={'purple'}>{t('design')}</span>
        <p className={'headlineDescription'}>{t('gameDescription1')}</p>
        <p className={'headlineDescription'}>{t('gameDescription2')}</p>
      </div>
      <Awkward/>
      <EmptiWorld/>
      <OceanCommotion/>
    </div>
  )
}

export function GameHeadline({name, onClick}: {name: string, onClick: () => void}) {
  const { t } = useTranslation();
  return (
    <div className={'gameHeadline'} onClick={onClick}>
      <span className={'blue'}>{t('game')}</span>
      <span className={'purple'}>{t('game')}</span>
      <span className={'white'}>{name}</span>
      <span className={'purple'}>{t('bracket')}</span>
    </div>
  )
}
