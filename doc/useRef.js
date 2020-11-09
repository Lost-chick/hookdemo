let hookStates = [];
let hookIndex = 0;

function useRef(initialState) {
  hookStates[hookIndex] = hookStates[hookIndex] || {current: initialState};
  return hookStates[hookIndex++]
}