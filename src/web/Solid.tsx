import React, { useState } from 'react';
import {WebHeadline} from './Web';
import './Solid.scss';

export function Solid() {
  const [expandGame, setExpandGame] = useState(true);
  const handleClick = () => {
    setExpandGame(!expandGame);
  }
  const contentStyling = expandGame ? 'barS' : ' barS barSClosed';
  const content = expandGame ? <Content/>: '';
  return (
    <ul className={contentStyling}>
      <li>
        <WebHeadline name={'Solid'} onClick={handleClick}/>
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
        <p>Solid is the name of the project I am currenlty working on in DCCS. The project was started in 2018, I joined the team in October 2019 as a developers. As of February 2022 the team was split into two and I am responsible for the UI/UX designs of one team.</p>
        <p>As the project is already running for four years the challenge of the designs is to display the massive amount of data correctly without missing any connections to other parts of the application.</p>
        <p className={'imageDescription'}>The mockup below shows the feature of simulating a user. This tool is used for developers only to easily create test data. The design I created is the modal dialog. For legal reasons certain data had to be blurred</p>
        <img src={require('../images/Solid_user.jpeg')} width={'800'} alt={'Solid_user'}/>
        <p className={'imageDescription'}>The permission table is a feature designed fully by me. It is used for easy configuration of a role to permission mapping. The focus on this design was to enable a fast implementation of the feature.</p>
        <img src={require('../images/Solid_Permissiontable.jpeg')} width={'800'} alt={'Permission_table'}/>
        <p className={'imageDescription'}>When designing for Solid, I need to keep in mind to use specific design requirements such as using a predefined scrollbar. However, for the designs I did recently, I had more freedom than usually as the features are mainly used by developers.</p>
      </div>
    </div>
  )
}

