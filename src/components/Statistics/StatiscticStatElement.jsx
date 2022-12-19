import React from 'react'
import s from './Statictics.module.css'
import PropTypes from 'prop-types';


export const StatElement = ({ label, percentage }) => {

const colors = [s.red, s.yellow, s.orange, s.blue]

    return <div className={s.statiElement}>
        <div  className={colors[Math.floor(Math.random() * 4)]}>
            <div className={s.stLabel}>{label}</div>
            <div className={s.stPercentage}>{percentage}%</div>
        </div>

    </div>
}

StatElement.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}