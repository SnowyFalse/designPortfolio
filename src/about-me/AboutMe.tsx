import * as React from 'react';
import './AboutMe.scss';

export function AboutMe() {
  return (
    <div className={'wrapper'}>
      <div className={'leftSide'}>
        <div className={'facts'}>
          Facts
        </div>
        <div className={'skills'}>
          Skills
        </div>
      </div>
      <div className={'rightSide'}>
        <div className={'timeLine'}>
          Timeline
        </div>
      </div>
    </div>
  )
}