import {TimelineItem} from "./TimelineItem";
import * as React from "react";
import {TimelineItemProjection} from "../AboutMe";
import '../../i18n/config';
import { useTranslation } from 'react-i18next';

export function Education() {
  const { t } = useTranslation();
  const items: TimelineItemProjection[] = [
    {
      date: t('since') + ' 10/2021',
      headline: 'Masters Degree Program "Computer Science and Software Engineering and Management"',
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
      headline: t('campus02'),
      content: <>
        <p>{t('campus02Master')}</p>
        <p>{t('discontinued')}</p>
      </>
    },
    {
      date: '09/2018-06/2021',
      headline: t('bsd'),
      content: <>
        <p>{t('bsd2')}</p>
        <p>{t('bachelorThesis')}</p>
        <p>{t('grade')}</p>
      </>
    },
    {
      date: '2018',
      headline: 'Matura Wirtschaftkundliches Bundesrealgymnasium Graz',
      content: <>
        <p>{t('matura')}</p>
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
      <h3>{t('education')}</h3>
      {content}
    </div>
  )
}