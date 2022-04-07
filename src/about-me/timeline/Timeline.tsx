import * as React from 'react';
import {TimelineItem} from "./TimelineItem";

export function Timeline() {
  return (
    <div>
      <h2>Curriculum Vitae</h2>
      <Test/>
    </div>
  )
}

export function Test() {
 const steps = ['step1', 'step2', 'step3'];


 const content = steps.map((step, index) => {
  let isLastItem = steps.length === index + 1;
  return (
    <TimelineItem isLastItem={isLastItem}/>
  )
 })

  return (
    <div>{content}</div>
  )
}