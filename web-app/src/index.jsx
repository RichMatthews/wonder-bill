import React from 'react'
import ReactDOM from 'react-dom'
import { MainRouter } from './components/router'
import * as serviceWorker from './serviceWorker'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <MainRouter />
    </React.StrictMode>,
    document.getElementById('root'),
)

serviceWorker.unregister()
