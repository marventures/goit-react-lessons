const balanceInitialState = {
  value: 50,
};

// Redux reducer function responsible for managing the state related to the the balance of the application
export const balanceReducer = (state = balanceInitialState, action) => {
  switch (action.type) {
    case 'balance/deposit':
      return {
        ...state,
        value: state.value + action.payload,
      };

    case 'balance/withdraw':
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

// actions -> plain js objects to described what will happen to our application
export const deposit = value => {
  return {
    type: 'balance/deposit',
    payload: value,
  };
};

// actions -> plain js objects to described what will happen to our application
export const withdraw = value => {
  return {
    type: 'balance/withdraw',
    payload: value,
  };
};
