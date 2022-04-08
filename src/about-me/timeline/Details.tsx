import * as React from 'react';
import './Details.scss';

export function Details ({content}: {content: React.ReactElement}) {
  return (
    <div className={'details'}>
      <div className={'info row no-gutters'}>
        <div className={'col contentSpace'}>
          {content}
        </div>
      </div>
    </div>
  )
}
