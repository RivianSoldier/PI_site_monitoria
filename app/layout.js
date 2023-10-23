// layout.js

"use client";
import "./globals.css";
import App from "./App";
import { Inter } from "next/font/google";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../config/authConfig";

const inter = Inter({ subsets: ["latin"] });
const msalInstance = new PublicClientApplication(msalConfig);

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <MsalProvider instance={msalInstance}>
          <App {...pageProps} />
          {children}
        </MsalProvider>
      </body>
    </html>
  );
}
