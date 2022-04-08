import * as React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import './TimelineItem.scss';
import {ItemContent} from "./ItemContent";
import {TimelineItemProjection} from "../AboutMe";

export function TimelineItem({isLastItem, item}: {isLastItem: boolean, item: TimelineItemProjection}) {
  return (
    <div className={'successfulEvent'}>
      <div className={'row successfulCJ'}>
        <ItemDate date={item.date}/>
        <ItemIcon isLastItem={isLastItem}/>
        <ItemContent item={item}/>
      </div>
    </div>
  )
}

export function ItemDate({date}: {date: string}) {
  return (
    <div className={'col-auto timestamp'}>
      {date}
    </div>
  )
}

export function ItemIcon({isLastItem}: {isLastItem: boolean}) {
  const classes = isLastItem ? 'icon lastEvent' : 'icon';

  return (
    <div className={classes}>
      <CircleIcon/>
    </div>
  );
}
