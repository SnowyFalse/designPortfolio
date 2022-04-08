import * as React from 'react';
import './AboutMe.scss';
import {Skills} from "./Skills";
import {Facts} from "./Facts";
import {Education} from "./timeline/Education";
import {Experience} from "./timeline/Experience";

export function AboutMe() {
  return (
    <div>
      <div className={'facts'}><Facts/></div>
      <div className={'skills'}><Skills/></div>
      <div className={'timeline'}><Timeline/></div>
    </div>
  )
}

export interface TimelineItemProjection {
  date: string;
  headline: string;
  content: React.ReactElement;
}


export function Timeline() {
  return (
    <>
      <h2>Curriculum Vitae</h2>
      <Education/>
      <Experience/>
    </>
  )
}