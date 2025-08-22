import Image from "next/image";
import Link from "next/link";
import img from '../../public/images/laptop.jpg'

// Sample product data - you can replace with your actual products
const featuredProducts = [
  {
    id: 1,
    name: "Premium Laptop",
    description: "High-performance laptop with 16GB RAM",
    price: 999.99,
    image: "/images/laptop.jpg" // Replace with actual images
  },
  {
    id: 2, 
    name: "Wireless Headphones",
    description: "Noise-cancelling Bluetooth headphones",
    price: 249.99,
    image: "/images/Wireless Headphones.jpg"
  },
  {
    id: 3,
    name: "Smartphone Pro",
    description: "Latest smartphone with advanced camera",
    price: 699.99,
    image: "/images/Smartphone Pro.jpg"
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section (keep this) */}
      <section className="bg-blue-100 py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to ProductApp</h1>
          <p className="text-lg mb-8">Discover amazing products at great prices</p>
          <Link 
            href="/products" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS SECTION - Showcasing actual products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-gray-600 text-center mb-12">Check out our most popular items</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Product Image */}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {/* <span className="text-gray-500">Product Image</span> */}

                   <Image className="w-40 h-40" src={product.image} alt={product.name} width={300} height={200} />
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      href={`/products/${product.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Details
                    </Link>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center mt-12">
            <Link 
              href="/products"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Optional: Feature Highlights Section (if you want both) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">30-day money-back guarantee on all products</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our team is always here to help you</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}