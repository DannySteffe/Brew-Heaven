import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center font-display text-coffee-900 mb-8">
        Get in Touch
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold font-display text-coffee-800 mb-6">
            Send Us a Message
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-body"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coffee-500 focus:border-coffee-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 font-body"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coffee-500 focus:border-coffee-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 font-body"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coffee-500 focus:border-coffee-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-coffee-800 text-white py-3 rounded-lg font-bold hover:bg-coffee-900 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-gray-500 font-body">Map Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
