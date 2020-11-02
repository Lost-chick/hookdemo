let lastCallback;
let lastCallbackDependencies

function useCallback(callback, dependencies) {
  if(lastCallbackDependencies) {
    let changed = !dependencies.every((item, index)=>{
      return item ===lastCallbackDependencies[index]
    })

    if(changed) {
      lastCallback = callback;
      lastCallbackDependencies = dependencies
    }
  }else{
    lastCallback = callback;
    lastCallbackDependencies = dependencies
  }
  return  lastCallback
}