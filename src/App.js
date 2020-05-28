import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./components/pages/NotFound";
import EditContact from "./components/contacts/EditContact";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager"></Header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
