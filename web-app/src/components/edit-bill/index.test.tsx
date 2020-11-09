import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { fireEvent, render } from '@testing-library/react'
import * as redux from 'react-redux'

import { EditBill } from './edit-bill-container'

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

describe('Edit Bill', () => {
    it('should render the text Edit A Bill', () => {
        const spy = jest.spyOn(redux, 'useSelector')
        spy.mockReturnValue([{ amount: 50, name: 'Gym', frequency: 'monthly', startDate: '15th Jan' }])

        const { getByText } = renderWithContainers(<EditBill />)
        expect(getByText('Edit A Bill')).toBeInTheDocument()
    })
})
