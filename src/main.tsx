import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { legacy_createStore } from "redux"
import { Provider } from 'react-redux'

import appReducer from './redux/appReducer.jsx'

import { store } from './redux/app/store.jsx'
// PROVIDER- תפקידו לקשר בין רידקס לבין הקומפוננטות, בלעדיו לאף קומפוננט לא תהיה גישה למידע
// const appStore = legacy_createStore(appReducer)
// appstore = the store of the application


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={appStore}> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
