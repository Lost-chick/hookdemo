import React, { useContext } from 'react';
import { Context } from '../store/redux';

export default function ReduxDemo() {
  const { state, dispatch } = useContext(Context);
  console.log(state);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'INSCRMENT',payload: 2 })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload:1 })}>-</button>
    </div>
  );
}
