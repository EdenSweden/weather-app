import React from 'react';
import Weekday from './Weekday';
import WeatherIcon from './WeatherIcon';
import MaxTemp from './MaxTemp';
import MinTemp from './MinTemp';

export default function DailyBox({loading, displayData }) {

  return (
    <>
    <Weekday />
    { loading ? 'Loading...' : 
    <div>
      <WeatherIcon weatherIcon={displayData.weatherIcon} />
      <div style={{'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-around'}}>
          <MaxTemp maxTemp={displayData.maxTemp} />
          <MinTemp minTemp={displayData.minTemp}/>
      </div>
    </div>}

    </>
  )
}
