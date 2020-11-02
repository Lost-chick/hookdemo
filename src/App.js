import React, { useEffect, useState, useRef } from 'react';
import Memo from './memo';
import Counter from './context';
import ReduxDemo from './reduxDemo';
import useStateDemo from './useStateDemo';
import Home from './useDebounce';
import ReachBottom from './reachBottom';
import ReachBottomTest from './reachBottomtest';
// import Refresh from './refresh'
// import Gesture from './gesture';
import Number from './NumberFlip';
import CountUp from 'react-countup';
import { Flip } from 'number-flip';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Memo /> */}
      {/* <Counter /> */}
      {/* <ReduxDemo /> */}
      {/* <Home/> */}
      {/* <ReachBottom/> */}
      {/* <Refresh /> */}
      {/* <ReachBottomTest/> */}
      {/* <Gesture /> */}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        增加
      </button>
    </div>
  );
}

export default App;
