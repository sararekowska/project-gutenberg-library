import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { I18nextProvider } from "react-i18next";
import i18n from "../translations/i18n";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: { staleTime: 1000 * 60, refetchOnWindowFocus: false },
  // },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </I18nextProvider>
    </RecoilRoot>
  );
}

export default MyApp;
