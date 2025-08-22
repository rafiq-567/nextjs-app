// import Image from "next/image";

// export default function Home() {
//   return (
//     <h1>Hello World</h1>
//   );
// }


import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
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

      {/* Product Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">High Quality</h3>
              <p>All our products are carefully selected for their exceptional quality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">Affordable Prices</h3>
              <p>Get the best value for your money with our competitive pricing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p>We ensure quick and reliable delivery to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}