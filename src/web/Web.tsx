import React from 'react';
import './Web.scss';


export function Web() {
  return(
    <div className={'games'}>
      <div className={'headline'}>
        <span className={'green'}>Web.</span>
        <span className={'blue'}>Design()</span>
      </div>
    </div>
  )
}

export function WebHeadline({name, onClick}: {name: string, onClick: () => void}) {
  return (
    <div className={'webHeadline'} onClick={onClick}>
      <span className={'blue'}>Game.</span>
      <span className={'purple'}>Design(</span>
      <span className={'white'}>{name}</span>
      <span className={'purple'}>)</span>
    </div>
  )
}
