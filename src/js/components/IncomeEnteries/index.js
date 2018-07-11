import { connect } from 'react-redux';
import IncomeEnteries from './IncomeEnteries';

function mapStoreToProps(store) {
  return {
    description: store.income.description,
    amount: store.income.amount,
    lineItems: store.income.lineItems
  };
}
export default connect(mapStoreToProps)(IncomeEnteries);
