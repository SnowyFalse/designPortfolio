import React from 'react';
import './Web.scss';
import {Multivative} from "./Multivative";
import {Solid} from "./Solid";
import {Poker} from "./Poker";
import {Portfolio} from "./Portfolio";


export function Web() {
  return(
    <div className={'web'}>
      <div className={'headline'}>
        <span className={'green'}>Web.</span>
        <span className={'blue'}>Design()</span>
        <Multivative/>
        <Solid/>
        <Poker/>
        <Portfolio/>
      </div>
    </div>
  )
}

export function WebHeadline({name, onClick}: {name: string, onClick: () => void}) {
  return (
    <div className={'webHeadline'} onClick={onClick}>
      <span className={'green'}>Game.</span>
      <span className={'blue'}>Design(</span>
      <span className={'white'}>{name}</span>
      <span className={'blue'}>)</span>
    </div>
  )
}
