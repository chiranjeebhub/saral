import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import CollectionCard from "../components/CollectionCard";
import SearchSection from "../components/SearchSection";
import HealthRisk from "../components/HealthRisk";
import Accr from "../components/Accr";
import Footer from "../components/Footer";
import HealthRiskMobile from "../components/HealthRiskMobile";
import CollectionCardMobile from "../components/CollectionCardMobile";
import NavMobile from "../components/NavMobile";
import HeroMobile from "../components/HeroMobile";
import SearchSectionMobile from "../components/SearchSectionMobile";
import AccrMobile from "../components/AccrMobile";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const isMobile = width <= 500;
  if (isMobile) {
    return (
      <div>
        <div style={{ backgroundColor: "white" }}>
          <NavMobile />
        </div>
        <HeroMobile />
        <CollectionCardMobile />
        <SearchSectionMobile />
        <HealthRiskMobile />
        <AccrMobile />
      </div>
    );
  } else {
    return (
      <div>
        <div className="hero">
          <Nav />
          <Hero />
        </div>
        <CollectionCard />
        <SearchSection />
        <HealthRisk />
        <Accr />
        <Footer />
      </div>
    );
  }
};

export default Home;
