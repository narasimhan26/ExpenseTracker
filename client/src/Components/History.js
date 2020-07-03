import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../contexts/GlobalContext';
import Transaction from './Transaction';

export const History = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => <Transaction key={transaction._id} transaction={transaction} />)}
      </ul>
    </div>
  )
}
