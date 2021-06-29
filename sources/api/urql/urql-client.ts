import { devtoolsExchange } from "@urql/devtools";
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from "urql";

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });
const client = createClient({
  url: process.env.GRAPHQL_URL,
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange,
    ssrCache,
    fetchExchange,
  ],
  fetchOptions: () => {
    return { headers: {} };
  },
});

export { client, ssrCache };
