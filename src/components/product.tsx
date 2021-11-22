import Link from "next/link";
import { ProductType } from "sources/types";

export const Product = (props: ProductType) => {
  const {
    slug,
    image: { url },
  } = props;
  return (
    <Link href={`/${slug}`}>
      <img
        src={url}
        width="100px"
        height="100px"
        className="w-full cursor-pointer hover:-translate-y-4 transition-all"
      />
    </Link>
  );
};
