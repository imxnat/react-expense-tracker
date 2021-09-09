import { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {

     //to pull out data from our global context
     const { transactions } = useContext(GlobalContext);
    // getting all the amount by mapping
     const amounts = transactions.map(transaction => transaction.amount);
    // getting the total amount
     const total = amounts.reduce((acumulador, item) => (acumulador += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}

export default Balance
