import React from 'react';
import { Stat } from './UserStat';
import s from "./Profile.module.css"
import PropTypes from 'prop-types';


export const ProfilePage = ({username, tag, avatar, stats, location}) =>{
    const statsEntries = Object.entries(stats)
    return <div className={s.profile}>
        <div className={s.description}>
            <img src={avatar} alt='user avatar' className={s.avatar} />
            <p className={s.name}>{username}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
        </div>
        <ul className={s.stats}>
            {statsEntries.map((entr) => {                
                return <Stat key={entr[1]} label={entr[0]} quantity={entr[1]}></Stat>
            })}
        </ul>
    </div>
}

ProfilePage.propType = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}
