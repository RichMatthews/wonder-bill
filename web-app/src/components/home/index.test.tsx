import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { fireEvent, render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import * as redux from 'react-redux'

import { Home } from './home-container'

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

describe('Home', () => {
    it('should render the correct text in the document', () => {
        const spy = jest.spyOn(redux, 'useSelector')
        spy.mockReturnValue([])

        const { getByText } = renderWithContainers(<Home />)
        expect(getByText('Regular payments')).toBeInTheDocument()
        expect(getByText('Add a bill')).toBeInTheDocument()
    })

    it('should render the price with a £ sign before it', () => {
        const spy = jest.spyOn(redux, 'useSelector')
        spy.mockReturnValue([{ amount: 50, name: 'Gym', frequency: 'monthly', startDate: '15th Jan' }])

        const { getByText } = renderWithContainers(<Home />)
        expect(getByText('£50')).toBeInTheDocument()
    })

    it('should render the next date with the word "Next" before it', () => {
        const spy = jest.spyOn(redux, 'useSelector')
        spy.mockReturnValue([{ amount: 50, name: 'Gym', frequency: 'monthly', startDate: '15th Jan' }])

        const { getByText } = renderWithContainers(<Home />)
        expect(getByText('Next: 15th Jan')).toBeInTheDocument()
    })
})
