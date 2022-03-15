import Link from "next/link";
import { useRouter } from "next/router";
import { CategoryDocument } from "sources/api/generated/graphql";
import { client } from "sources/api/urql/urql-client";
import { Product } from "sources/components/product";
import { findCategoryBySlug } from "sources/constant/categories";
import { Layout } from "sources/containers/layout";

export default function Categories({ category }) {
  const { query } = useRouter();
  console.log("params", query);
  return (
    <Layout meta={category.meta}>
      <main className="container my-32 flex gap-4 flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <Link href="/">
              <p className=" cursor-pointer">Ana Sayfa</p>
            </Link>
            <p>/</p>
            <Link href="/">
              <p className="text-blue-500">{query.categories}</p>
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-left">{category.name}</h1>
        </div>
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-4 overflow-hidden">
            {category.products.map((d) => {
              return <Product key={d.slug} {...d} withTitle />;
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ params: { categories } }) {
  const categoryId = findCategoryBySlug(categories);
  const { data } = await client
    .query(CategoryDocument, { id: categoryId })
    .toPromise();
  return { props: data };
}
