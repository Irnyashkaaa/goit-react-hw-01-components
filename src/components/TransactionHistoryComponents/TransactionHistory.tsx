import React from 'react'
import { transactionType } from './Transaction'
//@ts-ignore
import {Transaction} from './Transaction.tsx'
import s from './Transactions.module.css'
type propsType = {
    items: transactionType[]
}
export const TransactionHistory: React.FC<propsType> = ({items}) => {    
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
                {items.map((t: transactionType) => {
                    return <Transaction key={t.id} type={t.type} amount={t.amount} currency={t.currency}/>
                })}
            </tbody>
        </table>
    </div>
}