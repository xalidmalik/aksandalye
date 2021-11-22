export type ProductType = {
  name: string;
  slug: string;
  image: {
    url: string;
  };
};

export type ProductContainerType = {
  title: string;
  slug: string;
  products: ProductType[];
};
