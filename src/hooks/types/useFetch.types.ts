// Generic Strapi response for single record
export interface StrapiSingleResponse<T> {
  data: ApiResponse<T>;
  meta?: Record<string, any>;
}

// Generic Strapi response for collections
export interface StrapiCollectionResponse<T> {
  data: ApiResponse<T>[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// categories
export interface ApiResponse<T> {
  id: number;
  attributes: T;
}

export interface Product {
  title: string;
  desc: string;
  price: number;
  oldPrice: number;
  isNew: boolean;
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  img: ImageRelation;
  img2: ImageRelation;
  categories: Relation<Categories>;
  sub_categories: Relation<Categories>;
  bannerImg: ImageRelation;
  products: Product[];
}

export interface Relation<T> {
  data: T[];
}

export interface ImageRelation {
  data: {
    id: number;
    attributes: ImageAttributes;
  };
}

export interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: string;
  updatedAt: string;
}

export interface ImageFormats {
  small?: ImageFormat;
  thumbnail?: ImageFormat;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface Categories {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
