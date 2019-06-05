import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./css/index.css";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/SearchResult" component={SearchResult} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
