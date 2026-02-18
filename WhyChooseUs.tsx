"use client";
import { motion } from "framer-motion";

const points = [
  { title: "Architectural-Level Craftsmanship", description: "Every detail is executed with precision and high-end finishing standards." },
  { title: "Transparent Project Management", description: "Clear timelines, structured communication, and zero hidden surprises." },
  { title: "Premium Materials Only", description: "We work exclusively with durable, high-performance materials." },
  { title: "Long-Term Value Focus", description: "We design and build with resale value and longevity in mind." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold tracking-tight">Why Discerning Clients Choose Us</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          {points.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="border-b border-neutral-700 pb-10">
              <h3 className="text-2xl font-semibold mb-4">{p.title}</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
