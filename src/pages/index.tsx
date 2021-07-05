import { Product } from "components/product";
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="container">
        <div>
          <h2 className="text-3xl">Sandalyeler</h2>
          <div className="grid grid-cols-4">
            {data.bar.map((d) => {
              return (
                <Product
                  key={d.slug}
                  name={d.name}
                  slug={d.slug}
                  image={d.image}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  await client.query(HomeProductsDocument).toPromise();
  return { props: { urqlState: ssrCache.extractData() }, revalidate: 60 };
}
