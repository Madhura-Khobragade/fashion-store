import Image from "next/image";
import Link from "next/link";

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    name: "Women's Fashion",
    image: "/images/categories/women.jpg"
  },
  {
    name: "Men's Fashion",
    image: "/images/categories/men.jpg"
  },
  {
    name: "Accessories",
    image: "/images/categories/accessories.jpg"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/images/hero/hero.jpg"
          alt="Fashion Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Fashion Store</h1>
          <p className="text-xl mb-8">Discover the latest trends in fashion</p>
          <Link 
            href="/products" 
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="relative h-[400px] group">
          <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Link 
                  href={`/products?category=${category.name.toLowerCase()}`}
                  className="text-white text-xl font-semibold"
        >
                  {category.name}
                </Link>
              </div>
            </div>
          ))}
    </div>
      </section>
    </main>
  );
}
