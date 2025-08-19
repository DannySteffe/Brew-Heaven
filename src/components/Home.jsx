import React from "react";

const Home = () => {
  return (
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
  );
};

export default Home;
