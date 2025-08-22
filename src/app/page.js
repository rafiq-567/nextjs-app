
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-blue-100 py-20 text-center">
//         <div className="container mx-auto">
//           <h1 className="text-4xl font-bold mb-4">Welcome to ProductApp</h1>
//           <p className="text-lg mb-8">Discover amazing products at great prices</p>
//           <Link 
//             href="/products" 
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
//           >
//             Browse Products
//           </Link>
//         </div>
//       </section>

//       {/* Product Highlights Section */}
    
//       <section className="py-16 bg-white">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Products?</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Highlight 1 */}
//             <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
//               <p className="text-gray-600">All our products undergo rigorous quality checks to ensure excellence.</p>
//             </div>

//             {/* Highlight 2 */}
//             <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
//               <p className="text-gray-600">Get the most value for your money with our competitive pricing strategy.</p>
//             </div>

//             {/* Highlight 3 */}
//             <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
//               <p className="text-gray-600">We offer quick and reliable shipping to get your products to you faster.</p>
//             </div>
//           </div>

//           {/* Additional highlights row */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//             {/* Highlight 4 */}
//             <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
//               <p className="text-gray-600">Our customer support team is available around the clock to assist you.</p>
//             </div>

//             {/* Highlight 5 */}
//             <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Secure Shopping</h3>
//               <p className="text-gray-600">Your transactions are protected with advanced security measures.</p>
//             </div>

//             {/* Highlight 6 */}
//             <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Satisfied Customers</h3>
//               <p className="text-gray-600">Join thousands of happy customers who trust our products and services.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import Image from "next/image";
import Link from "next/link";

// Sample product data - you can replace with your actual products
const featuredProducts = [
  {
    id: 1,
    name: "Premium Laptop",
    description: "High-performance laptop with 16GB RAM",
    price: 999.99,
    image: "https://i.ibb.co.com/s9t8mgMN/laptop.jpg" // Replace with actual images
  },
  {
    id: 2, 
    name: "Wireless Headphones",
    description: "Noise-cancelling Bluetooth headphones",
    price: 249.99,
    image: "https://i.ibb.co.com/S7QmntkT/Wireless-Headphones.jpg"
  },
  {
    id: 3,
    name: "Smartphone Pro",
    description: "Latest smartphone with advanced camera",
    price: 699.99,
    image: "https://i.ibb.co.com/bRvnCBKQ/Smartphone-Pro.jpg"
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
                  <span className="text-gray-500">Product Image</span>
                  
                   {/* <Image src={product.image} alt={product.name} width={300} height={200} /> */}
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