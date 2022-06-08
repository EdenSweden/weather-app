import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DailyBox from './DailyBox';

const boxStyles = {
    'backgroundColor': 'white', 
    'height': '300px', 
    'width': '600px',
    'borderRadius': '15px',
    'color': 'black'
}

const dailyBoxStyles = {
    height: '100%'
}

export default function ContainerBox() {


    const [isLoading, setIsLoading] = useState(true);
    const [displayData, setDisplayData] = useState({weatherIcon: 'weatherIcon', maxTemp: 'maxTemp', minTemp: 'minTemp'});

    //make axios get request here because there will be multiple DailyBox children later that need to receive data from this single API call.
    useEffect(()=>{
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=44.98&longitude=-93.25&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago')
        .then(res => {
            let maxTemp = res.data.daily.temperature_2m_max[0];
            let minTemp = res.data.daily.temperature_2m_min[0];
            setDisplayData({weatherIcon: 'weatherIcon',
             maxTemp: maxTemp, 
             minTemp: minTemp});
             setIsLoading(false);
        })
        .catch(err => console.error('error from get request: ' + err));

    }, []);

  return (
<>
<div style={boxStyles}>
    <DailyBox style={dailyBoxStyles} displayData={displayData} loading={isLoading} />
</div>
</>
  )
}
