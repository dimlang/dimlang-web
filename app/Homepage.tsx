import React from "react";
import HeroSection from "./components/homepage/hero-section";
import WhoItsForSection from "./components/homepage/who-its-for";
import CoreFeatures from "./components/homepage/core-features";
import ProductVision from "./components/homepage/product-vision";
import ClaimYourSpot from "./components/homepage/claim-spot";

type Props = {};

export default function Homepage({}: Props) {
  return (
    <>
      <HeroSection />
      <WhoItsForSection />
      <CoreFeatures />
      <ProductVision />
      <ClaimYourSpot />
    </>
  );
}
