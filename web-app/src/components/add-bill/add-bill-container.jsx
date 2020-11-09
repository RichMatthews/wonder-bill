import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { submitPaymentToServer } from '../../state/payments'
import { Select } from '../shared/select'

export const AddBill = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState()
    const [startDate, setStartDate] = useState('')
    const [frequency, setFrequency] = useState('Weekly')
    const dispatch = useDispatch()
    const history = useHistory()

    const formValid = () => {
        if (!name || !amount || !startDate || !frequency) {
            alert('You must fill in all fields to submit a bill')
            return
        }
        return true
    }

    const submitNewBill = () => {
        if (!formValid()) {
            return
        }
        const params = {
            name,
            amount,
            startDate,
            frequency,
        }
        dispatch(submitPaymentToServer(params))

        history.push('/')
    }

    return (
        <div className="container">
            <div className="container-heading">Add A Bill</div>
            <div className="inner-container">
                <div className="title">Enter your details</div>
                <div className="description">Keep track of your household spending by adding your bill</div>
                <input className="text-input" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input className="text-input" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
                <input className="text-input" placeholder="Start date" onChange={(e) => setStartDate(e.target.value)} />
                <Select frequency={frequency} setFrequency={setFrequency} />
            </div>
            <div className="add-btn" onClick={submitNewBill}>
                Add new payment
            </div>
        </div>
    )
}

export const AddBillContainer = AddBill
