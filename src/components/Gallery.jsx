import React, { useState } from "react";

const images = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  src: `https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1954&auto=format&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&h=${
    300 + i * 10
  }`,
  alt: `Gallery image ${i + 1}`,
}));

const Modal = ({ src, alt, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center"
    onClick={onClose}
  >
    <div
      className="relative max-w-4xl max-h-full"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={src}
        alt={alt}
        className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg"
      />
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
      >
        &times;
      </button>
    </div>
  </div>
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center font-display text-coffee-900 mb-8">
        Our Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <Modal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
