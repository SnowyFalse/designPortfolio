import {TimelineItem} from "./TimelineItem";
import * as React from "react";
import {TimelineItemProjection} from "../AboutMe";

export function Experience() {
  const items: TimelineItemProjection[] = [
    {
      date: 'Since 02/2022',
      headline: 'UX/UI Designer, DCCS GmbH',
      content: <>
        <h4>Tools and Technologies:</h4>
        <p>Figma</p>
      </>
    },
    {
      date: 'Since 08/2019',
      headline: 'Web Developer, DCCS GmbH',
      content: <>
        <p>Full Stack Web Developer with a strong focus on Front End</p>
        <h4>Tools and Technologies:</h4>
        <ul><li>React Typescript</li> <li>SCSS</li><li>Java</li><li>Spring Boot</li> <li>Git</li><li>Rest</li><li>Jest/Enzyme</li></ul>
      </>
    },
    {
      date: '08/2017',
      headline: 'Internship, DCCS GmbH',
      content:<>
        <h4>Tools and Technologies:</h4>
        <ul><li>MS Sharepoint</li> <li>internal QM Tools</li></ul>
      </>
    }
  ]


  const content = items.map((item, index) => {
    let isLastItem = items.length === index + 1;
    return (
      <TimelineItem isLastItem={isLastItem} item={item}/>
    )
  })

  return (
    <div>
      <h3>Work Experience</h3>
      {content}
    </div>
  )
}