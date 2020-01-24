import React, { useEffect, useCallback } from 'react';
import { observer } from "mobx-react";
import { SliderComponent } from '../../Components';

export const Dayli = observer(({ dayliData }) => {
  console.log('render', dayliData._array)
  useEffect(() => {
    dayliData.addPrevDays(3);
  },[])
  const onClick = useCallback(() => {dayliData.addPrevDays(3)}, []);
  const onClick2 = useCallback(() => {dayliData.fetchFunc(dayliData.daysData)}, []);

  return (
      <div>
        <button onClick={onClick}>click</button>
        <button onClick={onClick2}>click2</button>
        
        {!!dayliData.fullDaysData.length && 
        dayliData.fullDaysData.map((cur, i) => (<div key={cur.date + i}>{cur.date}</div>))}
        {!!dayliData.fullDaysData.length && <SliderComponent data={dayliData.fullDaysData} />}
      </div>
  )
});