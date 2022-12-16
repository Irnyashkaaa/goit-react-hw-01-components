import React from 'react'
import s from './FriendList.module.css'

export type friendType = {
    avatar: string
    name: string
    isOnline: boolean
    id: number
}
export const FriendListItem: React.FC<friendType> = ({avatar, name, isOnline}) => {
    return <div className={s.friend}>
        <div className={isOnline? s.friendOnline: s.friendNotOnline }></div>
        <img src={avatar} alt="friend`s avatar" className={s.friendAvatar} />
        <div className={s.name}>{name}</div>

    </div>
}