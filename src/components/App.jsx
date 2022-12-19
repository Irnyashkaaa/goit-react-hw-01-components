import React from 'react'
import { ProfilePage } from "./Profile/Profile";
import { Statistics } from "./Statistics/StaticticsComponent";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import userData from '../files/user.json'
import stData from '../files/data.json'
import friends from '../files/friends.json'
import transactions from '../files/transactions.json'


export const App = () => {  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginTop: 10
      }}
    >
      <ProfilePage username={userData.username} tag={userData.tag} 
      location={userData.location} avatar={userData.avatar} 
      stats={userData.stats}></ProfilePage>
      <Statistics title="upload stats" stats={stData}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory> 
    </div>
  );
};




