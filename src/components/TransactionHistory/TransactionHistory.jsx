import React from 'react'
import {Transaction} from './Transaction'
import s from './Transactions.module.css'
import PropTypes from 'prop-types'

export const TransactionHistory = ({items}) => {    
    return <div>
        <table className={s.table}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(t=> {
                    return <Transaction key={t.id} type={t.type} amount={t.amount} currency={t.currency}/>
                })}
            </tbody>
        </table>
    </div>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}