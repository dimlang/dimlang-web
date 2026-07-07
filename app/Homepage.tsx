import React from "react";
import HeroSection from "./components/homepage/hero-section";
import TheProblem from "./components/homepage/the-problem";
import Transformation from "./components/homepage/transformation";
import CoreFeatures from "./components/homepage/core-features";
import ProofContexts from "./components/homepage/proof-contexts";
import ProductVision from "./components/homepage/product-vision";
import ClaimYourSpot from "./components/homepage/claim-spot";

type Props = {};

export default function Homepage({}: Props) {
  return (
    <>
      <HeroSection />
      <TheProblem />
      <Transformation />
      <CoreFeatures />
      <ProofContexts />
      <ProductVision />
      <ClaimYourSpot />
    </>
  );
}
