import Link from "next/link";
import { findCategoryById } from "sources/constant/categories";
import { ProductType } from "sources/types";

export const Product = (props: ProductType) => {
  const {
    id,
    image: { url },
    categories,
    name,
    withTitle,
  } = props;
  const categoryName = findCategoryById(categories[0].id);
  return (
    <Link href={`/${categoryName}/${id}`}>
      <div className="overflow-hidden">
        <img
          src={url}
          width="100px"
          height="100px"
          className="w-full cursor-pointer hover:-translate-y-4 transition-all"
        />
        {withTitle && (
          <p className="text-center font-astoria text-xl">{name}</p>
        )}
      </div>
    </Link>
  );
};
