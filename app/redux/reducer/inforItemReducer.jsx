import * as types from './../action/action.jsx';

let inforItemReducer = (state = {}, action) => {
  switch (action.type) {
    case types.INFOR_ITEM:
      console.log(123);
      return Object.assign({}, state, {
        item: action.item
      });
    default:
      return state;
  }
}

export default inforItemReducer;
