import React, { useState } from 'react'
import { connect } from 'react-redux'

// import './index.css'

export const AddBill = () => {
    const [name, setName] = useState<any>('Rich')
    const [amount, setAmount] = useState<any>(5)
    const [startDate, setStartDate] = useState<any>('12th Jan')
    const [frequency, setFrequency] = useState<any>('monthly')

    const submitNewBill = () => {
        fetch('/payments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                amount,
                startDate,
                frequency,
            }),
        })
    }

    return (
        <div className="home-container">
            <input />
            <input />
            <input />
            <input />
            <div className="add-btn" onClick={submitNewBill}>
                Add new payment
            </div>
        </div>
    )
}

const mapStateToProps = ({ payments }: any) => ({ payments })
const mapDispatchToProps = {}

export const AddBillContainer = connect(mapStateToProps, mapDispatchToProps)(AddBill)
