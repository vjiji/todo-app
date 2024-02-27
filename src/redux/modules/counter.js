// src/redux/modules/counter.js

const ADD_NUM = "ADD_NUM";

export const addNum = (payload) => {
  return { type: ADD_NUM, payload: payload };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUM:
      return {
        number: state.number + action.payload,
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
