/**
 * Reducer 是要引入 Action 也就是变化，做出应对，改变数据，变化页面结构。
 */

import * as types from "./../action/action"

const initState = {

}

let homeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOAD_MAIN_LIST:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        isLoadMore: action.isLoadMore,
        isRefreshing: action.jsRefreshing
      });
    case types.GET_MAIN_LIST:
      return Object.assign({}, state, {

      });

    default:
      return state;
  }
}

export default homeReducer;
