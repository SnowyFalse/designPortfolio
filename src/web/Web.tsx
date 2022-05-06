import React from 'react';
import './Web.scss';
import {Multivative} from "./Multivative";
import {Solid} from "./Solid";
import {Poker} from "./Poker";
import {Portfolio} from "./Portfolio";
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import {BoulderApp} from "./BoulderApp";


export function Web() {
  const { t } = useTranslation();
  return(
    <div className={'web'}>
      <div className={'headline'}>
        <span className={'green'}>{t('web')}</span>
        <span className={'blue'}>{t('design')}</span>
        <p className={'headlineDescription'}>{t('webDescription1')}</p>
        <p className={'headlineDescription'}>{t('webDescription2')}</p>
      </div>
      <Multivative/>
      <Solid/>
      <Poker/>
      <BoulderApp/>
      <Portfolio/>
    </div>
  )
}

export function WebHeadline({name, onClick}: {name: string, onClick: () => void}) {
  const { t } = useTranslation();
  return (
    <div className={'webHeadline'} onClick={onClick}>
      <span className={'green'}>{t('web')}</span>
      <span className={'blue'}>{t('design(')}</span>
      <span className={'white'}>{name}</span>
      <span className={'blue'}>)</span>
    </div>
  )
}
