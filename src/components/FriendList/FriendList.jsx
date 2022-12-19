import React from 'react'
import { FriendListItem } from './FriendListItem'
import s from './FriendList.module.css'
import PropType from 'prop-types'

export const FriendList = ({friends}) => {
    return <div className={s.friendsBlock}>
        {friends.map((friend) => {
            return <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} 
            isOnline={friend.isOnline}></FriendListItem>
        })}
    </div>
}


FriendListItem.propType = {
    avatar: PropType.string.isRequired,
    name: PropType.string.isRequired,
    isOnline: PropType.bool.isRequired
}
