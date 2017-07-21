/**
 * 创建 store , 整合Provider
 * create by 2017-06
 */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./../reducer/rootReducer";


// let store = createStore(Reducer, {}, compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// ))

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store;
// const configureStore = () => {
// if (module.hot) {
//   // Enable Webpack hot module replacement for reducers
//   module.hot.accept('../reducer/rootReducer.jsx', () => {
//     const nextRootReducer = require('./../reducer/rootReducer.jsx')
//       .default
//     store.replaceReducer(nextRootReducer)
//   })
// }
//   return store
// }
