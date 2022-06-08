import React from 'react';
import Weekday from './Weekday';
import WeatherIcon from './WeatherIcon';
import MaxTemp from './MaxTemp';
import MinTemp from './MinTemp';

export default function DailyBox() {
  return (
    <>
    <Weekday />
    <WeatherIcon />
    <div style={{'display': 'flex', 'flex-direction': 'row', 'justify-content': 'space-around'}}>
        <MaxTemp /> 
        <MinTemp />
    </div>
    </>
  )
}
