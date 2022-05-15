import type { AppProps } from "next/app";
import "../../../node_modules/@carrot-farm/mongsil-ui/dist/style.css";
import "../styles/tailwind_out.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
