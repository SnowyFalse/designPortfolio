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
        <p className={'headlineDescription'}>Gaming has been an important part of my life since I was little.</p>
        <p className={'headlineDescription'}>I always enjoyed playing games of all genres - from indie 2D platformers to open world MMORPGs. In 2019 I started getting into game design and development myself.</p>
      </div>
      <Awkward/>
      <EmptiWorld/>
      <OceanCommotion/>
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
