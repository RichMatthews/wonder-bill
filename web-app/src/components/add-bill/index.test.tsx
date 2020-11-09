import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { fireEvent, render } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import { AddBill } from './add-bill-container'
import { submitPaymentToServer } from '../../state/payments'
// import { useDispatch, useShallowEqualSelector } from 'react-redux'

// jest.mock('react-redux')

jest.mock('../../state/payments', () => ({
    submitPaymentToServer: jest.fn(),
}))
// const mockDispatch = jest.fn()
// jest.mock('react-redux', () => ({
//     useSelector: jest.fn(),
//     useDispatch: () => mockDispatch,
// }))

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

describe('QuestionView', () => {
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

    // it('should call submitPaymentToServer when all the inputs have been filled in', () => {
    //     const { getByText } = renderWithContainers(<AddBill />)
    //     const namePlaceholder = screen.getByPlaceholderText('Name')
    //     const amountPlaceholder = screen.getByPlaceholderText('Amount')
    //     const startDatePlaceholder = screen.getByPlaceholderText('Start date')
    //     fireEvent.change(namePlaceholder, { target: { value: 'Rich' } })
    //     fireEvent.change(amountPlaceholder, { target: { value: 500 } })
    //     fireEvent.change(startDatePlaceholder, { target: { value: '12th Jan' } })

    //     fireEvent.click(getByText('Add new payment'))
    //     expect(useDispatch).toHaveBeenCalled()
    // })
})
