import React from "react";

const ProductCard = ({ id, name, description, price, img, onAdd }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <img className="w-full h-48 object-cover" src={img} alt={name} />
      <div className="p-4">
        <h3 className="text-lg font-bold font-display text-coffee-800">
          {name}
        </h3>
        <p className="mt-2 text-sm text-gray-600 font-body">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-coffee-900">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={() => onAdd({ id, name, price })}
            className="px-4 py-2 bg-coffee-600 text-white text-sm font-bold rounded-lg hover:bg-coffee-700 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
