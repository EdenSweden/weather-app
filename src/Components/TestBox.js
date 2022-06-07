import React from 'react';
import axios from 'axios';

const boxStyles = {
    'backgroundColor': 'white', 
    'height': '300px', 
    'width': '600px',
    'borderRadius': '15px'
}

const getData = () => {
    //only gets max daily temp for now?
    //Minneapolis weather
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=44.98&longitude=-93.25&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago')
    .then(res => {
        let todaysMax = res.data.daily.temperature_2m_max[0];
        console.log(todaysMax);
        return todaysMax;
        
    })
    .catch(err => console.error(err))
    //always executes:
    /*.then(data => console.log('data: ' + data));*/
}

const displayMax = async () => {
    let result = await getData();
    console.log('typeof result: ' + typeof result);
    ;
}

console.log('displayMax():')
console.log(displayMax());

export default function TestBox() {
  return (
<>
<div style={boxStyles}>
    <p style={{'color': 'black'}}>Hello World</p>
    {/*<p style={{'color': 'black'}}>{result}</p>*/}
</div>
</>
  )
}
