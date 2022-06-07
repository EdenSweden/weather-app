import React from 'react';

const boxStyles = {
    'backgroundColor': 'white', 
    'height': '300px', 
    'width': '600px',
    'borderRadius': '15px'
}

export default function TestBox() {
  return (
<>
<div style={boxStyles}>
    <p style={{'color': 'black'}}>Hello World</p>
</div>
</>
  )
}
