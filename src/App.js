import React, { useEffect, useState, useRef, forwardRef } from 'react';
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

function Child(props,ref){
  return (
    <input type="text" ref={ref}/>
  )
}
Child = forwardRef(Child);
function Parent(){
  let [number,setNumber] = useState(0); 
  const inputRef = useRef();
  function getFocus(){
    inputRef.current.value = 'focus';
    inputRef.current.focus();
  }
  return (
      <>
        <Child ref={inputRef}/>
        <button onClick={()=>setNumber({number:number+1})}>+</button>
        <button onClick={getFocus}>获得焦点</button>
      </>
  )
}

function App() {

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
      <Parent/>
    </div>
  );
}

export default App;
