import dynamic from "next/dynamic";
import type { Metadata } from "next";

const ApiHub = dynamic(() => import("components/home/ApiHub")),
  WelcomeScreen = dynamic(() => import("components/home/Welcome")),
  // RefreshHome = dynamic(() => import("components/home/RefreshHome")),
  FooterContainer = dynamic(() => import("components/layouts/footer")),
  Header = dynamic(() => import("components/layouts/header/HeaderContainer")),
  ManagerContainer = dynamic(() => import("components/home/ManagerContainer"));

export const metadata: Metadata = {
  title: "Wave Research",
  description:
    "Revamped Football Manager for everyone with advanced real world simulation and Football API Provider for all your soccer data needs. Available Everywhere at every time",
  keywords: ["soccer manager", "soccer", "waverd", "football manager", "football"],
};

const HomePage = () => (
  <main>
    <Header position="relative" />
    <WelcomeScreen />
    <ManagerContainer />
    <ApiHub />
    <FooterContainer />
    {/* <RefreshHome /> */}
  </main>
);

export default HomePage;
