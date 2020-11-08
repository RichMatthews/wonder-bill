import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { createPayment } from '../../state/payments'

// import './index.css'

export const EditBill = ({ id }: any) => {
    const [name, setName] = useState<any>('Rich')
    const [amount, setAmount] = useState<any>(5)
    const [startDate, setStartDate] = useState<any>('12th Jan')
    const [frequency, setFrequency] = useState<any>('monthly')
    const dispatch = useDispatch()
    const history = useHistory()
    const payments = useSelector((store: any) => store.payments)

    useEffect(() => {
        const foundPayment = payments.find((pay: any) => pay.id === id)
        if (foundPayment) {
            setName(foundPayment.name)
            setAmount(foundPayment.amount)
            setStartDate(foundPayment.startDate)
            setFrequency(foundPayment.frequency)
        }
    }, [])

    const submitNewBill = () => {
        dispatch(
            createPayment({
                name,
                amount,
                startDate,
                frequency,
            }),
        )
        console.log('=======')
        history.push('/')
    }

    return (
        <div className="add-bill-container">
            <Link to={'/'}>Home</Link>
            <div className="add-bill-container-heading">Add A Bill</div>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', width: '350px' }}>
                <div>Enter your details</div>
                <div>Keep track of your household spending by adding your bill</div>
                <input
                    className="add-bill-input"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    className="add-bill-input"
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                />
                <input
                    className="add-bill-input"
                    placeholder="Start date"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                />
                <input
                    className="add-bill-input"
                    placeholder="Frequency"
                    onChange={(e) => setFrequency(e.target.value)}
                    value={frequency}
                />
            </div>
            <div className="add-btn" onClick={submitNewBill}>
                Add new payment
            </div>
        </div>
    )
}

export const EditBillContainer = EditBill
