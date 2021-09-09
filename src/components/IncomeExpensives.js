import {GlobalContext} from '../context/GlobalState'
import { useContext } from 'react'

const IncomeExpensives = () => {

    const { transactions } = useContext(GlobalContext); 

    // we get the amounts
    const amounts = transactions.map(transaction => transaction.amount);
    
    //calculate income
    const income = amounts
        .filter(currentAmount => currentAmount > 0) //we filter the positive amount
        .reduce((acumulador, currentItem) => (acumulador += currentItem), 0)  // we acumulate them with reduce
        .toFixed(2); // fixed for putting the point decimals

    // calculate expense
    const expense = ( amounts
        .filter(currentAmount => currentAmount < 0)
        .reduce((acumulador, currentItem) => (acumulador += currentItem), 0) *
        -1
    ).toFixed(2);


    return (
        <div className="inc-exp-container">
            <div>
                <h4>Iconme</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p  className="money minus">{expense}</p>
            </div>
            
        </div>
    )
}

export default IncomeExpensives
