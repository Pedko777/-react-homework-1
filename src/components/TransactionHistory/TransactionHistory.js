import React from 'react';
import transactions from '../../data/transaction.json';
import styles from './transactionHistory.module.css';

const { table } = styles;

const TransactionHistory = () => {
  return (
    <table className={table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionHistoryBody transactions={transactions} />
    </table>
  );
};

const TransactionHistoryBody = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(transaction => (
        <TransactionHistoryBodyItem key={transaction.id} data={transaction} />
      ))}
    </tbody>
  );
};

const TransactionHistoryBodyItem = ({ data: { amount, currency, type } }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistory;
