import React from 'react';

// import all the action creators
import {
    updateExpenseDescription,
    updateExpenseAmount,
    addExpense
} from './expenseActions';

export default class ExpenseEnteries extends React.Component {
    constructor(props) {
        super(props);

        //bind these methods to the context of the components
        // this only has to be done because these methods are
        //called back by event emitters (which lose context)
        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handleAmountInput = this.handleAmountInput.bind(this);
        this.handleAddExpense = this.handleAddExpense.bind(this);

    }

    handleDescriptionInput(event) {
        //dispatch provided by connect()
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateExpenseDescription(value));
    }

    handleAmountInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateExpenseAmount(value));
    }

    handleAddExpense() {
        const { description, amount, dispatch } = this.props;
        dispatch(addExpense(description, amount));
    }

    render() {
        //values provided by connect
        const { description, amount, lineItems } = this.props;
        return (
            <div className='card border-danger mb-3'>
                <div className='card-header text-white bg-danger'>Expense Enteries</div>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='expense-description'>Description</label>
                            <input type='text'
                                className='form-control'
                                id='expense-description'
                                value={ description }
                                onChange={ this.handleDescriptionInput } />
                        </div>
                        <div className='form-group' >
                            <label htmlFor='expense-amount' >Amount</label>
                            <div className='input-group'>
                                <span className='input-group-addon'>$</span>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='expense-amount'
                                    value={ amount }
                                    onChange={ this.handleAmountInput } />
                            </div>
                        </div>
                        <button type='button'
                                className='btn btn-danger col-12 mb-5'
                                onClick={ this.handleAddExpense } >
                            + Add Expense
                          </button>
                        <table className='table table-sm table-hover'>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th> Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lineItems.map(lineItem => (
                                        <tr>
                                            <td>{ lineItem.description }</td>
                                            <td>${ lineItem.amount.toFixed(2) }</td>
                                        </tr>
                                    ))
                                }


                                {/* <tr>
                      <td>Rent</td>
                      <td>$1,500.00</td>
                      </tr> */}
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}
