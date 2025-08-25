import React, { useState } from "react";
import Modal from "./Modal";

const images = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  src: `https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1954&auto=format&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&h=${
    300 + i * 10
  }`,
  alt: `Gallery image ${i + 1}`,
}));

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center font-display text-coffee-900 mb-8">
        Our Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openModal(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedImage} onClose={closeModal}>
        {selectedImage && (
          <div className="p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-auto h-auto max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
