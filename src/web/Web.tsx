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
        <p className={'headlineDescription'}>Web Design and Development is the field where I have the most experience.</p>
        <p className={'headlineDescription'}> I have been working as a web developer for 3 years and was promoted a web designer in Februar 2022.</p>
      </div>
      <Multivative/>
      <Solid/>
      <Poker/>
      <Portfolio/>
    </div>
  )
}

export function WebHeadline({name, onClick}: {name: string, onClick: () => void}) {
  return (
    <div className={'webHeadline'} onClick={onClick}>
      <span className={'green'}>Web.</span>
      <span className={'blue'}>Design(</span>
      <span className={'white'}>{name}</span>
      <span className={'blue'}>)</span>
    </div>
  )
}
