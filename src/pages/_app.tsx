import { client, ssrCache } from "src/api/urql/urql-client";
import "styles/tailwind.css";
// import "tailwindcss/tailwind.css";
import { Provider } from "urql";

function MyApp({ Component, pageProps }) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
