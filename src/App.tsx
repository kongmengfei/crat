import React, { useEffect, useState } from 'react';
import date from 'date-and-time';

import jietu from './images/Screenshot.jpg';

let [time2, time3] = GetTime23();

function App() {
  const [time1, settime1] = useState<string>('2022-11-16 08:51:58');

  useEffect(() => {
    let intervalID = setInterval(function () {
      let now = new Date();
      let s = date.format(now, 'YYYY-MM-DD HH:mm:ss');
      settime1(s);
    }, 1e3);

    return () => { clearInterval(intervalID) };
  }, []);

  return (
    <div className='app'>
      <img src={jietu} alt="jietu" className='jietu' />
      <div className='clickbox'>
        <div className='time1'>{time1}</div>
        <div className='time2'>{time2}</div>
        <div className='time3'>{time3}</div>
      </div>
    </div>
  );
}

function GetTime23() {
  let time2S: string | null = localStorage.getItem('time2');
  let time3S: string;
  let time2D: Date;
  let current: Date = new Date();

  if (time2S) {
    time2D = date.parse(time2S, 'YYYY-MM-DD HH:mm:ss', false);
    if (current > date.addHours(time2D, 8)) {
      time2D = date.addHours(current, (Math.random() * (72 - 24) + 24) * -1);
    }
  } else {
    time2D = date.addHours(current, (Math.random() * (72 - 24) + 24) * -1);
    time2S = date.format(time2D, 'YYYY-MM-DD HH:mm:ss');

    localStorage.setItem('time2', time2S);
  }
  time3S = date.format(date.addHours(time2D, 7.24), 'YYYY-MM-DD HH:mm:ss');

  return [time2S, time3S];
}

export default App;
