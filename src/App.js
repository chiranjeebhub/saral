import React from "react";

import "./css/index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CollectionCard from "./components/CollectionCard";
import SearchSection from "./components/SearchSection";
import HealthRisk from "./components/HealthRisk";
import Accrediation from "./components/Accreditation";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <div className="hero">
        <Nav />
        <Hero />
      </div>
      <CollectionCard />
      <SearchSection />
      <HealthRisk />
      <Accrediation />
      <Footer />
    </React.Fragment>
  );
}

export default App;
