import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import userReducer from './reducers/userReducer'
import tripReducer from './reducers/tripReducer'
import itineraryReducer from './reducers/itineraryReducer'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const rootReducer = combineReducers({
  users: userReducer,
  trips: tripReducer,
  itineraries: itineraryReducer
})

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
