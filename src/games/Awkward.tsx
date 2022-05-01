import React, { useState } from 'react';
import {GameHeadline} from './Games';
import './Awkward.scss';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import '../i18n/config';
import { useTranslation } from 'react-i18next';

export function Awkward() {
  const [expandGame, setExpandGame] = useState(true);
  const handleClick = () => {
    setExpandGame(!expandGame);
  }
  const contentStyling = expandGame ? 'bar' : ' bar barClosed';
  const content = expandGame ? <Content/>: '';
  return (
    <div className={'awkward'}>
      <ul className={contentStyling}>
        <li>
          <GameHeadline name={'Friends Cube'} onClick={handleClick}/>
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
    <div className={'gameWrapper'}>
      <div>
        <b>{t('groupProject')}</b>
        <p>{t('awkwardDescription1')}</p>
        <p>{t('awkwardDescription2')}</p>
        <p>{t('awkwardDescription3')}</p>
        <p>{t('awkwardDescription4')}</p>
        <img src={require('../images/NeverHaveIEver.jpeg')} width={'800'} alt={'Never have I ever'}/>
        <p>{t('awkwardDescription5')}</p>
        <ul>
          <li>{t('awkwardDescriptionList1')}</li>
          <li>{t('awkwardDescriptionList2')}</li>
          <li>{t('awkwardDescriptionList3')}</li>
          <li>{t('awkwardDescriptionList4')}</li>
        </ul>
        <AdditionalContent/>
      </div>
    </div>
  )
}

export function AdditionalContent() {
  const [showMocks, setShowMocks] = useState(false);
  const handleOpen = () => {
    setShowMocks(!showMocks);
  }
  const { t } = useTranslation();
  const renderMocks = showMocks ? (
    <div>
      <p>{t('additionalContent')}</p>
      <div className={'imageWrapper'}>
        <img src={require('../images/mock_ups/Chill.jpeg')} width={'400'} alt={'Chill'}/>
        <img src={require('../images/mock_ups/FuckMarryKill.jpeg')} width={'400'} alt={'FuckMarryKill'}/>
        <img src={require('../images/mock_ups/SmashOrPass.jpeg')} width={'400'} alt={'SmashOrPass'}/>
        <img src={require('../images/mock_ups/Spicy.jpeg')} width={'400'} alt={'Spicy'}/>
      </div>
      <div onClick={handleOpen} className={'showMoreMocks'}><KeyboardArrowUpIcon/>{t('showLess')}</div>
    </div>
    ) : <div onClick={handleOpen} className={'showMoreMocks'}><KeyboardArrowDownIcon/>{t('showMoreMocks')}</div>;
  return (
    <div className={'moreInfo'}>
      {renderMocks}
    </div>
  )
}

