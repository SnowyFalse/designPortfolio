import * as React from 'react';
import './TimelineItem.scss';
import {useState} from "react";
import {Overview} from "./Overview";
import {Details} from "./Details";

export function ItemContent() {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => setExpanded(!expanded);
  const classes = ' ' + (expanded ? 'expanded' : 'collapsed');
  const customerJourneyDetails = expanded ? <Details /> : null;
  // customerJourneyEventItem = itemContent
  return (
    <div className="col">
      <div className={'itemContent' + classes}>
        <Overview expanded={expanded} onClick={handleExpand} />
        {customerJourneyDetails}
      </div>
    </div>
  )
}