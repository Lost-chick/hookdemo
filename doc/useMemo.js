
let hookStates = [];
let hookIndex = 0;

function useMemo(factory, deps) {
  if(hookStates[hookIndex]) {
    let [lastMemo, lastDeps] = hookStates[hookIndex];
    let same = deps.every((item, index)=>item === lastDeps[index]);

    if(same) {
      hookIndex++;
      return lastMemo
    }else{
      let newMemo = factory();
      hookStates[hookIndex++] = [newMemo, deps]
      return newMemo
    }
  }else{
    let newMemo = factory();
    hookStates[hookIndex++] = [newMemo, deps]
    return newMemo
  }
}