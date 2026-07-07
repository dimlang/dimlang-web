import React from "react";
import HeroSection from "./components/homepage/hero-section";
import TheProblem from "./components/homepage/the-problem";
import ThePlatform from "./components/homepage/the-platform";
import ProofContexts from "./components/homepage/proof-contexts";
import CoreFeatures from "./components/homepage/core-features";
import ProductVision from "./components/homepage/product-vision";
import ClaimYourSpot from "./components/homepage/claim-spot";

type Props = {};

export default function Homepage({}: Props) {
  return (
    <>
      <HeroSection />
      <TheProblem />
      <ThePlatform />
      <ProofContexts />
      <CoreFeatures />
      <ProductVision />
      <ClaimYourSpot />
    </>
  );
}
