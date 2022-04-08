import * as React from 'react';
import './TimelineItem.scss';
import {useState} from "react";
import {Overview} from "./Overview";
import {Details} from "./Details";
import {TimelineItemProjection} from "../AboutMe";

export function ItemContent({item}: {item: TimelineItemProjection}) {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => setExpanded(!expanded);
  const classes = expanded ? 'expanded' : 'collapsed';
  const customerJourneyDetails = expanded ? <Details content={item.content}/> : null;
  return (
    <div className="col">
      <div className={'itemContent ' + classes}>
        <Overview expanded={expanded} onClick={handleExpand} headline={item.headline}/>
        {customerJourneyDetails}
      </div>
    </div>
  )
}