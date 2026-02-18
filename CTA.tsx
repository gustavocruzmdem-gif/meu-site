"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 bg-black text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Home?</h2>
        <p className="text-lg text-neutral-300 mb-12">
          Schedule your free consultation today and experience the MemHouse difference.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* Google Form */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd-3IFDoMVWGhXzbY0ZNhctMZdM6VSCQJqmtuO6xwQPjowQaQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-neutral-200 transition"
          >
            Request Consultation
          </a>

          {/* Contact via phone */}
          <a
            href="tel:+13215075924"
            className="border border-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition"
          >
            Call Us
          </a>

          {/* Contact via email */}
          <a
            href="mailto:memhouseremodeling@gmail.com"
            className="border border-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition"
          >
            Email Us
          </a>

          {/* Google Reviews */}
          <a
            href="https://www.google.com/search?q=m%26m+house+remodeling+reviews&rlz=1C1VDKB_enUS1167US1167&oq=m%26m+house+remodeling+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTILCAEQABgNGBMYgAQyDAgCEAAYCBgNGBMYHjIMCAMQABgIGA0YExgeMgwIBBAAGAgYDRgTGB4yBwgFEAAY7wUyBwgGEAAY7wUyBwgHEAAY7wUyBwgIEAAY7wUyBwgJEAAY7wXSAQg5NDkxajBqOagCALACAQ&sourceid=chrome&ie=UTF-8#lrd=0x88e7791eb3858bdd:0x4087608c242a1f26,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition"
          >
            Google Reviews
          </a>
        </div>
      </motion.div>
    </section>
  );
}
