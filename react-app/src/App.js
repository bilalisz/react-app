import React from "react";
import Moive from "./components/Moive";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/customers";
import notFound from "./components/notFound";
import Rentals from "./components/rentals";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import Registration from "./components/registration";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/registration-form" component={Registration} />
          <Route path="/login-form" component={LoginForm} />
          <Route path="/movies" component={Moive} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={notFound} />
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
