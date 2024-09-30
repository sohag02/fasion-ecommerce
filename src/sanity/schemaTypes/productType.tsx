import { defineField, defineType } from "sanity";
import gallery from "./gallery";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the product",
    }),
    defineField({
      name: "isFeatured",
      title: "Is Featured",
      type: "boolean",
      description: "Is the product featured?",
      initialValue: true,
    }),
    defineField(
      gallery
    ),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [{ 
        type: "reference", 
        to: { type: "category" } 
      }],
      description: "Category of the product",
    }),
  ],
});