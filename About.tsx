"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <img src="/Images/image11.jpeg" alt="Construction team" className="w-full h-[600px] object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-5xl font-bold tracking-tight mb-10">
            Built on Precision.<span className="block text-neutral-500">Defined by Excellence.</span>
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            At MemHouse, we deliver premium residential remodeling and custom construction with uncompromising standards. Every project reflects our commitment to architectural integrity, precision craftsmanship, and refined detail.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            From luxury kitchens to full-scale renovations, we create environments that elevate both lifestyle and long-term property value.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-neutral-600">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">200+</h3>
              <p className="text-neutral-600">Projects Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
