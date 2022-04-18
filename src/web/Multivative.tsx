import React, { useState } from 'react';
import {WebHeadline} from './Web';
import './Multivative.scss';

export function Multivative() {
  const [expandDesign, setExpandDesign] = useState(true);
  const handleClick = () => {
    setExpandDesign(!expandDesign);
  }
  const contentStyling = expandDesign ? 'barM' : ' barM barMClosed';
  const content = expandDesign ? <Content/>: '';
  return (
    <ul className={contentStyling}>
      <li>
        <WebHeadline name={'Multivative'} onClick={handleClick}/>
        {content}
      </li>
      <li/>
    </ul>
  )
}

export function Content() {
  return (
    <div className={'webWrapper'}>
      <div>
        <b>Company project</b>
        <p>Multivative is a startup by Laurenz Fussenegger and Elias Vögel. I am supporting them by desigining and implementing the web frontend.</p>
        <p>I started designing and implementing components in December 2021. For the mock up below, I designed the light grey components that are shown in different varient (default, selected and incomplete) </p>
        <img src={require('../images/Multivative_Designer.jpeg')} width={'800'} alt={'Multivative_Designer'}/>
        <p className={'imageDescription'}>The following screenshots shows components and their variants, that were designed by me.</p>
        <img src={require('../images/Multivative_Components.jpeg')} width={'800'} alt={'Multivative_Components'}/>
        <p className={'imageDescription'}>In the last mock up, a simplified version is designed to help the developers implement the designs iteratively through multiple sprints. The implementation of this view is currently in progress. </p>
        <img src={require('../images/Multivative_JobView.jpeg')} width={'800'} alt={'Multivative_JobView'}/>
      </div>
    </div>
  )
}

