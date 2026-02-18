"use client";
import { motion } from "framer-motion";

const services = [
  { title: "Kitchen Remodeling", description: "Transform your kitchen into a stunning, functional space with custom cabinetry, countertops, and modern appliances." },
  { title: "Bathroom Renovation", description: "Create your dream bathroom with luxury fixtures, elegant tile work, and spa-like features." },
  { title: "Full Home Remodel", description: "Complete home transformations that reimagine your living space from top to bottom." },
  { title: "Custom Carpentry", description: "Expert craftsmanship for built-ins, crown molding, and custom woodwork throughout your home." },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold tracking-tight">Our Services</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">Premium construction and remodeling solutions for discerning clients.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
              <p className="text-neutral-600">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
