import React, { useState } from 'react';
import axios from 'axios';
import DailyBox from './DailyBox';

const boxStyles = {
    'backgroundColor': 'white', 
    'height': '300px', 
    'width': '600px',
    'borderRadius': '15px',
    'color': 'black'
}

/*const getData = async () => {
    //Minneapolis weather:
    try {
        const result = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=44.98&longitude=-93.25&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago')
        console.log('result from try block:'); 
        console.log(result);
        return result;
    }
    catch (err) {
        console.error('err from catch block:' + err);
    }
}

const resultData = getData()
.then(res => {
    console.log('res from result: ');
    console.log(res);
    console.log('max for today:');
    console.log(res.data.daily.temperature_2m_max[0]);
    return res.json();
})
.catch(err => console.error('err from result: ' + err));

console.log('resultData:'); // returns a promise only
console.log(resultData);*/

const dailyBoxStyles = {
    'display': 'grid',
    'grid-template-rows': '1fr 5fr 1fr'
}

export default function ContainerBox() {

    const [isLoading, setIsLoading] = useState(true);
    

  return (
<>
<div style={boxStyles}>
    <DailyBox style={dailyBoxStyles} />
</div>
</>
  )
}
