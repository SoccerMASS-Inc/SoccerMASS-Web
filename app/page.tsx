"use client";

import dynamic from "next/dynamic";
import type { Metadata } from "next";

const Header = dynamic(() => import("components/layouts/header/HeaderContainer")),
  ManagerContainer = dynamic(() => import("components/home/ManagerContainer")),
  FooterContainer = dynamic(() => import("components/layouts/footer")),
  WelcomeScreen = dynamic(() => import("components/home/Welcome")),
  ApiHub = dynamic(() => import("components/home/ApiHub"));

// metadata: Metadata = { title: "Soccer Manager", description: "Revamped Football Manager" },

export default function Home() {
  return (
    <>
      <span>sss</span>
      {/* <main>
        <Header position="relative" />
        <WelcomeScreen />
        <ManagerContainer />
        <ApiHub />
      </main>
      <FooterContainer /> */}
      {/* <RefreshHome /> */}
    </>
  );
}
