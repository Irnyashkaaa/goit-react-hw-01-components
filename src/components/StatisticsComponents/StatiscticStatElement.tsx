import React from 'react'
import s from './Statictics.module.css'

type propsType = {
    label: string
    percentage: number
}
const colors = [s.red, s.yellow, s.orange, s.blue]
export const StatElement: React.FC<propsType> = ({ label, percentage }) => {
    return <div className={s.statiElement}>
        <div  className={colors[Math.floor(Math.random() * 4)]}>
            <div className={s.stLabel}>{label}</div>
            <div className={s.stPercentage}>{percentage}%</div>
        </div>

    </div>
}