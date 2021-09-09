import { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
    //to pull out data from our global context
    const { transactions } = useContext(GlobalContext); 

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    )
}

export default TransactionList
