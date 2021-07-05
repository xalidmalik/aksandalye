import Link from "next/link";

type ProductType = {
  name: string;
  slug: string;
  image: {
    url: string;
  };
};

export const Product = (props: ProductType) => {
  const {
    name,
    slug,
    image: { url },
  } = props;
  return (
    <Link href={`/${slug}`}>
      <img src={url} width="100px" height="100px" className="w-full" />
    </Link>
  );
};
