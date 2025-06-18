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
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero.jpg"
            alt="Fashion Hero"
            fill
            sizes="100vw"
            quality={90}
            priority
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            className="brightness-50"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Fashion Store</h1>
            <p className="text-lg md:text-xl mb-8">Discover the latest trends in fashion</p>
            <Link 
              href="/products" 
              className="inline-block bg-white text-black px-6 md:px-8 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => (
              <div key={category.name} className="relative h-[300px] md:h-[400px] group">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Link 
                    href={`/products?category=${category.name.toLowerCase()}`}
                    className="text-white text-lg md:text-xl font-semibold"
                  >
                    {category.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
