import React, { useState } from "react";
import { useCart } from "../hooks/useCart";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalPrice, dispatch } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT_ITEM", payload: { id } });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT_ITEM", payload: { id } });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-coffee-600 text-white p-4 rounded-full shadow-lg hover:bg-coffee-700 transition-transform transform hover:scale-110"
        aria-label={`Open cart. ${totalItems} items.`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-display text-coffee-900">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 font-body">
              Your cart is empty.
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-2 border-b"
              >
                <div>
                  <p className="font-bold font-body">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-2 border rounded"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-2 border rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700 ml-2"
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between items-center font-bold text-lg mb-4">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={handleClearCart}
            className="text-sm text-gray-500 hover:underline"
          >
            Clear Cart
          </button>
          <button
            disabled={items.length === 0}
            className="w-full bg-coffee-800 text-white py-3 rounded-lg font-bold hover:bg-coffee-900 disabled:bg-gray-400"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
