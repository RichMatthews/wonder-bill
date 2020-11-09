import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { fireEvent, render } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import { AddBill } from './add-bill-container'
import { submitPaymentToServer } from '../../state/payments'

jest.mock('../../state/payments', () => ({
    submitPaymentToServer: jest.fn(),
}))

export const renderWithContainers = (
    ui: any,
    { initialState, store = createStore(() => {}, initialState) }: any = {},
) => {
    return {
        ...render(
            <Provider store={store}>
                <BrowserRouter>{ui}</BrowserRouter>
            </Provider>,
        ),
        store,
    }
}

describe('Add Bill', () => {
    it('should render the keep track of your household spending text', () => {
        const { getByText } = renderWithContainers(<AddBill />)
        expect(getByText('Keep track of your household spending by adding your bill')).toBeInTheDocument()
    })

    it('should not call submitPaymentToServer when all the inputs have not been filled in', () => {
        const { getByText } = renderWithContainers(<AddBill />)
        const namePlaceholder = screen.getByPlaceholderText('Name')
        const amountPlaceholder = screen.getByPlaceholderText('Amount')
        fireEvent.change(namePlaceholder, { target: { value: 'Rich' } })
        fireEvent.change(amountPlaceholder, { target: { value: 500 } })

        fireEvent.click(getByText('Add new payment'))
        expect(submitPaymentToServer).not.toHaveBeenCalled()
    })
})
