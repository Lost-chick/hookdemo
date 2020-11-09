let lastState=[];
let stateIndex=0;
function useState(initState) {
  lastState[stateIndex] = lastState[stateIndex] || initState;
  const currentIndex = stateIndex
  function setState(newState) {
    lastState[currentIndex] = newState
    render()
  }
  return [lastState[stateIndex++], setState]
}