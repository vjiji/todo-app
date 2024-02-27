// src/redux/modules/counter.js

const ADD_ID = "ADD_ID";

export const addIdCount = () => {
  return { type: ADD_ID };
};

// 초기 상태값
const initialState = 1;

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ID:
      return state + 1;

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
