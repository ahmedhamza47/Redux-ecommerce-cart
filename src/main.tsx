import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createStore} from 'redux'
import {rootReducer} from './Redux/RootReducer'
import { Provider } from 'react-redux/es/exports'
import store from './Redux/Store'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
    <App />
    </Provider>
  
)
