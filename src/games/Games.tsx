import React, { useState } from 'react';
import './Games.scss';
import {EmptiWorld} from './EmptiWorld';
import {OceanCommotion} from './OceanCommotion';


export function Games() {
  console.log('Games rendered')
  return(
    <div>
      <div className={'headline'}>
        <span className={'blue'}>Game.</span>
        <span className={'purple'}>Design()</span>
      </div>
      <OceanCommotion/>
      <EmptiWorld/>
    </div>
  )
}

export function GameHeadline({name, onClick}: {name: string, onClick: () => void}) {
  return (
    <div className={'gameHeadline'} onClick={onClick}>
      <span className={'blue'}>Game.</span>
      <span className={'purple'}>Design(</span>
      <span className={'white'}>{name}</span>
      <span className={'purple'}>)</span>
    </div>
  )
}
