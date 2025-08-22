// Mock product data
const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop with 16GB RAM and 1TB SSD", price: 999.99, details: "Powerful processor, long battery life, sleek design" },
  { id: 2, name: "Smartphone", description: "Latest smartphone with advanced camera", price: 699.99, details: "6.5 inch display, 5G connectivity, 128GB storage" },
  { id: 3, name: "Headphones", description: "Noise-cancelling headphones", price: 249.99, details: "Wireless, 30-hour battery life, comfortable fit" },
];

export default function ProductDetails({ params }) {
  const product = products.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Product Details</h2>
          <p>{product.details}</p>
        </div>
        
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}