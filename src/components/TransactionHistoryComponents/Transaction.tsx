import React from 'react'
// import s from './Transactions.module.css'
export type transactionType = {
    id: string
    type: string
    amount: string
    currency: string
}
export const Transaction: React.FC<transactionType> = ({type, amount, currency}) => {
    return <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
}