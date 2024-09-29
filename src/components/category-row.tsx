import Link from "next/link";
import { client } from "@/sanity/lib/client";

// const categories = [
//   { name: "New Arrivals", href: "/new-arrivals" },
//   { name: "Men", href: "/men" },
//   { name: "Women", href: "/women" },
//   { name: "Kids", href: "/kids" },
//   { name: "Accessories", href: "/accessories" },
// ];
interface Category {
  title: string;
  slug: {
    current: string;
  };
}

export async function CategoryRow() {
	const categories: Category[] = await client.fetch(`*[_type == "category"]{title, slug}`)
  return (
    <div>
      {categories.map((category) => (
        <Link
          key={category.title}
          href={category.slug.current}
          className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
}
