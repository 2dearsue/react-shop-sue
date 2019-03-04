import { createStore, applyMiddleware } from 'redux';

// Initialize state
const initialState = {
  totalCost: 0,
  counterBeginner: 0,
  costBeginner: 0,
  counterAverage: 0,
  costAverage: 0,
  counterAdvanced: 0,
  costAdvanced: 0,
  isRedirectSet: false,
  // logout: false
     };

//Define reducer and pass initial state there, just return state in any case
const reducer = (state = initialState, action) => {
  const updatedState = {...state};

  switch(action.type) {
    case 'BEG':
      updatedState.totalCost = state.totalCost + 20;
      updatedState.costBeginner = state.costBeginner + 20;
      updatedState.counterBeginner = state.counterBeginner + 1;
      return updatedState;

      case 'DECBEG':
        updatedState.totalCost = state.totalCost - 20;
        updatedState.costBeginner = state.costBeginner - 20;
        updatedState.counterBeginner = state.counterBeginner - 1;
        return updatedState;

    case 'AVE':
      updatedState.totalCost = state.totalCost + 30;
      updatedState.costAverage = state.costAverage + 30;
      updatedState.counterAverage = state.counterAverage + 1;
      return updatedState;

    case 'DECAVE':
      updatedState.totalCost = state.totalCost - 30;
      updatedState.costAverage = state.costAverage - 30;
      updatedState.counterAverage = state.counterAverage - 1;
      return updatedState;

    case 'ADV':
      updatedState.totalCost = state.totalCost + 40;
      updatedState.costAdvanced = state.costAdvanced + 40;
      updatedState.counterAdvanced = state.counterAdvanced + 1;
      return updatedState;

    case 'DECADV':
      updatedState.totalCost = state.totalCost - 40;
      updatedState.costAdvanced = state.costAdvanced - 40;
      updatedState.counterAdvanced = state.counterAdvanced - 1;
      return updatedState;

    // case 'LOGOUT':
    //   updatedState.logout = true;
    //   return updatedState;

    case 'REDIRECT':
      updatedState.isRedirectSet = true;
      return updatedState;

    default:
    return state;
  }
}

// define the increment action. These are action creators

export const incrementBeginner = () => {
  return {type: 'BEG'}
}

export const decrementBeginner = () => {
  return {type: 'DECBEG'}
}

export const incrementAverage = () => {
  return {type: 'AVE'}
}

export const decrementAverage = () => {
  return {type: 'DECAVE'}
}

export const incrementAdvanced = () => {
  return {type: 'ADV'}
}

export const decrementAdvanced = () => {
  return {type: 'DECADV'}
}

// export const logout = () => {
//   return {type: 'LOGOUT'}
// }
const customMiddleWare = store => next => action => {
  if(action.type === 'REDIRECT') {
    return setTimeout(() => {
        store.dispatch({ type: 'REDIRECT' })
      }, 5000)
  }
  next(action);
}

// export const isRedirectSet = () => {
//   return setTimeout(() => {
//     store.dispatch({ type: 'REDIRECT' })
//   }, 5000)
// }

// create the store with this specific manager
export const store = createStore(reducer, applyMiddleware(customMiddleWare));

// Get the current state
console.log(store.getState());

store.dispatch(incrementBeginner());
store.dispatch(decrementBeginner());
store.dispatch(incrementAverage());
store.dispatch(decrementAverage());
store.dispatch(incrementAdvanced());
store.dispatch(decrementAdvanced());
// store.dispatch(logout());
  // store.dispatch(isRedirectSet());

  // setTimeout(() => {
  //   store.dispatch({ type: 'REDIRECT' })
  // }, 5000)




// const decrementByNum = (num) => {
//   return {type: 'DECBYNUM', payload: num}
// }
//
// const setAuthToFalse = (isAuth) => {
//   return {type: 'AUTH', isAuth: isAuth}
// }
