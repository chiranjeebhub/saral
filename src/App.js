import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./css/index.css";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import BookAppointment from "./pages/BookAppointment";
import SinglePackage from "./pages/SinglePackage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/SearchResult" component={SearchResult} />
        <Route path="/Appointment" component={BookAppointment} />
        <Route path="/single" component={SinglePackage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
