import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

const balanceInitialState = {
  value: 50,
};

// -------------------------------------------------------

// Redux Core:
export const deposit = value => {
  return {
    type: 'balance/deposit',
    payload: value,
  };
};

export const withdraw = value => {
  return {
    type: 'balance/withdraw',
    payload: value,
  };
};

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

// -------------------------------------------------------

// Redux Toolkit: createAction()
// export const deposit = createAction('balance/deposit');
// export const withdraw = createAction('balance/withdraw');

// -------------------------------------------------------

// Redux Toolkit: createReducer()
// export const balanceReducer = createReducer(balanceInitialState, builder =>
//   builder
//     .addCase(deposit, (state, action) => {
//       state.value += action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       state.value -= action.payload;
//     })
// );

// -------------------------------------------------------

// Redux Toolkit: createSlice()
// const balanceSlice = createSlice({
//   name: 'balance',
//   initialState: {
//     value: 50,
//   },
//   reducers: {
//     deposit: (state, action) => {
//       state.value += action.payload;
//     },
//     withdraw: (state, action) => {
//       state.value -= action.payload;
//     },
//   },
// });

// export const { deposit, withdraw } = balanceSlice.actions;
// export const balanceReducer = balanceSlice.reducer;
