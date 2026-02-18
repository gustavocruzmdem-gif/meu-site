"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className={`text-xl font-bold tracking-wide ${scrolled ? "text-black" : "text-white"}`}>
          M&M HOUSE REMODELING
        </h1>
        <div className={`space-x-10 font-medium ${scrolled ? "text-black" : "text-white"}`}>
          <a href="#portfolio" className="hover:opacity-70 transition">
            Projects
          </a>
          <a href="#about" className="hover:opacity-70 transition">
            About
          </a>
          <a href="#contact" className="hover:opacity-70 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
