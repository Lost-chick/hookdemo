
let hookStates=[];
let hookIndex=0;

function useReducer(reducer, initialState, init) {
  hookStates[hookIndex] = hookStates[hookIndex] || (init ? init(initialState) : initialState);
  const currentIndex = hookIndex;

  function dispatch(action) {
    hookStates[currentIndex] = reducer? reducer(hookStates[hookIndex], action): action;
  }

  return [hookStates[hookIndex++], dispatch]
}