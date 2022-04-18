import React, { useState } from 'react';
import {ArtHeadline} from './Art';
import './AvatarDesign.scss';

export function AvatarDesign() {
  const [expandDesign, setExpandDesign] = useState(true);
  const handleClick = () => {
    setExpandDesign(!expandDesign);
  }
  const contentStyling = expandDesign ? 'barAD' : ' barAD barADClosed';
  const content = expandDesign ? <Content/>: '';
  return (
    <ul className={contentStyling}>
      <li>
        <ArtHeadline name={'Avatars'} onClick={handleClick}/>
        {content}
      </li>
      <li/>
    </ul>
  )
}

export function Content() {
  return (
    <div className={'ArtWrapper'}>
      <div>
        <b>Private project</b>
        <p>I created the avatars as part of the Friends Cube Game. It is planned to extend the game by implementing a party mode with up to 8 players. The players should be able to choose between an avatar as their icon.</p>
        <div className={'avatarWrapper'}>
          <img src={require('../images/Avatar_design-modified.png')} width={'80'} alt={'Avatar_design-modified'}/>
          <img src={require('../images/Avatar_design-modified (1).png')} width={'80'} alt={'Avatar_design-modified'}/>
          <img src={require('../images/Avatar_design-modified (2).png')} width={'80'} alt={'Avatar_design-modified'}/>
          <img src={require('../images/Avatar_design-modified (3).png')} width={'80'} alt={'Avatar_design-modified'}/>
          <img src={require('../images/Avatar_design-modified (4).png')} width={'80'} alt={'Avatar_design-modified'}/>
          <img src={require('../images/Avatar_design-modified (5).png')} width={'80'} alt={'Avatar_design-modified'}/>
          <img src={require('../images/Avatar_design-modified (6).png')} width={'80'} alt={'Avatar_design-modified'}/>
        </div>

      </div>
    </div>
  )
}

