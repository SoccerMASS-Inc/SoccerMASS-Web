"use client";

import dynamic from "next/dynamic";
import Loading from "components/shared/loading";

import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { INIT_PROFILE } from "utils/constants";
import { setProfileAction } from "store/actions/account";
import { setDeviceSizeAction, setDisplayHeaderAction, setBreakpointAction } from "store/actions/layout";

const Header = dynamic(() => import("components/layouts/header/HeaderContainer")),
  Watermark = dynamic(() => import("antd").then((module) => module.Watermark));

const LayoutProvider = ({ children, ...props }: any) => {
  const user = null,
    [initialized, setInitialized] = useState(false),
    [prevScrollPos, setPrevScrollPos] = useState(0),
    [displayHeader, setDisplayHeader] = useState(false);

  useEffect(() => {
    props.themeHandler(props.theme);
  }, [props.theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(`%cInitializing Wave Research...${new Date().toLocaleTimeString()}`, "color: green; font-family:serif; font-size: 12px");

      const profile: Profile = user || INIT_PROFILE;

      handleResize();
      setInitialized(true);
      setDisplayHeader(true);
      props.setProfileAction(profile);
      // themeHandler(profile.theme);

      import("utils/constants").then((module) => {
        const colors = module.COLORS;
        const headerHeight = module.HEADER_HEIGHT;

        // --visibleScreen: to fix wrong VH in  iPhone
        // --headerHeight Set relative (not sticky) header height
        document.documentElement.style.setProperty("--headerHeight", `${headerHeight}px`);
        document.documentElement.style.setProperty("--primary-color", colors.primaryColor);
        document.documentElement.style.setProperty("--secondary-color", colors.secondaryColor);
        document.documentElement.style.setProperty("--highlight-color", colors.highlightColor);
        document.documentElement.style.setProperty("--visibleScreen", `${window.innerHeight}px`);
      });

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    // if (initialized && props.displayHeader !== displayHeader) {
    if (props.displayHeader !== displayHeader) {
      setDisplayHeader(!!props.displayHeader);
      props.setDisplayHeaderAction(!!props.displayHeader);
    }
  }, [props.displayHeader]);

  const handleResize = () => {
    import("utils/constants").then((module) => {
      const { xl, lg, md, sm } = module.BREAKPOINTS,
        { innerWidth: width, innerHeight: height } = window;

      props.setDeviceSizeAction({ width, height });
      props.setBreakpointAction(width > xl ? "xl" : width > lg ? "lg" : width > md ? "md" : width > sm ? "sm" : "xs");
    });
  };

  const handleScroll = () => {
    const w = window,
      yScrollPosition = w.scrollY,
      pageTopReached = yScrollPosition < 81,
      scrollingToPageTop = yScrollPosition < prevScrollPos,
      areaHeight = Math.round(w.innerHeight + yScrollPosition) + 2,
      pageBottomReached = areaHeight >= document.body.offsetHeight,
      newDisplayHeader = !pageTopReached && (scrollingToPageTop || pageBottomReached);

    setPrevScrollPos(yScrollPosition);

    // ? Update displayHeader only when new state is diff from prev
    // if (initialized && newDisplayHeader !== displayHeader) {
    if (newDisplayHeader !== displayHeader) {
      setDisplayHeader(newDisplayHeader);
      props.setDisplayHeaderAction(newDisplayHeader);
    }
  };

  return (
    <>
      {initialized ? (
        <>
          <Header position="sticky" />
          {children}
        </>
      ) : (
        <Watermark content="Wave Research">
          <Loading fullscreen />
        </Watermark>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({ theme: state.account.profile.theme, displayHeader: state.layout.displayHeader }),
  mapDispatchToProps = { setProfileAction, setDeviceSizeAction, setDisplayHeaderAction, setBreakpointAction };

export default connect(mapStateToProps, mapDispatchToProps)(LayoutProvider);
