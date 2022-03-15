import { renderProducts } from "containers/product-container";
import { Hero } from "sources/containers/hero";
import { Layout } from "sources/containers/layout";
import {
  HomeProductsDocument,
  useHomeProductsQuery,
} from "src/api/generated/graphql";
import { client, ssrCache } from "src/api/urql/urql-client";

export default function Home() {
  const [{ data, fetching, error }] = useHomeProductsQuery();

  if (fetching) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <Layout meta={{ title: "Ak Sandalye" }}>
      <Hero />
      <main className="container my-8">
        <div className="grid grid-cols-1 gap-12"> {renderProducts(data)}</div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  await client.query(HomeProductsDocument).toPromise();
  return { props: { urqlState: ssrCache.extractData() }, revalidate: 60 };
}
