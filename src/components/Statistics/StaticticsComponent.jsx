import React from 'react'
import { StatElement } from './StatiscticStatElement'
import s from './Statictics.module.css'
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return <div className={s.statisctics}>
        <div className={s.statisticsTitle}>{title}</div>
        <div className={s.elements }>
            {stats.map(st => {
                return <StatElement key={st.id} label={st.label} percentage={st.percentage}></StatElement>
            })}
        </div>

    </div>
}



Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }))
  }

