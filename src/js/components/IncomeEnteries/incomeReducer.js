const defaultState = {
  description: '',
  amount: '',
  lineItems: []
};

export default function IncomeReducer(state = defaultState, action) {
  // the 'state = defaultState' in new ES6 syntax for defining a default value on a param
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_INCOME_DESCRIPTION': {
      return {
        ...state,
        description: payload.description
      };
    }

    case 'UPDATE_INCOME_AMOUNT': {
      return {
        ...state,
        amount: payload.amount
      };
    }

    case 'ADD_INCOME': {
      const { description, amount } = action.payload;
      return {
        description: '',
        amount: '',
        lineItems: [
          ...state.lineItems,
          { description, amount }
        ]
      };
    }

    default: {
      return state;
    }
  }
}
