"use client";
import { motion } from "framer-motion";

// Lista das fotos locais
const galleryImages = [
  "/Images/imagem4.jpg",
  "/Images/imagem1.png",
  "/Images/imagem3.jpg",
  "/Images/imagem8.jpg",
  "/Images/imagem7.jpeg",
  "/Images/imagem9.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold tracking-tight">Gallery</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Some of our best work, captured in detail.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
