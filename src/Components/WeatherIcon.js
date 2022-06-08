import React from 'react'

//use daily WMO codes to determine which icon to use: https://open-meteo.com/en/docs

//https://openweathermap.org/weather-conditions#:~:text=primary.%20An%20example-,How%20to%20get%20icon%20URL,-For%20code%20500
//see 'weathercode' under 'Daily Parameter Definition' and 'WMO Weather interpretation codes (WW)'
//pass the above information down from the parent so you only need to make one API call(?)
//They have both day and night icons--maybe also use sunrise/sunset data to determine which to use.


function WeatherIcon() {

  return (
    <div>WeatherIcon</div>
  )
}

export default WeatherIcon