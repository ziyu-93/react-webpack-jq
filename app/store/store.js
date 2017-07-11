/**
 * 创建 store , 整合Provider
 * create by 2017-06
 */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from "./../reducer/rootReducer.js";


// let store = createStore(Reducer, {}, compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// ))

const configureStore = (preloadedState) => {
  const store = createStore(
    Reducer,
    applyMiddleware(thunk),
    preloadedState
  )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
        .default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
export default configureStore;
