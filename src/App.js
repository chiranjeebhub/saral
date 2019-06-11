import React, { useState, useEffect } from "react";
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
import TestCategory from "./pages/TestCategory";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Cart from "./pages/Cart";
import Download from "./pages/Download";
import PackageAll from "./pages/PackageAll";

import Axios from "axios";

import { SaralContext } from "./Context";

function App() {
  const [pkg, setPkg] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://saraldiagnostics.com/wp-json/wc/v1/products?category=35&consumer_key=ck_d35c2b894ba90c814eafd4902cf3a516886b531d&consumer_secret=cs_b93d54fe59bcc48228e5ee7257d2e2dbfb144f39`
    ).then(res => {
      setPkg(res.data);
    });
  }, []);

  const value = {
    pkg,
    setPkg
  };

  return (
    <SaralContext.Provider value={value}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/packages" component={PackageAll} />
          <Route path="/SearchResult" component={SearchResult} />
          <Route path="/Appointment" component={BookAppointment} />
          <Route path="/about" component={About} />
          <Route path="/career" component={Career} />
          <Route path="/centers" component={Centers} />
          <Route path="/experts" component={Experts} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq} />
          <Route path="/cart" component={Cart} />
          <Route path="/download" component={Download} />
          <Route path="/category" component={TestCategory} />
          <Route path="/single" component={SinglePackage} />
        </Switch>
      </BrowserRouter>
    </SaralContext.Provider>
  );
}

export default App;
