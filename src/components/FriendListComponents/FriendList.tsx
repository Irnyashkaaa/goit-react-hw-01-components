import React from 'react'
//@ts-ignore
import { FriendListItem } from './FriendListItem.tsx'
import s from './FriendList.module.css'
import { friendType } from './FriendListItem'

type propsType = {
    friends: friendType[]
}

export const FriendList: React.FC<propsType> = ({friends}) => {
    return <div className={s.friendsBlock}>
        {friends.map((friend: friendType) => {
            return <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} 
            isOnline={friend.isOnline}></FriendListItem>
        })}
    </div>
}