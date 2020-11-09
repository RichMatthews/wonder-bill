import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import store from '../../state/store'
import { HomeContainer } from '../../components/home'
import { AddBillContainer } from '../../components/add-bill'
import { EditBillContainer } from '../../components/edit-bill'
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
                    <HomeContainer />
                </Route>
                <Route path="/add">
                    <AddBillContainer />
                </Route>
                <Route path="/edit/:id" render={(props) => <EditBillContainer id={props.match.params.id} />} />
            </Switch>
        </Router>
    )
}
