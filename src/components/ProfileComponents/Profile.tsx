import React from 'react';
//@ts-ignore
import { Stat } from './UserStat.tsx';
import s from "./Profile.module.css"
export type statType = {
    label: string,
    quantity: number
}
type propsType = {
    username: string,
    tag: string,
    avatar: string,
    stats: {},
    location: string
}

export const ProfilePage: React.FC<propsType> = ({username, tag, avatar, stats, location}) =>{

    const statsEntries: statType[] = Object.entries(stats)
    
    return <div className={s.profile}>
        <div className={s.description}>
            <img src={avatar} alt='user avatar' className={s.avatar} />
            <p className={s.name}>{username}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
        </div>
        <ul className={s.stats}>
            {statsEntries.map((entr: statType) => {                
                return <Stat key={entr[1]} label={entr[0]} quantity={entr[1]}></Stat>
            })}
        </ul>
    </div>
}
