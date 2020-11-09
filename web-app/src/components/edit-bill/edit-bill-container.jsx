import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { deletePaymentOnServer, editPayment } from '../../state/payments'
import { Select } from '../shared/select'

export const EditBill = ({ id }) => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState()
    const [startDate, setStartDate] = useState('')
    const [frequency, setFrequency] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const payments = useSelector((store) => store.payments)

    useEffect(() => {
        const foundPayment = payments.find((pay) => pay.id === id)

        if (foundPayment) {
            setName(foundPayment.name)
            setAmount(foundPayment.amount)
            setStartDate(foundPayment.startDate)
            setFrequency(foundPayment.frequency)
        }
    }, [payments])

    const editBill = () => {
        dispatch(
            editPayment({
                id,
                name,
                amount,
                startDate,
                frequency,
            }),
        )
        history.push('/')
    }

    const deleteBill = () => {
        dispatch(
            deletePaymentOnServer({
                id,
            }),
        )
        history.push('/')
    }

    return (
        <div className="container">
            <div className="container-heading">Edit A Bill</div>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', width: '350px' }}>
                <div>{name}</div>
                <div>If you'd like to edit your bill you can change the details below</div>
                <input
                    className="text-input"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    className="text-input"
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                />
                <input
                    className="text-input"
                    placeholder="Start date"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                />
                <Select frequency={frequency} setFrequency={setFrequency} />
            </div>
            <div className="btn save-btn" onClick={editBill}>
                Save
            </div>
            <div className="btn delete-btn" onClick={deleteBill}>
                Delete
            </div>
        </div>
    )
}

export const EditBillContainer = EditBill
