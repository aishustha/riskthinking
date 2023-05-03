import React from "react";
import { ReactNode } from "react";

import Map from "./components/Map";

interface Props {
  children: ReactNode;
}

export default function Home() {
  return (
    <>
      <Map />
    </>
  );
}