import * as React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import './TimelineItem.scss';

export function TimelineItem({isLastItem}: {isLastItem: boolean}) {
  return (
    <div className={'successfulEvent'}>
      <div className={'row successfulCJ'}>
      <ItemDate/>
      <ItemIcon isLastItem={isLastItem}/>
      <ItemContent/>
      </div>
    </div>
  )
}

export function ItemDate() {
  return (
    <div className={'col-auto timestamp'}>
      Since 07.04.2022
    </div>
  )
}

export function ItemIcon({isLastItem}: {isLastItem: boolean}) {
  let classes = '';
  classes += 'icon';
  classes += isLastItem ? ' ' + 'lastEvent' : '';


  return (
    <div className={classes}>
      <CircleIcon/>
    </div>
  );
}

export function ItemContent() {
  return (
    <div>
      I am content
    </div>
  )
}