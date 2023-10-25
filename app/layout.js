// layout.js

"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../config/authConfig";

const inter = Inter({ subsets: ["latin"] });
export const msalInstance = new PublicClientApplication(msalConfig);
msalInstance.addEventCallback((event) => {
  try {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
      msalInstance.setActiveAccount(event.payload.account);
    }
  } catch (error) {
    console.error("Something wrong in msalInstance.addEventCallback - ", error);
  }
});

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <MsalProvider instance={msalInstance}>{children}</MsalProvider>
      </body>
    </html>
  );
}
