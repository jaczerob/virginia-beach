import '../app/globals.css';

import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
            <Head>
                <title>Virginia Beach</title>
            </Head>
            <body 
                className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
                )}
            >
            <Header />
                {children}
            <Footer />
        </body>
    </html>
  );
}