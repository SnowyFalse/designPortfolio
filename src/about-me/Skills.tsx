import * as React from 'react';
import './Skills.scss'

export function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <Technologies/>
      <h3>Trainings/Certifications</h3>
      <ul>
        <li>[ongoing] Interaction Design - Visual Design, HCI, User Experience</li>
        <li>[ongoing] ISTQB Foundation Level</li>
        <li>05/2021 ITIL Foundation Level</li>
        <li>05/2020 IPMA Level D</li>
      </ul>
    </div>
  )
}

export function Technologies() {
  return (
    <div className={'skillsWrapper'}>
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