import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)

// Put away
window.store = store;

sagaMiddleware.run(rootSaga)
