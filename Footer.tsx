"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4">MemHouse Remodeling</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">Transforming homes in Florida with high-end craftsmanship and attention to detail since 2020.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-neutral-400 text-sm">Windermere, FL 34786</p>
          <p className="text-neutral-400 text-sm mt-2">(321) 507-5924</p>
          <p className="text-neutral-400 text-sm">memhouseremodeling@gmail.com</p>
        </div>
      </div>
      <div className="mt-12 text-center text-neutral-500 text-sm">&copy; 2026 MemHouse Remodeling. All rights reserved.</div>
    </footer>
  );
}
