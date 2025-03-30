import "@/shared/styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps<object>) {
  return <Component {...pageProps} />;
}
export default App;
