import { renderProducts } from "containers/product-container";
import { Header } from "sources/containers/header";
import { Hero } from "sources/containers/hero";
import {
  HomeProductsDocument,
  useHomeProductsQuery,
} from "src/api/generated/graphql";
import { client, ssrCache } from "src/api/urql/urql-client";

export default function Home() {
  const [{ data, fetching, error }] = useHomeProductsQuery();
  console.log(data);

  if (fetching) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="">
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Header />
      <Hero />
      <main className="container my-8">
        <div className="grid grid-cols-1 gap-12">{renderProducts(data)}</div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  await client.query(HomeProductsDocument).toPromise();
  return { props: { urqlState: ssrCache.extractData() }, revalidate: 60 };
}
