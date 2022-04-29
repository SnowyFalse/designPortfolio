import {TimelineItem} from "./TimelineItem";
import * as React from "react";
import {TimelineItemProjection} from "../AboutMe";
import '../../i18n/config';
import { useTranslation } from 'react-i18next';

export function Experience() {
  const { t } = useTranslation();
  const items: TimelineItemProjection[] = [
    {
      date: t('since') + ' 02/2022',
      headline: 'UX/UI Designer, DCCS GmbH',
      content: <>
        <h4>{t('tools')}</h4>
        <ul><li>Figma</li></ul>
      </>
    },
    {
      date: t('since') + ' 08/2019',
      headline: 'Web Developer, DCCS GmbH',
      content: <>
        <p>{t('frontEnd')}</p>
        <h4>{t('tools')}</h4>
        <ul><li>React Typescript</li> <li>SCSS</li><li>Java</li><li>Spring Boot</li> <li>Git</li><li>Rest</li><li>Jest/Enzyme</li></ul>
      </>
    },
    {
      date: '08/2017',
      headline: t('internship'),
      content:<>
        <h4>{t('tools')}</h4>
        <ul><li>MS Sharepoint</li> <li>{t('internal')} QM Tools</li></ul>
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
      <h3>{t('work')}</h3>
      {content}
    </div>
  )
}