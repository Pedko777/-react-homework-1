import React from 'react';
import users from './data/user.json';
import friends from './data/friends.json';
// import transactions from './data/transaction.json'
import {Profile} from './components/Profile/Profile';
import {Statistic} from './components/Statistics/Statistics';
import FriendsList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';




const App =() => {
  // console.log(statistics)
  return (
    <>
    <Profile {...users}/>
    <Statistic/>
    <FriendsList friends={friends}/>
    <TransactionHistory/>
    </>
  );
};

export default App;
