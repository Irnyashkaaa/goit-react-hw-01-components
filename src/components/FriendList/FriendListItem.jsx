import React from 'react'
import s from './FriendList.module.css'
import PropType from 'prop-types'

export const FriendListItem = ({avatar, name, isOnline}) => {
    return <div className={s.friend}>
        <div className={isOnline? s.friendOnline: s.friendNotOnline }></div>
        <img src={avatar} alt="friend`s avatar" className={s.friendAvatar} />
        <div className={s.name}>{name}</div>
    </div>
}

FriendListItem.propType = {
    avatar: PropType.string.isRequired,
    name: PropType.string.isRequired,
    isOnline: PropType.bool.isRequired
}