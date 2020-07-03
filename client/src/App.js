import React from 'react';
import { Header } from './Components/Header';
import './App.css';
import { Balance } from './Components/Balance';
import {IncomeExpenses} from './Components/IncomeExpenses';
import { History } from './Components/History';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './contexts/GlobalContext';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <History />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
