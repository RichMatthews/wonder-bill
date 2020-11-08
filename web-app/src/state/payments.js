import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const submitPaymentToServer = ({ name, amount, startDate, frequency }) => {
    return fetch('/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            amount,
            startDate,
            frequency,
        }),
    })
        .then((res) => res.json())
        .then((res) => res)
        .catch((e) => console.log('ERROR'))
}

// export const fetchPaymentsById = createAsyncThunk('payments/fetchPaymentsById', async () => {
//     const response = await fetchPayments()
//     dispatch(getPayments())
//     return response
// })

const paymentsSlice = createSlice({
    name: 'payments',
    initialState: [],
    reducers: {
        createPayment: (state, action) => {
            state.push(action.payload)
            const { name, amount, startDate, frequency } = action.payload
            submitPaymentToServer({ name, amount, startDate, frequency })
        },
        deletePayment: (state, action) => console.log(action.payload),
        getPayments: (state, action) => {
            console.log(action.payload, 'act')
            state.push(...action.payload)
        },
        updatePayment: (state, action) => console.log('action.payload'),
    },
})

const { actions, reducer } = paymentsSlice
export const { createPayment, getPayments, updatePayment, deletePayment } = actions
export default reducer
