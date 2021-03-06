import { Product } from "components/product";
import Link from "next/link";
import { HomeProductsQuery } from "sources/api/generated/graphql";
import { ProductContainerType } from "types/index";

export const ProductContainer = ({
  products,
  title,
  slug,
}: ProductContainerType) => {
  return (
    <div>
      <div className="flex justify-between items-center border-b-2 border-gray-100">
        <h2 className="text-3xl font-astoria py-4">{title}</h2>
        <Link href={`/${slug}`}>Tümünü Gör</Link>
      </div>
      <div className="grid grid-cols-4 overflow-hidden">
        {products.map((d) => {
          return <Product key={d.slug} {...d} />;
        })}
      </div>
    </div>
  );
};

export const renderProducts = (data: HomeProductsQuery) => {
  let categories: string[] = [];

  for (let cat in data) {
    categories.push(cat);
  }

  return categories.map((cat) => {
    const categoryNameForTitle = (cat.charAt(0).toUpperCase() + cat.slice(1))
      .split("_")
      .join(" ");
    const categorySlug = cat.split("_").join("-");
    return (
      <ProductContainer
        key={cat}
        title={categoryNameForTitle}
        slug={categorySlug}
        products={data[cat]}
      />
    );
  });
};
