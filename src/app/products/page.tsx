import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Summer Dress",
    price: 49.99,
    image: "/images/products/summer-dress.jpg"
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: 29.99,
    image: "/images/products/tshirt.jpg"
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 79.99,
    image: "/images/products/denim-jacket.jpg"
  },
  {
    id: 4,
    name: "Leather Bag",
    price: 89.99,
    image: "/images/products/leather-bag.jpg"
  },
  {
    id: 5,
    name: "Sneakers",
    price: 69.99,
    image: "/images/products/sneakers.jpg"
  },
  {
    id: 6,
    name: "Winter Coat",
    price: 129.99,
    image: "/images/products/winter-coat.jpg"
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 39.99,
    image: "/images/products/sunglasses.jpg"
  },
  {
    id: 8,
    name: "Watch",
    price: 149.99,
    image: "/images/products/watch.jpg"
  }
];

export default function Products() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative h-[400px] mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <Link
              href={`/checkout?product=${product.id}`}
              className="block w-full bg-black text-white text-center py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
} 