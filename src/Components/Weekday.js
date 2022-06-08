import React from 'react'

export default function Weekday() {
    const todaysDate = new Date();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const currentWeekDay = daysOfWeek[todaysDate.getDay()];

  return (
    <div>{currentWeekDay}</div>
  )
}
