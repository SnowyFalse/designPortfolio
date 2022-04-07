import * as React from 'react';
import './AboutMe.scss';
import {Timeline} from "./timeline/Timeline";
import {Skills} from "./Skills";
import {Facts} from "./Facts";

export function AboutMe() {
  return (
    <div>
      <div className={'facts'}><Facts/></div>
      <div className={'skills'}><Skills/></div>
      <div className={'timeline'}><Timeline/></div>
    </div>
  )
}