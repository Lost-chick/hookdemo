import React from 'react';
import Memo from './memo'
import Counter from './context'
import ReduxDemo from './reduxDemo'
import useStateDemo from './useStateDemo'
import Home from './useDebounce'
import ReachBottom from './reachBottom';
// import Refresh from './refresh'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Memo /> */}
      {/* <Counter /> */}
      {/* <ReduxDemo /> */}
      {/* <Home/> */}
      <ReachBottom/>
      {/* <Refresh /> */}
    </div>
  );
}

export default App;
