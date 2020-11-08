import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPayments } from '../../state/payments'

import './index.css'

export const Home = () => {
    const dispatch = useDispatch()
    const payments = useSelector((store: any) => store.payments)

    // useEffect(() => {
    //     fetch('/payments', {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json' },
    //         // body: JSON.stringify({
    //         //     name,
    //         //     amount,
    //         //     startDate,
    //         //     frequency,
    //         // }),
    //     })
    //         .then((res) => res.json())
    //         .then((res) => dispatch(getPayments(res)))
    //         .catch((e) => console.log('ERROR'))
    // }, [])

    return (
        <div className="home-container">
            <div className="home-container-heading">Regular payments</div>
            {payments.map((payment: any) => {
                return (
                    <div className="payments-container">
                        <div className="payments-container-row payments-container-top-row">
                            <div>{payment.name}</div>
                            <div>£{payment.amount}</div>
                        </div>

                        <div className="payments-container-row payments-container-bottom-row">
                            <div>{payment.frequency}</div>
                            <div>Next: {payment.startDate}</div>
                        </div>
                        <Link to={`/edit/${payment.id}`}>Edit</Link>
                    </div>
                )
            })}
            <Link to={'/add'} className="add-btn">
                Add a bill
            </Link>
        </div>
    )
}

export const HomeContainer = Home
