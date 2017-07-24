/**
 * 这个方法是用来整合所有的 combineReducers => Reducer
 * @type {[type]}
 */

import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import inforReducer from "./inforReducer";
import inforItemReducer from "./inforItemReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  infor: inforReducer,
  item: inforItemReducer
})
export default rootReducer;
