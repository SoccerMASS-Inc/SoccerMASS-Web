import "/styles/globals.scss";

import { Inter } from "next/font/google";
import GlobalLayout from "components/layouts/global";
import StoreContextProvider from "components/providers/StoreContext";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { Metadata } from "next";
import { ReactChildren } from "interfaces/components/shared.interface";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoccerMASS",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: ReactChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreContextProvider>
          <GlobalLayout>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </GlobalLayout>
        </StoreContextProvider>
      </body>
    </html>
  );
}
