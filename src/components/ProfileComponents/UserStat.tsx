import React from 'react'
import s from './Profile.module.css'
//@ts-ignore
import {statType} from './Profile.tsx'
export const Stat: React.FC<statType>= ({label, quantity}) => {
    return <div className={s.userStat}>
        <span className={s.label}>{label}</span>
        <span className={s.quantity}>{quantity}</span>
    </div>
}