import React from 'react'
import s from './Profile.module.css'
import PropTypes from 'prop-types';

export const Stat = ({label, quantity}) => {
    return <div className={s.userStat}>
        <span className={s.label}>{label}</span>
        <span className={s.quantity}>{quantity}</span>
    </div>
}


Stat.propType = {
    label: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired
}
