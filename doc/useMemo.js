let lastMemo;
let lastMeMoDependencies

function useMemo(callback, dependencies) {
  if(lastMeMoDependencies) {
    let changed = !dependencies.every((item, index)=>{
      return item ===lastMeMoDependencies[index]
    })

    if(changed) {
      lastMemo = callback();
      lastMeMoDependencies = dependencies
    }
  }else{
    lastMemo = callback();
    lastMeMoDependencies = dependencies
  }
  return  lastCallback
}