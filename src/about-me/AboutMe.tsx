import * as React from 'react';
import './AboutMe.scss';
import {Skills} from "./Skills";
import {Facts} from "./Facts";
import {Education} from "./timeline/Education";
import {Experience} from "./timeline/Experience";
import DownloadIcon from '@mui/icons-material/Download';

export function AboutMe() {
  return (
    <div className={'aboutMe'}>
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
      <div className={'cvDownload'}>
        <h2>Curriculum Vitae</h2>
        <button><a href="./Lebenslauf_Dietinger.pdf" download><DownloadIcon/>Download CV</a></button>
      </div>
      <Education/>
      <Experience/>
    </>
  )
}