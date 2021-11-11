import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route as Router, Switch, Redirect, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import AddPatient from "../src/Components/AddPatient";
import Validation from "./Components/Validation";
import AddDoctor from "../src/Components/AddDoctor";
import BookAppointment from "../src/Components/BookAppointment";
import ViewAppointment from "../src/Components/ViewAppointment";
import ViewDoctor from "../src/Components/ViewDoctor";
import ViewPatient from "../src/Components/ViewPatient";
import Navbar from "../src/main/Navbar"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/addPatient" />
            </Route>
            <Route exact path="/addPatient">
              <AddPatient />
            </Route>
            <Route exact path="/addDoctor">
              <AddDoctor />
            </Route>
            <Route exact path="/bookAppointment">
              <BookAppointment />
            </Route>
            <Route exact path="/viewDoctor">
              <ViewDoctor />
            </Route>
            <Route exact path="/viewPatient">
              <ViewPatient />
            </Route>
            <Route exact path="/viewAppointment">
              <ViewAppointment />
            </Route>
            <Route exact path="/validation">
              <Validation />
            </Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
