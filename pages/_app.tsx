import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Instrument_Sans } from "@next/font/google";

const instrument = Instrument_Sans({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={instrument.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
