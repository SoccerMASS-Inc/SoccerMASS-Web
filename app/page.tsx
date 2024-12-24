// "use client";

// import dynamic from "next/dynamic";
// import type { Metadata } from "next";

// const Header = dynamic(() => import("components/layouts/header/HeaderContainer"), { loading: () => <p>Loading...</p> }),
//   metadata: Metadata = { title: "Soccer Manager", description: "Revamped Football Manager" },
//   ManagerContainer = dynamic(() => import("components/home/ManagerContainer")),
//   FooterContainer = dynamic(() => import("components/layouts/footer")),
//   WelcomeScreen = dynamic(() => import("components/home/Welcome")),
//   ApiHub = dynamic(() => import("components/home/ApiHub"));

// export const metadata: Metadata = { title: "Soccer Manager", description: "Revamped Football Manager" };

const HomePage = () => (
  <>
    <main>
      <p>home poage</p>
      {/* <Header position="relative" />
      <WelcomeScreen />
      <ManagerContainer />
      <ApiHub /> */}
    </main>
    {/* <FooterContainer /> */}
    {/* <RefreshHome /> */}
  </>
);

export default HomePage;
// export { metadata, HomePage as default };
