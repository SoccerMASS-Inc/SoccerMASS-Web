"use client";

import "./globals.scss";
import dynamic from "next/dynamic";
import { merienda, robotoSlab } from "utils/fonts";

const ReduxProvider = dynamic(() => import("components/providers/ReduxProvider"), { ssr: false }),
  RootProvider = dynamic(() => import("components/providers/RootProvider"), { ssr: false });

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
