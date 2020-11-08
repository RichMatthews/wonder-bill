import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import store from '../../state/store'
import { HomeContainer } from '../../components/home'
import { AddBillContainer } from '../../components/add-bill'

// import { createPayment } from './state/payments'

export const MainRouter = () => {
    useEffect(() => {
        fetch('/payments')
            .then((response) => response.json())
            .then((data) => console.log(data, 'data'))
    }, [])

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomeContainer />
                    </Route>
                    <Route path="/add/:id">
                        <AddBillContainer />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    )
}
