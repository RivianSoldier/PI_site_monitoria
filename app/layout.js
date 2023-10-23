// layout.js

"use client";
import "./globals.css";
import App from "./App";
import { Inter } from "next/font/google";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../config/authConfig";
import { useIsAuthenticated } from "@azure/msal-react";

const inter = Inter({ subsets: ["latin"] });
const msalInstance = new PublicClientApplication(msalConfig);

export default function RootLayout({ children, pageProps }) {
  const isAuthenticated = useIsAuthenticated();
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <MsalProvider instance={msalInstance}>
          {isAuthenticated ? null : <App {...pageProps} />}
          {children}
        </MsalProvider>
      </body>
    </html>
  );
}
