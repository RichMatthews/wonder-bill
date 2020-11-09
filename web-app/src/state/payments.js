import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const submitPaymentToServer = createAsyncThunk(
    'submitPayment',
    async ({ name, amount, startDate, frequency }) => {
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
    },
)

export const editPayment = createAsyncThunk('editPayment', async ({ id, name, amount, startDate, frequency }) => {
    console.log('calling this edit payment thunk')
    return fetch(`/payments/${id}`, {
        method: 'PATCH',
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
})

export const deletePaymentOnServer = createAsyncThunk('deletePayment', async ({ id }) => {
    return fetch(`/payments/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((res) => res.json())
        .then((res) => res)
        .catch((e) => console.log('ERROR'))
})

const paymentsSlice = createSlice({
    name: 'payments',
    initialState: [],
    reducers: {
        createPayment: async (state, action) => {
            // const { name, amount, startDate, frequency } = action.payload
            // const a = await submitPaymentToServer({ name, amount, startDate, frequency })
            // state.push(a)
            console.log(state, 'st')
        },
        deletePayment: (state, action) => {
            state.push(action.payload)
            const { id } = action.payload
            deletePaymentOnServer({ id })
        },
        getPayments: (state, action) => {
            state.push(...action.payload)
        },
        updatePayment: (state, action) => {
            // state.push(action.payload)
            // const { id, name, amount, startDate, frequency } = action.payload
            // editPayment({ id, amount, name, startDate, frequency })
        },
    },
    extraReducers: {
        [submitPaymentToServer.fulfilled]: (state, action) => {
            console.log('in here')
            const newState = { ...action.payload, ...action.meta.arg }
            state.push(newState)
        },
        [editPayment.fulfilled]: (state, action) => {
            const { id } = action.payload
            const newState = { id, ...action.meta.arg }

            return state.map((payment) => {
                return payment.id === id ? (payment = newState) : payment
            })
        },
        [deletePaymentOnServer.fulfilled]: (state, action) => {
            console.log(action, state)
            const { id } = action.meta.arg

            return state.filter((payment) => payment.id !== id)
        },
    },
})

const { actions, reducer } = paymentsSlice
export const { createPayment, getPayments, updatePayment, deletePayment } = actions
export default reducer
