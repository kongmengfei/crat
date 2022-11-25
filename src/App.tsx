import React, { useEffect, useState } from 'react';
import date from 'date-and-time';

import jietu from './images/Screenshot.jpg';

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

      <img src={jietu} alt="jietu" style={{ width: '100%' }} />
      <div className='clickbox'>
        <div className='time1'>{time1}</div>
      </div>
    </div>
  );
}

export default App;
