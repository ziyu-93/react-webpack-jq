import * as types from './../action/action.jsx';


let inforReducer = (state = {}, action) => {
  switch (action.type) {
    case types.INFOR_PAGE:
      return Object.assign({}, state, {
        item: action.item
      });
    default:
      return state;
  }
}

export default inforReducer;
