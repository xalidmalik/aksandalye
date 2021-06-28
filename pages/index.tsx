import { client, ssrCache } from "sources/api/urql-client";
import { useQuery } from "urql";

const CategoriesQuery = `
query Categories {
  categories {
    name
  }
}
`;

export default function Home() {
  const [{ data, fetching, error }] = useQuery({
    query: CategoriesQuery,
  });

  if (fetching) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;

  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen py-2">
  //     <Head>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
  //       Content
  //     </main>
  //     <Footer />
  //   </div>
  // );
}

export async function getStaticProps() {
  await client.query(CategoriesQuery).toPromise();
  return { props: { urqlState: ssrCache.extractData() }, revalidate: 60 };
}
