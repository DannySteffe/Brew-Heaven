import React from "react";

const team = [
  {
    name: "Jane Doe",
    role: "Head Barista",
    bio: "Jane has been crafting the perfect cup for over a decade, leading our team with passion and precision.",
    img: "https://images.unsplash.com/photo-1579789033239-3ff7324554b2?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "John Smith",
    role: "Roast Master",
    bio: "John sources and roasts our beans to perfection, ensuring every batch meets our high standards.",
    img: "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1888&auto=format&fit=crop",
  },
  {
    name: "Emily White",
    role: "Pastry Chef",
    bio: "Emily creates all our delicious pastries from scratch, the perfect pairing for your coffee.",
    img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1780&auto=format&fit=crop",
  },
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-coffee-900">
          Our Story
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700 font-body">
          Brew Haven was born from a simple idea: to create a cozy, welcoming
          space where people can enjoy exceptionally high-quality coffee. We
          believe that a great cup of coffee can be a small but powerful ritual
          that brings joy and comfort to your day.
        </p>
      </div>

      <div className="bg-coffee-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold font-display text-coffee-800 text-center mb-6">
          Our Mission
        </h2>
        <p className="text-center max-w-4xl mx-auto text-gray-600 font-body">
          Our mission is to serve the finest coffee with a smile. We are
          committed to sourcing our beans ethically, roasting them with care,
          and preparing each drink with an unwavering attention to detail. We
          aim to be more than just a coffee shop; we want to be a cornerstone of
          the community, a place for connection and inspiration.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold font-display text-coffee-900 mb-8">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold font-display text-coffee-800">
                {member.name}
              </h3>
              <p className="text-md font-semibold text-coffee-600">
                {member.role}
              </p>
              <p className="mt-2 text-sm text-gray-600 font-body">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
