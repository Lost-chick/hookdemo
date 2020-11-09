let lastEffectDependencies;

function useEffect(callback, dependencies) {
  if (lastEffectDependencies) {
    let changed = !dependencies.every((item, index) => {
      return item === lastEffectDependencies[index];
    });
    if (changed) {
      setTimeout(callback());
      lastEffectDependencies = dependencies;
    }
  } else {
    setTimeout(callback())
    lastEffectDependencies = dependencies;
  }
}
