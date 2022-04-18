import React from 'react';
import './Art.scss';
import {AvatarDesign} from "./AvatarDesign";


export function Art() {
  return(
    <div className={'art'}>
      <div className={'headline'}>
        <span className={'pink'}>Art.</span>
        <span className={'deepPurple'}>Projects()</span>
        <AvatarDesign/>
      </div>
    </div>
  )
}

export function ArtHeadline({name, onClick}: {name: string, onClick: () => void}) {
  return (
    <div className={'artHeadline'} onClick={onClick}>
      <span className={'pink'}>Art.</span>
      <span className={'deepPurple'}>Projects(</span>
      <span className={'white'}>{name}</span>
      <span className={'deepPurple'}>)</span>
    </div>
  )
}
