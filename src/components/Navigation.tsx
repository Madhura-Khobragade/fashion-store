import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Fashion Store
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-black transition"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="text-gray-600 hover:text-black transition"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 