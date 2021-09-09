import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IconmeExpenses from './components/IncomeExpensives'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider className="App">
      
        <Header />
        <div className="container" >
          <Balance />
          <IconmeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>

    </GlobalProvider>
  );
}

export default App;
