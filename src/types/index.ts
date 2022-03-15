export type ProductType = {
  withTitle: boolean;
  id: string;
  name: string;
  slug?: string;
  image: {
    url: string;
  };
  categories: {
    id: string;
  };
};

export type ProductContainerType = {
  title: string;
  slug: string;
  products: ProductType[];
};
