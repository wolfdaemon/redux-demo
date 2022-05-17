import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from "./reportWebVitals";

import ReduxCounter from "./components/ReduxCounter";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0
}
const store = createStore(reducer);

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      }
    default:
      return state;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ReduxCounter />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
