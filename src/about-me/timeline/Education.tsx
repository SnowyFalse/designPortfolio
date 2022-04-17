import {TimelineItem} from "./TimelineItem";
import * as React from "react";
import {TimelineItemProjection} from "../AboutMe";

export function Education() {
  const items: TimelineItemProjection[] = [
    {
      date: 'Since 10/2021',
      headline: 'Masters Degree Program "Computer Science and Software Engineering and Management',
      content: <>
        <p>Computer Science, University of Technology </p>
        <ul>
          <li>Major: Games Engineering </li>
          <li>Minor: Interactive and Visual Information Systems</li>
        </ul>
        <p>Software Engineering and Management, University of Technology </p>
        <ul>
          <li>Major: Interactive and Visual Information Systems</li>
          <li>Minor: Cognition and Behaviour</li>
        </ul>
      </>
    },
    {
      date: '09/2021-02/2022',
      headline: 'Masters Degree Program "IT und Wirtschaftsinformatik',
      content: <>
        <p>IT und Wirtschaftsinformatik, University of Applied Science Campus 02 </p>
        <p>Discontinued</p></>
    },
    {
      date: '2018-2021',
      headline: 'Dual Bachelors Degree Program "Business Software Development"',
      content: <>
        <p>Business Software Development, University of Applied Science Campus 02</p>
        <p>Bachelor Thesis: Usage of gamification in agile software development</p>
        <p>Grade on bachelor thesis and exam: 1</p>
      </>
    },
    {
      date: '2018',
      headline: 'Matura Wirtschaftkundliches Bundesrealgymnasium Graz',
      content: <>
        <p>Matura with Distinction</p>
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
      <h3>Education</h3>
      {content}
    </div>
  )
}