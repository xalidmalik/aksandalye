import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { ProductDocument } from "sources/api/generated/graphql";
import { client } from "sources/api/urql/urql-client";
import { Layout } from "sources/containers/layout";

export default function Home({ product }) {
  const [showImage, setShowImage] = useState(() => ({
    index: 0,
    url: product.image.url,
  }));
  const { query } = useRouter();
  const imageGallery = useMemo(
    () => [product.image, ...product.gallery],
    [product]
  );

  return (
    <Layout meta={product.meta}>
      <main className="container my-32 flex gap-4 flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <Link href="/">
              <p className=" cursor-pointer">Ana Sayfa</p>
            </Link>
            <p>/</p>
            <Link href={`/${query.categories}`}>
              <p className="cursor-pointer">{query.categories}</p>
            </Link>
            <p>/</p>
            <Link href="/">
              <p className="text-blue-500">{query.product}</p>
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-left">{product.name}</h1>
        </div>
        <div className="grid grid-cols-[1fr_256px] gap-4 align-center">
          <div className="w-full flex justify-center items-center bg-white shadow-xl">
            <img
              src={showImage.url}
              className="h-[800px] max-h-[800px] justify-self-center "
            />
          </div>
          <div className="flex flex-col gap-4">
            {imageGallery.map((image, index) => {
              return (
                <div
                  key={image.url}
                  className="h-64 w-64 overflow-hidden relative shadow-xl cursor-pointer"
                  style={{ opacity: index === showImage.index ? 1 : 0.3 }}
                  onMouseEnter={() => setShowImage({ index, url: image.url })}
                >
                  <img
                    src={image.url}
                    className="w-auto h-auto top-[-3rem] absolute"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ params: { product } }) {
  const { data } = await client
    .query(ProductDocument, { id: product })
    .toPromise();

  return { props: data };
}
