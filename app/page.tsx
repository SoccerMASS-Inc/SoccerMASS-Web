// import dynamic from "next/dynamic";
import type { Metadata } from "next";

// const ApiHub = dynamic(() => import("components/home/ApiHub")),
//   WelcomeScreen = dynamic(() => import("components/home/Welcome")),
//   RefreshHome = dynamic(() => import("components/home/RefreshHome")),
//   FooterContainer = dynamic(() => import("components/layouts/footer")),
//   Header = dynamic(() => import("components/layouts/header/HeaderContainer")),
//   ManagerContainer = dynamic(() => import("components/home/ManagerContainer")),

export const metadata: Metadata = { title: "Soccer Manager", description: "Revamped Football Manager" };

const HomePage = () => (
  <>
    {/* <Header position="relative" />
    <main>
      <WelcomeScreen />
      <ManagerContainer />
      <ApiHub />
    </main> */}
    {/* <FooterContainer /> */}
    {/* <RefreshHome /> */}
    <div>page</div>;
  </>
);

export default HomePage;
