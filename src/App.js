import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home";


export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

