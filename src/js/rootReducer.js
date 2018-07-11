import { combineReducers } from 'redux';
import expenseReducer from './components/ExpenseEnteries/expenseReducer';
import incomeReducer from './components/IncomeEnteries/incomeReducer';

const rootReducer = combineReducers({
  expense: expenseReducer,
  income: incomeReducer
});

export default rootReducer;
