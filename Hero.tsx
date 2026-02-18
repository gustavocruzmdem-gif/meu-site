"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Building Excellence.
          <span className="block text-neutral-300">Transform Your Dream Home.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-neutral-300">
          High-end remodeling and premium construction crafted with precision and integrity.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-6">
          {/* Google Form */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd-3IFDoMVWGhXzbY0ZNhctMZdM6VSCQJqmtuO6xwQPjowQaQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-neutral-200 transition"
          >
            Request Consultation
          </a>

          {/* View Projects */}
          <a
            href="#portfolio"
            className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}
