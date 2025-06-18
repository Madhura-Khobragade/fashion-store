import Link from 'next/link';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  return (
    <nav className={`bg-white shadow-sm ${className}`}>
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