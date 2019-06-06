import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./css/index.css";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import BookAppointment from "./pages/BookAppointment";
import SinglePackage from "./pages/SinglePackage";
import About from "./pages/About";
import Career from "./pages/Career";
import Centers from "./pages/Centers";
import Gallery from "./pages/Gallery";
import Experts from "./pages/Experts";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/SearchResult" component={SearchResult} />
        <Route path="/Appointment" component={BookAppointment} />
        <Route path="/about" component={About} />
        <Route path="/career" component={Career} />
        <Route path="/centers" component={Centers} />
        <Route path="/experts" component={Experts} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/single" component={SinglePackage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
