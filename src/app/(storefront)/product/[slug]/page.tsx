import { notFound } from "next/navigation";
import ImageGallery from "@/components/ImageGallery";
import ProductActions from "@/components/ProductActions";
import { PRODUCT_QUERY, PRODUCTS_QUERY } from "@/sanity/lib/queries";
import { PRODUCT_QUERYResult, PRODUCTS_QUERYResult } from "@/sanity/types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<PRODUCT_QUERYResult | null> {
  const product = await client.fetch(PRODUCT_QUERY, {
    slug,
  });
  return product || null;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  const imageUrls = product.gallery?.images?.map((image) => {
    return urlFor(image).url();
  }) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <ImageGallery images={imageUrls} name={product.title!} />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price}</p>
          <p className="mb-6 text-gray-600">{product.description}</p>
          <ProductActions
            colors={["#FFFFFF", "#000000", "#87CEEB"]}
            sizes={["Small", "Medium", "Large"]}
          />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const products: PRODUCTS_QUERYResult = await client.fetch(PRODUCTS_QUERY);
  return products.map(product => ({
    params: { slug: product.slug!.current }
  }));
}

export const revalidate = 60; // Revalidate every 60 seconds
