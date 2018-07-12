const defaultState = {
  description: '',
  amount: '',
  lineItems: []
};

export default function ExpenseReducer(state = defaultState, action) {
  // the 'state = defaultState' in new ES6 syntax for defining a default value on a param
  const { type, payload } = action;

  switch (type) {
    // in the case of the Update Description action
    case 'UPDATE_EXPENSE_DESCRIPTION': {
      // we will return an object
      return {
        // with the previous state
        ...state,
        // but we will overwrite the description
        description: payload.description
      };
    }

    // in the case of the Update Amount action
    case 'UPDATE_EXPENSE_AMOUNT': {
      // we return an object
      return {
        // with the previous state
        ...state,
        // but we overwrite the amount
        amount: payload.amount
      };
    }

    // in the case of the Add Expense action
    case 'ADD_EXPENSE': {
// ------> // creates an empty object??????
      const { description, amount } = action.payload;
      // returns and object
      return {
        description: '',
        amount: '',
        lineItems: [
          // with all of the previous line items (objects)
          ...state.lineItems,
          // plus a new object
          { description, amount }
        ]
      };
    }
    default: {
      return state;
    }
  }
}
