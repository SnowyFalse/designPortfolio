import * as React from 'react';
import './Skills.scss'
import {useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export function Skills() {
  return (
    <div className={'skillsWrapper'}>
      <h2>Skills</h2>
      <Technologies/>
      <Trainings/>
    </div>
  )
}

export function Technologies() {
  return (
    <div className={'technologiesWrapper'}>
      <div className={'topic'}>
        <p>Frontend</p>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Javascript</li>
          <li>CSS/SCSS</li>
          <li>Jest/Enzyme</li>
        </ul>
      </div>
      <div className={'topic'}>
        <p>Backend</p>
        <ul>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>Rest</li>
          <li>JUnit</li>
          <li>Scripting (Shell)</li>
          <li>Gradle</li>
        </ul>
      </div>
      <div className={'topic'}>
        <p>Additional</p>
        <ul>
          <li>Figma</li>
          <li>Scrum</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  )
}

export function Trainings() {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    setShowMore(!showMore);
  }
  if(showMore) {
    return (
      <>
        <h3>Trainings/Certifications</h3>
        <ul>
          <li>[ongoing] Interaction Design - Visual Design, HCI, User Experience</li>
          <li>[ongoing] ISTQB Foundation Level</li>
          <li>05/2021 ITIL Foundation Level</li>
          <li>05/2020 IPMA Level D</li>
        </ul>
        <Hobbies/>
        <div onClick={handleClick} className={'showMore'}><KeyboardArrowUpIcon/>Show Less</div>
      </>
    )
  } else {
    return (
        <div onClick={handleClick} className={'showMore'}><KeyboardArrowDownIcon/>Show More</div>
    )
  }

}

export function Hobbies() {
  return (
    <div>
      <h3>Hobbies</h3>
      <ul>
        <li>Climbing - I am a bouldering instructor since March 2018</li>
        <li>Gaming - Games of all genres, but I am really digging (indie) games with a good art style and a nice story</li>
        <li>Hiking - I like going on hikes with friends and my dog</li>
      </ul>
    </div>
  )
}