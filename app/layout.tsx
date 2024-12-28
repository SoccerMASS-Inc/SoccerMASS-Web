"use client";

import "./globals.scss";
import dynamic from "next/dynamic";
import appStore from "store/appStore";

import { useState } from "react";
import { COLORS } from "utils/constants";
import { theme as antdTheme } from "antd";
import { Merienda, Roboto_Slab } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], display: "swap" });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], display: "swap" });
const LayoutProvider = dynamic(() => import("components/layouts/layoutProvider")),
  ConfigProvider = dynamic(() => import("antd").then((module) => module.ConfigProvider)),
  ReduxProvider = dynamic(() => import("react-redux").then((module) => module.Provider)),
  Analytics = dynamic(() => import("@vercel/analytics/react").then((module) => module.Analytics)),
  AntdRegistry = dynamic(() => import("@ant-design/nextjs-registry").then((module) => module.AntdRegistry)),
  SpeedInsights = dynamic(() => import("@vercel/speed-insights/next").then((module) => module.SpeedInsights));

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [theme, setTheme] = useState<Theme>("light"),
    themeHandler = (theme: Theme) => setTheme(theme);

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
              <LayoutProvider themeHandler={themeHandler}>{children}</LayoutProvider>
            </ReduxProvider>
          </ConfigProvider>
        </AntdRegistry>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
