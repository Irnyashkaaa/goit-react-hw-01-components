//@ts-ignore
import { ProfilePage } from "./ProfileComponents/Profile.tsx";
import React from 'react'
//@ts-ignore

import { Statistics } from "./StatisticsComponents/StaticticsComponent.tsx";
//@ts-ignore
import { FriendList } from "./FriendListComponents/FriendList.tsx";
//@ts-ignore
import { TransactionHistory } from "./TransactionHistoryComponents/TransactionHistory.tsx";
const userData = require('../files/user.json')
const stData = require('../files/data.json')
const friends = require('../files/friends.json')
const transactions = require('../files/transactions.json')


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
