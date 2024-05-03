import type { Metadata } from "next";
import { Montserrat, Syncopate } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header"
import Cursor from "../components/Cursor/Cursor";
import { Tanstack } from "@/providers/tanstack";
import Translate from "@/providers/translate";

const syncopate = Syncopate({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-syncopate'});
const montserrat = Montserrat({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-montserrat'});

export const metadata: Metadata = {
  title: "CRUD",
  description: "Студия CRUD",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <body className={`${syncopate.variable} ${montserrat.variable} font-sans`}>
        <Tanstack>
            <Cursor />
            <Header />
            {children}
        </Tanstack>
      </body>
    </html>
  );
}
