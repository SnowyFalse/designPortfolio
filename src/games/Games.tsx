import React from 'react';
import './Games.scss';
import {EmptiWorld} from './EmptiWorld';
import {OceanCommotion} from './OceanCommotion';
import {Awkward} from "./Awkward";


export function Games() {
  return(
    <div className={'games'}>
      <div className={'headline'}>
        <span className={'blue'}>Game.</span>
        <span className={'purple'}>Design()</span>
      </div>
      <OceanCommotion/>
      <EmptiWorld/>
      <Awkward/>
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
