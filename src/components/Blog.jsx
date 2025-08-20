import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "The Art of the Perfect Espresso",
    excerpt:
      "Dive deep into the science and passion behind pulling the perfect shot of espresso, from bean to cup.",
    img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "A Guide to Coffee-Growing Regions",
    excerpt:
      "Explore the unique flavors and characteristics of coffees from around the world. Find your new favorite origin.",
    img: "https://images.unsplash.com/photo-1459755486862-b55449bb3927?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "How to Brew at Home Like a Pro",
    excerpt:
      "Master the most popular home brewing methods with our step-by-step guides and pro tips.",
    img: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?q=80&w=2070&auto=format&fit=crop",
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center font-display text-coffee-900 mb-8">
        From the Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold font-display text-coffee-800 mb-2">
                {post.title}
              </h2>
              <p className="font-body text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="font-bold text-coffee-600 hover:text-coffee-800 transition-colors"
              >
                Read more &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
