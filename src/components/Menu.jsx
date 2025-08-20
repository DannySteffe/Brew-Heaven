import React, { useState, useMemo } from "react";
import { items, categories } from "../data/menu";
import ProductCard from "./ProductCard";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // In a real app, you'd update global state or context here
  };

  const filteredAndSortedItems = useMemo(() => {
    let filtered =
      selectedCategory === "All"
        ? items
        : items.filter((item) => item.category === selectedCategory);

    switch (sortBy) {
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center font-display text-coffee-900 mb-8">
        Our Menu
      </h1>

      {/* Filters and Sorting */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="category-select"
            className="font-body text-coffee-800"
          >
            Filter by:
          </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 rounded-lg border border-coffee-300 bg-white font-body"
          >
            <option value="All">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort-select" className="font-body text-coffee-800">
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 rounded-lg border border-coffee-300 bg-white font-body"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredAndSortedItems.map((item) => (
          <ProductCard key={item.id} {...item} onAdd={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
