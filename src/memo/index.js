import React,{useState,memo,useMemo,useCallback, useReducer} from 'react';

// function SubCounter({onClick,data}){
//     console.log('SubCounter render');
//     return (
//         <button onClick={onClick}>{data.number}</button>
//     )
// }
// SubCounter = memo(SubCounter);
// export  default  function Counter6(){
//     console.log('Counter render');
//     const [name,setName]= useState('计数器');
//     const [number,setNumber] = useState(0);
//     const data ={number};
//     const addClick = ()=>{
//         setNumber(number+1);
//     };
//     return (
//         <>
//             <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//             <SubCounter data={data} onClick={addClick}/>
//         </>
//     )
// }
const initialState = 0;
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { number: state.number + 1 };
    case 'decrement':
      return { number: state.number - 1 };
    default:
      throw new Error();
  }
}
function init(initialState) {
  return { number: initialState };
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <>
      Count: {state.number}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

export default Counter
