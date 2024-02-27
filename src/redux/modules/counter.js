const ADD_ID = "ADD_ID";

export const addIdCount = () => {
  return { type: ADD_ID };
};

const initialState = 1;

const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ID:
      return state + 1;

    default:
      return state;
  }
};

export default counter;
