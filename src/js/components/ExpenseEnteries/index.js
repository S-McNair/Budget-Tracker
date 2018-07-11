import { connect } from 'react-redux';
import ExpenseEnteries from './ExpenseEnteries';

// function takes the Store & returns an Obj that is passed
// to the props of the component
function mapStoreToProps(store) {
  return {
    description: store.expense.description,
    amount: store.expense.amount,
    lineItems: store.expense.lineItems
  };
}
// connect returns a function that is then called
// with the component itself
export default connect(mapStoreToProps)(ExpenseEnteries);
