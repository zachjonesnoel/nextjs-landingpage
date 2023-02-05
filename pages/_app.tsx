import "@/styles/globals.css";
import type { AppProps } from "next/app";
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { ...pageProps },
}: AppProps<{}>) {
  return (
    <div className={cx(sfPro.variable, inter.variable)}>
      <Component {...pageProps} />
    </div>
  );
}
