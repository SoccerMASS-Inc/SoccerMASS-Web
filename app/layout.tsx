"use client";

import "./globals.scss";
import dynamic from "next/dynamic";

import { useState } from "react";
import { COLORS } from "utils/constants";
import { theme as antdTheme } from "antd";
import { merienda, robotoSlab } from "utils/fonts";

import appStore from "store/appStore";
import { memo, ReactNode } from "react";

import { connect } from "react-redux";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
import { setCssThemeVar } from "utils/helpers";
import { INIT_PROFILE } from "utils/constants";
import { setProfileAction } from "store/actions/account";
import { setDeviceSizeAction, setDisplayHeaderAction, setBreakpointAction, setActiveRouteAction } from "store/actions/layout";

// const ConfigProvider = dynamic(() => import("antd").then((module) => module.ConfigProvider), { ssr: false, loading: () => <span>Loading2...</span> }),
const ConfigProvider = dynamic(() => import("antd").then((module) => module.ConfigProvider)),
  // HeaderContainer = dynamic(() => import("components/layouts/header/HeaderContainer"), { ssr: false }),
  HeaderContainer = dynamic(() => import("components/layouts/header/HeaderContainer")),
  AntdRegistry = dynamic(() => import("@ant-design/nextjs-registry").then((module) => module.AntdRegistry)),
  Spin = dynamic(() => import("antd").then((module) => module.Spin), { loading: () => <span>Loading4...</span> }),
  // Provider = dynamic(() => import("react-redux").then((module) => module.Provider)),
  ReduxProvider = dynamic(() => import("react-redux").then((module) => module.Provider));

// ReduxProvider = ({ children }: Readonly<{ children: ReactNode }>) => <Provider store={appStore}>{children}</Provider>;

const RootProvider = ({ children, ...props }: any) => {
  const { setProfileAction, setDeviceSizeAction, setDisplayHeaderAction, setBreakpointAction, setActiveRouteAction, themeHandler } = props;

  // const user = null,
  //   pathname = usePathname(),
  //   [initialized, setInitialized] = useState(false),
  //   [prevScrollPos, setPrevScrollPos] = useState(0),
  //   // [theme, setTheme] = useState(INIT_PROFILE.theme),
  //   [displayHeader, setDisplayHeader] = useState(false),
  //   [colors, setColors] = useState({ primaryColor: "", secondaryColor: "" });

  // useEffect(() => {
  //   setTheme(props.theme);
  // }, [props.theme]);

  // useEffect(() => {
  //   const profile: Profile = user || INIT_PROFILE;
  //   if (setProfileAction) setProfileAction(profile);

  //   handleResize();
  //   setInitialized(true);
  //   setDisplayHeader(true);
  //   setTheme(profile.theme);
  //   setCssThemeVar(profile.theme);

  //   import("utils/constants").then((module) => {
  //     const colors = module.COLORS;
  //     const headerHeight = module.HEADER_HEIGHT;
  //     setColors({ primaryColor: colors.primaryColor, secondaryColor: colors.secondaryColor });

  //     // --visibleScreen: to fix wrong VH in  iPhone
  //     // --headerHeight Set relative (not sticky) header height
  //     document.documentElement.style.setProperty("--headerHeight", `${headerHeight}px`);
  //     document.documentElement.style.setProperty("--primary-color", colors.primaryColor);
  //     document.documentElement.style.setProperty("--secondary-color", colors.secondaryColor);
  //     document.documentElement.style.setProperty("--highlight-color", colors.highlightColor);
  //     document.documentElement.style.setProperty("--visibleScreen", `${window.innerHeight}px`);
  //   });

  //   console.log(`%cInitializing Wave Research...${new Date().toLocaleTimeString()}`, "color: green; font-family:serif; font-size: 12px");

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (setActiveRouteAction) setActiveRouteAction(pathname);
  //   return () => {
  //     if (setActiveRouteAction) setActiveRouteAction(pathname);
  //   };
  // }, [pathname]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  // useEffect(() => {
  //   if (initialized && props.displayHeader !== displayHeader) {
  //     setDisplayHeader(!!props.displayHeader);
  //     if (setDisplayHeaderAction) setDisplayHeaderAction(!!props.displayHeader);
  //   }
  // }, [props.displayHeader]);

  // const handleResize = () => {
  //   if (setDeviceSizeAction && setBreakpointAction) {
  //     import("utils/constants").then((module) => {
  //       const { xl, lg, md, sm } = module.BREAKPOINTS,
  //         { innerWidth: width, innerHeight: height } = window;

  //       setDeviceSizeAction({ width, height });
  //       setBreakpointAction(width > xl ? "xl" : width > lg ? "lg" : width > md ? "md" : width > sm ? "sm" : "xs");
  //     });
  //   }
  // };

  // const handleScroll = () => {
  //   const w = window,
  //     yScrollPosition = w.scrollY,
  //     pageTopReached = yScrollPosition < 81,
  //     scrollingToPageTop = yScrollPosition < prevScrollPos,
  //     areaHeight = Math.round(w.innerHeight + yScrollPosition) + 2,
  //     pageBottomReached = areaHeight >= document.body.offsetHeight,
  //     newDisplayHeader = !pageTopReached && (scrollingToPageTop || pageBottomReached);

  //   setPrevScrollPos(yScrollPosition);

  //   // ? Update displayHeader only when new state is diff from prev
  //   if (initialized && newDisplayHeader !== displayHeader) {
  //     setDisplayHeader(newDisplayHeader);
  //     if (setDisplayHeaderAction) setDisplayHeaderAction(newDisplayHeader);
  //   }
  // };

  return (
    <>
      <button onClick={themeHandler}>setTheme</button>
      <p>sssS</p>
    </>
  );

  // return (
  //   <AntdRegistry>
  // <ConfigProvider
  //   theme={{
  //     algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,

  //     token: {
  //       colorText: "hsl(from var(--text-contrast-color) h s calc(l + 15))",
  //       fontFamily: "",
  //       colorPrimary: colors.primaryColor,
  //       colorFillSecondary: colors.secondaryColor,
  //       colorLink: "", // <= disable antd link color
  //       colorLinkHover: "", // <= disable antd link color
  //       colorLinkActive: "", // <= disable antd link color
  //     },
  //   }}>
  //       {initialized ? (
  //         <>
  //           <HeaderContainer position="sticky" />
  //           {children}
  //         </>
  //       ) : (
  //         <Spin fullscreen />
  //       )}
  //       {/* <WebVitals /> */}
  //     </ConfigProvider>
  //   </AntdRegistry>
  // );
};

const mapDispatchToProps = { setProfileAction, setDeviceSizeAction, setDisplayHeaderAction, setBreakpointAction, setActiveRouteAction },
  mapStateToProps = (state: RootState) => ({ theme: state.account.profile.theme, displayHeader: state.layout.displayHeader }),
  RootProviderReduxConnect = connect(mapStateToProps, mapDispatchToProps)(RootProvider);

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [theme, setTheme] = useState("dark");

  const themeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <html lang="en" className={`${merienda.className}  ${robotoSlab.className}`}>
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,

              token: {
                fontFamily: "",
                colorPrimary: COLORS.primaryColor,
                colorFillSecondary: COLORS.secondaryColor,
                colorLink: "", // <= disable antd link color
                colorLinkHover: "", // <= disable antd link color
                colorLinkActive: "", // <= disable antd link color
                colorText: "hsl(from var(--text-contrast-color) h s calc(l + 15))",
              },
            }}>
            <ReduxProvider store={appStore}>
              <h1>{theme}</h1>
              <p>just here</p>

              <RootProviderReduxConnect themeHandler={themeHandler} theme={theme}>
                {children}
              </RootProviderReduxConnect>
            </ReduxProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
