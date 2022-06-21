import type { AppProps } from "next/app";

import { QueryClientProvider } from "react-query";
import queryClient from "../utils/queryClient";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/global";

import NextNProgress from "nextjs-progressbar";

import { CartProvider } from "../hooks/useCart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <GlobalStyle />
          <NextNProgress
            color="#FFBA08"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
