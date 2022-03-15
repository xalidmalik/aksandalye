import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  meta?: InputMaybe<Array<InputMaybe<ComponentSeoMetaInput>>>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ComponentSeoMetaInput = {
  description?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ProductInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image?: InputMaybe<Scalars['ID']>;
  meta?: InputMaybe<ComponentSeoMetaInput>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export const PublicationState = {
  Live: 'LIVE',
  Preview: 'PREVIEW'
} as const;

export type PublicationState = typeof PublicationState[keyof typeof PublicationState];
export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateCategoryInput = {
  data?: InputMaybe<CategoryInput>;
};

export type CreateProductInput = {
  data?: InputMaybe<ProductInput>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type DeleteCategoryInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteProductInput = {
  where?: InputMaybe<InputId>;
};

export type EditCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  meta?: InputMaybe<Array<InputMaybe<EditComponentSeoMetaInput>>>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditComponentSeoMetaInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditProductInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image?: InputMaybe<Scalars['ID']>;
  meta?: InputMaybe<EditComponentSeoMetaInput>;
  name?: InputMaybe<Scalars['String']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  data?: InputMaybe<EditCategoryInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateProductInput = {
  data?: InputMaybe<EditProductInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type ProductVitrinFragment = { __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null };

export type CategoryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CategoryQuery = { __typename?: 'Query', category?: { __typename?: 'Category', id: string, name?: string | null, meta?: Array<{ __typename?: 'ComponentSeoMeta', title?: string | null, description?: string | null } | null> | null, products?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null } | null };

export type ProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, description?: string | null, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, gallery?: Array<{ __typename?: 'UploadFile', url: string } | null> | null, meta?: { __typename?: 'ComponentSeoMeta', title?: string | null, description?: string | null } | null } | null };

export type HomeProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeProductsQuery = { __typename?: 'Query', sandalye?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, berjerler?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, bar_sandalyeleri?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, koltuklar?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, benchler?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, localar?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, ofis_sandalyeleri?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, puflar?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, konsollar?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, masalar?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, masa_ayaklari?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, sehpalar?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, sehpa_ayaklari?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, servantlar?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, tablalar?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, uniteler?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null, kitapliklar?: Array<{ __typename?: 'Product', id: string, name?: string | null, slug?: string | null, image?: { __typename?: 'UploadFile', url: string } | null, categories?: Array<{ __typename?: 'Category', id: string } | null> | null } | null> | null };

export const ProductVitrinFragmentDoc = gql`
    fragment ProductVitrin on Product {
  id
  name
  slug
  image {
    url
  }
  categories {
    id
  }
}
    `;
export const CategoryDocument = gql`
    query Category($id: ID!) {
  category(id: $id) {
    id
    name
    meta {
      title
      description
    }
    products {
      ...ProductVitrin
    }
  }
}
    ${ProductVitrinFragmentDoc}`;

export function useCategoryQuery(options: Omit<Urql.UseQueryArgs<CategoryQueryVariables>, 'query'>) {
  return Urql.useQuery<CategoryQuery>({ query: CategoryDocument, ...options });
};
export const ProductDocument = gql`
    query Product($id: ID!) {
  product(id: $id) {
    id
    description
    name
    slug
    image {
      url
    }
    gallery {
      url
    }
    meta {
      title
      description
    }
  }
}
    `;

export function useProductQuery(options: Omit<Urql.UseQueryArgs<ProductQueryVariables>, 'query'>) {
  return Urql.useQuery<ProductQuery>({ query: ProductDocument, ...options });
};
export const HomeProductsDocument = gql`
    query HomeProducts {
  sandalye: products(limit: 4, where: {categories: {slug: "sandalye"}}) {
    ...ProductVitrin
  }
  berjerler: products(limit: 4, where: {categories: {slug: "berjerler"}}) {
    ...ProductVitrin
  }
  bar_sandalyeleri: products(
    limit: 4
    where: {categories: {slug: "bar-sandalyeleri"}}
  ) {
    ...ProductVitrin
  }
  koltuklar: products(limit: 4, where: {categories: {slug: "koltuklar"}}) {
    ...ProductVitrin
  }
  benchler: products(limit: 4, where: {categories: {slug: "benchler"}}) {
    ...ProductVitrin
  }
  localar: products(limit: 4, where: {categories: {slug: "localar"}}) {
    ...ProductVitrin
  }
  ofis_sandalyeleri: products(
    limit: 4
    where: {categories: {slug: "ofis-sandalyeleri"}}
  ) {
    ...ProductVitrin
  }
  puflar: products(limit: 4, where: {categories: {slug: "puflar"}}) {
    ...ProductVitrin
  }
  konsollar: products(limit: 4, where: {categories: {slug: "konsollar"}}) {
    ...ProductVitrin
  }
  masalar: products(limit: 4, where: {categories: {slug: "masalar"}}) {
    ...ProductVitrin
  }
  masa_ayaklari: products(limit: 4, where: {categories: {slug: "masa-ayaklari"}}) {
    ...ProductVitrin
  }
  sehpalar: products(limit: 4, where: {categories: {slug: "sehpalar"}}) {
    ...ProductVitrin
  }
  sehpa_ayaklari: products(
    limit: 4
    where: {categories: {slug: "sehpa-ayaklari"}}
  ) {
    ...ProductVitrin
  }
  servantlar: products(limit: 4, where: {categories: {slug: "servantlar"}}) {
    ...ProductVitrin
  }
  tablalar: products(limit: 4, where: {categories: {slug: "tablalar"}}) {
    ...ProductVitrin
  }
  uniteler: products(limit: 4, where: {categories: {slug: "uniteler"}}) {
    ...ProductVitrin
  }
  kitapliklar: products(limit: 4, where: {categories: {slug: "kitapliklar"}}) {
    ...ProductVitrin
  }
}
    ${ProductVitrinFragmentDoc}`;

export function useHomeProductsQuery(options?: Omit<Urql.UseQueryArgs<HomeProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<HomeProductsQuery>({ query: HomeProductsDocument, ...options });
};