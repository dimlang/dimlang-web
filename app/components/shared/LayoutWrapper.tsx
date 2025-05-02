"use client"
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NextTopLoader from "nextjs-toploader";
import { useApplicationContext } from "@/app/context/ApplicationContext";
import WaitlistModal from "../modal/WaitlistModal";

type Props = {
  children?: ReactNode;
};

export default function LayoutWrapper({ children }: Props) {
  const {isWaitlistModalVisible, setIsWaitlistModalVisible} = useApplicationContext();

  return (
    <>
      <NextTopLoader
        color="#fff"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #f1fa9e,0 0 5px #ceb0fa"
      />
      <WaitlistModal
          visibility={isWaitlistModalVisible}
          setVisibility={setIsWaitlistModalVisible}
      />

      <Navbar />
      {children}
      <Footer />
    </>
  );
}
