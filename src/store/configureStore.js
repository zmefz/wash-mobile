import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import storeModules from './storeModules'
import collectReducers from './collectReducers'

export default function configureStore(initialState) {
  const middlewares = [thunk]

  if (__DEV__) {
    middlewares.push(
      createLogger({
        collapsed: true,
      })
    )
  }

  const enhancer = applyMiddleware(...middlewares)
  const rootReducer = collectReducers(storeModules)

  return createStore(rootReducer, initialState, enhancer)
}
