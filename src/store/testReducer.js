const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// Action creators
// these are just convience functions, and instead of returning an object inside the function in the sandbox, we are doing it here so we just call these functions with the payload as the argument.
export function increment(amount) {
  return {
    type: INCREMENT_COUNTER,
    payload: amount,
  };
}

export function decrement(amount) {
  return {
    type: DECREMENT_COUNTER,
    payload: amount,
  };
}

// redux can store objects or arrays.
const initialState = {
  data: 42,
};

// Reducers are functions that take the current state and an actiion as an arugment, and return a new state.
// (state, action) => newState

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data * action.payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - action.payload,
      };
    default:
      return state;
  }
}
