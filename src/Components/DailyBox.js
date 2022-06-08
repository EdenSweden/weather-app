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
    <div>
        <MaxTemp /> 
        <MinTemp />
    </div>
    </>
  )
}
