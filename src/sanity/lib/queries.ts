import { defineQuery } from "next-sanity";

export const PRODUCTS_QUERY = defineQuery(`*[_type == "product"]`)

export const PRODUCT_QUERY = defineQuery(`*[_type == "product" && slug.current == $slug][0]{
  ...,
  category->{
    title
  }
}`)

export const CATEGORIES_QUERY = defineQuery(`*[_type == "category"]{title, slug}`)

export const CATEGORY_QUERY = defineQuery(`*[_type == "category" && slug.current == $slug][0]{title, slug}`)