import React from 'react';
import IncomeEnteries from './components/IncomeEnteries';
import ExpenseEnteries from './components/ExpenseEnteries';
import Summary from './components/Summary';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
         <div className='hello' >Hello World</div>
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Budget Tracker</h1>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <IncomeEnteries />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <ExpenseEnteries />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
            <Summary />
          </div>
        </div>
      </div>
    );
  }
}
