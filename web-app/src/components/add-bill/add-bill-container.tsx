import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { createPayment } from '../../state/payments'

import './index.css'

export const AddBill = () => {
    const [name, setName] = useState<any>('Rich')
    const [amount, setAmount] = useState<any>(5)
    const [startDate, setStartDate] = useState<any>('12th Jan')
    const [frequency, setFrequency] = useState<any>('monthly')
    const dispatch = useDispatch()
    const history = useHistory()

    const submitNewBill = () => {
        dispatch(
            createPayment({
                name,
                amount,
                startDate,
                frequency,
            }),
        )

        history.push('/')
    }

    return (
        <div className="add-bill-container">
            <Link to={'/'}>Home</Link>
            <div className="add-bill-container-heading">Add A Bill</div>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', width: '350px' }}>
                <div>Enter your details</div>
                <div>Keep track of your household spending by adding your bill</div>
                <input className="add-bill-input" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input className="add-bill-input" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
                <input
                    className="add-bill-input"
                    placeholder="Start date"
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                    className="add-bill-input"
                    placeholder="Frequency"
                    onChange={(e) => setFrequency(e.target.value)}
                />
            </div>
            <div className="add-btn" onClick={submitNewBill}>
                Add new payment
            </div>
        </div>
    )
}

const mapStateToProps = ({ payments }: any) => ({ payments })
const mapDispatchToProps = {}

export const AddBillContainer = connect(mapStateToProps, mapDispatchToProps)(AddBill)