import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
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
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  meta?: Maybe<Array<Maybe<ComponentSeoMetaInput>>>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type ComponentSeoMetaInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
};



export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type InputId = {
  id: Scalars['ID'];
};


export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

















export type ProductInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  gallery?: Maybe<Array<Maybe<Scalars['ID']>>>;
  meta?: Maybe<ComponentSeoMetaInput>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export const PublicationState = {
  Live: 'LIVE',
  Preview: 'PREVIEW'
} as const;

export type PublicationState = typeof PublicationState[keyof typeof PublicationState];

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};




























export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};





export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};



export type CreateCategoryInput = {
  data?: Maybe<CategoryInput>;
};


export type CreateProductInput = {
  data?: Maybe<ProductInput>;
};


export type CreateUserInput = {
  data?: Maybe<UserInput>;
};


export type DeleteCategoryInput = {
  where?: Maybe<InputId>;
};


export type DeleteFileInput = {
  where?: Maybe<InputId>;
};


export type DeleteProductInput = {
  where?: Maybe<InputId>;
};


export type EditCategoryInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  meta?: Maybe<Array<Maybe<EditComponentSeoMetaInput>>>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentSeoMetaInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProductInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  gallery?: Maybe<Array<Maybe<Scalars['ID']>>>;
  meta?: Maybe<EditComponentSeoMetaInput>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCategoryInput>;
};


export type UpdateProductInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductInput>;
};


export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};


export type ProductVitrinFragment = { __typename?: 'Product', id: string, name?: Maybe<string>, slug?: Maybe<string>, image?: Maybe<{ __typename?: 'UploadFile', url: string }>, meta?: Maybe<{ __typename?: 'ComponentSeoMeta', title?: Maybe<string> }> };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories?: Maybe<Array<Maybe<{ __typename?: 'Category', name?: Maybe<string> }>>> };

export type HomeProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeProductsQuery = { __typename?: 'Query', bar?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, bench?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, bergere?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, bookshelf?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, seat?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, console?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, lodges?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, tableLeg?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, table?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, officeChair?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, puff?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, chair?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, coffeTableLegs?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, coffeTable?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
    & ProductVitrinFragment
  )>>>, servant?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, painting?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>>, unit?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductVitrinFragment
  )>>> };

export const ProductVitrinFragmentDoc = gql`
    fragment ProductVitrin on Product {
  id
  name
  slug
  image {
    url
  }
  meta {
    title
  }
}
    `;
export const CategoriesDocument = gql`
    query Categories {
  categories {
    name
  }
}
    `;

export function useCategoriesQuery(options: Omit<Urql.UseQueryArgs<CategoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CategoriesQuery>({ query: CategoriesDocument, ...options });
};
export const HomeProductsDocument = gql`
    query HomeProducts {
  bar: products(limit: 6, where: {categories: {slug: "bar-sandalyeleri"}}) {
    ...ProductVitrin
  }
  bench: products(limit: 6, where: {categories: {slug: "benchler"}}) {
    ...ProductVitrin
  }
  bergere: products(limit: 6, where: {categories: {slug: "berjerler"}}) {
    ...ProductVitrin
  }
  bookshelf: products(limit: 6, where: {categories: {slug: "kitapliklar"}}) {
    ...ProductVitrin
  }
  seat: products(limit: 6, where: {categories: {slug: "koltuklar"}}) {
    ...ProductVitrin
  }
  console: products(limit: 6, where: {categories: {slug: "konsollar"}}) {
    ...ProductVitrin
  }
  lodges: products(limit: 6, where: {categories: {slug: "localar"}}) {
    ...ProductVitrin
  }
  tableLeg: products(limit: 6, where: {categories: {slug: "masa-ayaklari"}}) {
    ...ProductVitrin
  }
  table: products(limit: 6, where: {categories: {slug: "masalar"}}) {
    ...ProductVitrin
  }
  officeChair: products(
    limit: 6
    where: {categories: {slug: "ofis-sandalyeleri"}}
  ) {
    ...ProductVitrin
  }
  puff: products(limit: 6, where: {categories: {slug: "puflar"}}) {
    ...ProductVitrin
  }
  chair: products(limit: 6, where: {categories: {slug: "sandalye-1"}}) {
    ...ProductVitrin
  }
  coffeTableLegs: products(
    limit: 6
    where: {categories: {slug: "sehpa-ayaklari"}}
  ) {
    ...ProductVitrin
  }
  coffeTable: products(limit: 6, where: {categories: {slug: "sehpalar"}}) {
    ...ProductVitrin
    ...ProductVitrin
  }
  servant: products(limit: 6, where: {categories: {slug: "servantlar"}}) {
    ...ProductVitrin
  }
  coffeTable: products(limit: 6, where: {categories: {slug: "sehpalar"}}) {
    ...ProductVitrin
  }
  painting: products(limit: 6, where: {categories: {slug: "tablalar"}}) {
    ...ProductVitrin
  }
  unit: products(limit: 6, where: {categories: {slug: "uniteler"}}) {
    ...ProductVitrin
  }
}
    ${ProductVitrinFragmentDoc}`;

export function useHomeProductsQuery(options: Omit<Urql.UseQueryArgs<HomeProductsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<HomeProductsQuery>({ query: HomeProductsDocument, ...options });
};