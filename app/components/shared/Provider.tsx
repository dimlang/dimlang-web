"use client";
import { AppProvider } from "@/app/context/ApplicationContext";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const GlobalProvider = ({ children }: Props) => {
  return <AppProvider>{children}</AppProvider>;
};

export default GlobalProvider;
