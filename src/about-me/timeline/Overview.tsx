import * as React from 'react';
import './Overview.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function Overview({ onClick, expanded, headline }: {expanded: boolean, onClick?: () => void, headline: string}) {
  let additionalClasses ='event successfulCJ customerJourneyEventOverview';
  additionalClasses += expanded ? ' expanded' : ' collapsed';
  return (
    <div className={additionalClasses + ' row no-gutters'} onClick={onClick}>
      <Content headline={headline}/>
      <Expander expanded={expanded}/>
    </div>
  )
}

export function Content({headline}: {headline: string}) {
  return (
    <div className={'col data centeredEvent'}>
      <div className={'name row no-gutters'}>
        {headline}
      </div>
    </div>
  )
}

export function Expander({ expanded }: { expanded: boolean }) {
  const icon = expanded ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>;
  return (
    <div className={'expander col-auto'}>
      <i className={'material-icons'}>{icon}</i>
    </div>
  );
}