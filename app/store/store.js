/**
 * 创建 store , 整合Provider
 * create by 2017-06
 */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from "./../reducer/rootReducer.js";


let store = createStore(Reducer, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
export default store;
