import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './index.css'

export const Home = () => {
    const payments = useSelector((store: { payments: any }) => store.payments)

    return (
        <div className="home-container">
            <div className="home-container-heading">Regular payments</div>
            <div className="payments-container">
                {payments.map(
                    (payment: { id: string; name: string; amount: string; frequency: string; startDate: string }) => {
                        return (
                            <Link to={`/edit/${payment.id}`} className="payment-container">
                                <div className="payments-container-row payments-container-top-row">
                                    <div>{payment.name}</div>
                                    <div>£{payment.amount}</div>
                                </div>

                                <div className="payments-container-row payments-container-bottom-row">
                                    <div>{payment.frequency}</div>
                                    <div>Next: {payment.startDate}</div>
                                </div>
                            </Link>
                        )
                    },
                )}
            </div>
            <Link to={'/add'} className="btn add-btn">
                Add a bill
            </Link>
        </div>
    )
}
