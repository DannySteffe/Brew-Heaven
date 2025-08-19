import React from "react";
import ProductCard from "./ProductCard";

const bestSellers = [
  {
    id: 1,
    name: "Classic Espresso",
    description: "A rich and intense shot of pure coffee bliss.",
    price: 2.5,
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "Creamy Latte",
    description: "Smooth espresso with steamed milk and a touch of foam.",
    price: 3.75,
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Iced Caramel Macchiato",
    description: "A sweet and refreshing blend of espresso, milk, and caramel.",
    price: 4.25,
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop",
  },
];

const Home = () => {
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // Here you would typically handle the logic to add the product to a shopping cart state
  };

  return (
    <>
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-bold font-display">
            Welcome to Brew Haven
          </h1>
          <p className="mt-4 text-xl font-body">
            Your daily dose of happiness, one cup at a time.
          </p>
          <button className="mt-8 px-8 py-3 bg-coffee-600 text-white font-bold rounded-lg hover:bg-coffee-700 transition-colors duration-300">
            Order Now
          </button>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="bg-coffee-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-coffee-900 font-display mb-8">
            Our Best Sellers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAdd={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
