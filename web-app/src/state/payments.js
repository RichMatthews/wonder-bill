import { createSlice } from '@reduxjs/toolkit'

const paymentsSlice = createSlice({
    name: 'payments',
    initialState: [],
    reducers: {
        createPayment: (state, action) => {
            state.push(action.payload)
            console.log(action.payload)
        },
        updatePayment: (state, action) => console.log('action.payload'),
        deletePayment: (state, action) => console.log(action.payload),
    },
})

const { actions, reducer } = paymentsSlice
export const { createPayment, updatePayment, deletePayment } = actions
export default reducer
