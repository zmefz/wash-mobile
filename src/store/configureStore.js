import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import Api from '../common/Api'
import storeModules from './storeModules'
import collectReducers from './collectReducers'

export default function configureStore(initialState) {
  const middlewares = []

  if (__DEV__) {
    middlewares.push(
      createLogger({
        collapsed: true,
      })
    )
  }

  middlewares.push(thunk.withExtraArgument({ Api }))

  const enhancer = applyMiddleware(...middlewares)
  const rootReducer = collectReducers(storeModules)

  return createStore(rootReducer, initialState, enhancer)
}
