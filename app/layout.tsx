"use client";

import "./globals.scss";
import dynamic from "next/dynamic";
import { merienda, robotoSlab } from "utils/fonts";
import Loading from "components/shared/loading/Loading";

const ReduxProvider = dynamic(() => import("components/providers/ReduxProvider"), { ssr: false }),
  RootProvider = dynamic(() => import("components/providers/RootProvider"), { loading: () => <Loading fullscreen /> });

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={`${merienda.className}  ${robotoSlab.className}`}>
    <body>
      <ReduxProvider>
        <RootProvider>{children}</RootProvider>
      </ReduxProvider>
    </body>
  </html>
);

export default RootLayout;
