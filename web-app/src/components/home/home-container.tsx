import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPayments } from '../../state/payments'

import './index.css'

export const Home = () => {
    const payments = useSelector((store: any) => store.payments)

    return (
        <div className="home-container">
            <div className="home-container-heading">Regular payments</div>
            <div className="payments-container">
                {payments.map((payment: any) => {
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
                })}
            </div>
            <Link to={'/add'} className="add-btn">
                Add a bill
            </Link>
        </div>
    )
}

export const HomeContainer = Home
