import React from 'react'
//@ts-ignore
import { StatElement } from './StatiscticStatElement.tsx'
import s from './Statictics.module.css'
type propsType = {
    title: string,
    stats: stType[]
}

export type stType = {
    id: string
    label: string
    percentage: number
}
export const Statistics: React.FC<propsType> = ({ title, stats }) => {
    return <div className={s.statisctics}>
        <div className={s.statisticsTitle}>{title}</div>
        <div className={s.elements }>
            {stats.map((st: stType) => {
                return <StatElement key={st.id} label={st.label} percentage={st.percentage}></StatElement>
            })}
        </div>

    </div>
}