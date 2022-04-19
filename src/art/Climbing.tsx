import React, { useState } from 'react';
import {ArtHeadline} from './Art';
import './Climbing.scss';

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
  return (
    <div className={'ArtWrapper'}>
      <div>
        <p>My favourite hobby is climbing, specifically bouldering. I've been climbing since 2013 and also made a dream of mine come true by becoming a certified climbing trainer and teaching children and adults at the climbing gym in Leibnitz.</p>
        <p className={'imageDescription'}>The following image shows a drawing I did of me during a climbing competition.</p>
        <img src={require('../images/climbing.png')} width={'800'} alt={'Avatar_design-modified'}/>
        <p className={'imageDescription'}>As I got into drawing relatively late when I was 16, my skills are not as advanced, but I still want to include some sketches to show my passion and also that I am learning.</p>
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

