import Link from "next/link";
import { client } from "@/sanity/lib/client";

export async function CategoryRow() {
	const categories = await client.fetch(`*[_type == "category"]{title, slug}`)
  return (
    <div>
      {categories.map((category) => (
        <Link
          key={category.title}
          href={category.slug!.current!}
          className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
}
