import { combineReducers } from 'redux'

export default function collectReducers(storeModules) {
  const reducers = storeModules.reduce((hash, module) => {
    hash[module.name] = module.reducer
    return hash
  }, {})

  return combineReducers(reducers)
}
