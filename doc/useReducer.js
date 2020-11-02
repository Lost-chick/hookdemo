let lastState;
function useReducer(reducer, initialState) {
  lastState = lastState || initialState;

  function dispatch(action) {
    lastState = reducer(lastState, action)
    render()
  }

  return [lastState, dispatch]
}