import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./containers/navbar/Navbar";
import ReduxStoreProvider from "./redux/ReduxStoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "LinkQR | A QR Code Generator - by Chidera Emmanuel",
  description:
    "A web application for generating unique and dynamic QR codes for websites",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxStoreProvider>
        <body className={poppins.className}>
          <header>
            <Navbar />
          </header>
          {children}
        </body>
      </ReduxStoreProvider>
    </html>
  );
}
