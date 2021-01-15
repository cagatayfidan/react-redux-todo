import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import history from './utils/history'
import configureStore from './configureStore'

const initialState = {
}

const store = configureStore(initialState, history)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
