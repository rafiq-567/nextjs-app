
import Link from "next/link";

// Mock product data (in a real app, you'd fetch this from an API)
const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop", price: 999.99 },
  { id: 2, name: "Smartphone", description: "Latest smartphone", price: 699.99 },
  { id: 3, name: "Headphones", description: "Noise-cancelling headphones", price: 249.99 },
];

export default function Products() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
            <Link 
              href={`/products/${product.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}