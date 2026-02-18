"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Modern Waterfront Residence", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
  { title: "Luxury Bathroom", image: "/Images/imagem2.jpg" },
  { title: "Extiror Corridor", image: "/Images/imagem10.webp" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <h2 className="text-5xl font-bold tracking-tight">Selected Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="group cursor-pointer">
              <div className="overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold tracking-wide">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}