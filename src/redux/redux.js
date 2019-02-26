import { createStore } from 'redux';

const initialState = { }

const reducer = (state = initialState, action) => {
  const updatedState = {...state};

  switch (action.type) {
    case '':

    return updatedState;

    default:
    return state;
  }
}

export const store = createStore(reducer);
