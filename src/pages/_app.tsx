import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar/NavBar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${montserrat.variable} font-mont w-full h-full min-w-full mx-auto overflow-x-hidden`}
    >
      <NavBar />
      <Component {...pageProps} />
    </main>
  );
}
