import React from "react";
import Banner from "../components/banner/Banner";
import RecommandedTours from "../components/recommandedTours/RecommandedTours";
import Footer from "../components/footer/Footer";
import FeatureDistanation from "../components/featureDistanation/FeatureDistanation";

function HomeScreen() {
  return (
    <>
      <Banner
        title="Explore amazing places in the pale of Africa"
        subtitle="Book unique homes and experience a city like local"
      ></Banner>
      <RecommandedTours />
      <FeatureDistanation />
      <Footer />
    </>
  );
}

export default HomeScreen;
