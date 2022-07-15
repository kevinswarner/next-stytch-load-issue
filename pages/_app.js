import { StytchProvider, initStytch } from "@stytch/stytch-react";
import Script from "next/script";
import "../styles/globals.css";

const stytch = initStytch(
  "public-token-test-7740ac4e-d052-431e-af4e-c492870e4d8c"
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src={"https://js.stytch.com/stytch.js"}
        strategy="beforeInteractive"
      />
      <StytchProvider stytch={stytch}>
        <Component {...pageProps} />
      </StytchProvider>
    </>
  );
}

export default MyApp;
