import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from '../../state/store'
import { Home } from '../../components/home'
import { AddBill } from '../../components/add-bill'
import { EditBill } from '../../components/edit-bill'
import { getPayments } from '../../state/payments'

export const App = () => {
    return (
        <Provider store={store}>
            <MainRouter />
        </Provider>
    )
}

export const MainRouter = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('/payments', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
            .then((res) => dispatch(getPayments(res)))
            .catch((e) => console.log('ERROR'))
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/add">
                    <AddBill />
                </Route>
                <Route path="/edit/:id" render={(props) => <EditBill id={props.match.params.id} />} />
            </Switch>
        </Router>
    )
}
