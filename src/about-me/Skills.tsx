import * as React from 'react';
import './Skills.scss'
import {useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../i18n/config';
import { useTranslation } from 'react-i18next';

export function Skills() {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    setShowMore(!showMore);
  }
  if(showMore) {
  return (
    <div className={'skillsWrapper'}>
      <h2>{t('skills')}</h2>
      <Trainings/>
      <Technologies/>
      <Hobbies/>
      <div onClick={handleClick} className={'showMore'}><KeyboardArrowUpIcon/>{t('showLess')}</div>
    </div>
  )
  } else {
    return (
      <div className={'skillsWrapper'}>
        <h2>{t('skills')}</h2>
        <Trainings/>
        <div onClick={handleClick} className={'showMore'}><KeyboardArrowDownIcon/>{t('showMore')}</div>
      </div>
    )
  }
}

export function Technologies() {
  const { t } = useTranslation();
  return (
    <>
      <h3>Technologies</h3>
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
          <p>{t('additional')}</p>
          <ul>
            <li>Figma</li>
            <li>Scrum</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </>

  )
}

export function Trainings() {
  const { t } = useTranslation();
  return (
    <>
      <h3>{t('trainings')}</h3>
      <ul>
        <li>{t('ongoing')} Interaction Design - Visual Design, HCI, User Experience</li>
        <li>{t('ongoing')} ISTQB Foundation Level</li>
        <li><a href={'/ITIL_Zertifizierung.pdf'} download>05/2021 ITIL Foundation Level</a></li>
        <li><a href={'/PM_Zertifizierung.pdf'} download>05/2020 IPMA Level D</a></li>
      </ul>
    </>
  )
}

export function Hobbies() {
  const { t } = useTranslation();
  return (
    <div>
      <h3>{t('hobbies')}</h3>
      <ul>
        <li>{t('climbing')}</li>
        <li>{t('gaming')}</li>
        <li>{t('hiking')}</li>
      </ul>
    </div>
  )
}