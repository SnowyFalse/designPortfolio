import * as React from 'react';
import './LandingPage.scss';

export function LandingPage() {
  return (
    <div className={'landingPage'}>
      <div className={'leftSide'}>
        <img src={require('../images/background.jpeg')} alt={'background'}/>
      </div>
      <div className={'rightSide'}>
        <div className={'contentWrapper'}>
          <span>Theresa Dietinger</span>
        </div>
        <div className={'categories'}>
          <div className={'categoriesWrapper'}>
            <div className={'upper'}>Web</div>
            <div className={'border'}/>
            <div className={'lower'}>Game</div>
          </div>
          <div className={'border'}/>
          <div className={'categoriesWrapper'}>
            <div className={'upper'}>Dev</div>
            <div className={'border'}/>
            <div className={'lower'}>Design</div>
          </div>
        </div>
      </div>
    </div>
  )
}