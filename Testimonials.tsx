"use client";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Stephanie Howell", service: "Bathroom Remodeling", date: "2 Years Ago", rating: 5, quote: "They remodeled multiple bathrooms in my home. Flavio is easy to work with, professional and does a great quality job. They addressed any concerns I had throughout the projects and worked with me to get the end result I wanted. Highly recommend!" },
  { name: "Davey Tewson", service: "Bathroom Renovation", date: "7 Months Ago", rating: 5, quote: "Five stars! I contracted approximately 2,000 sq ft of engineered hardwood flooring, all new baseboards and some bathroom tile... and they demoed A LOT of old tile.... and this team was dynamite. Quick to schedule. Showed up with large crews and worked full days. Compressed the timeline by bringing in one crew after another without wasting days. When I pointed out a few defects they were quickly fixed without hesitation. I didn't have to hunt down plumbers, painters, etc... Marcelo and Flavio did it themselves or recommended quality contractors. This is a team that went the distance to ensure I got what I want, made is simple for me as the customer, and worked quickly. I did get few quotes from other contractors at a similar price point... so competitively priced. But the service and speed you can count on is invaluable. Will use again in the future for sure. Thanks guys!" },
  { name: "Nick", service: "Bathroom Remodeling", date: "2 Years Ago", rating: 5, quote: "I can't give more praise. Flavio and his partner did a fantastic job. They started work promptly every morning. Very clear as to what the procedure for the installation. Gave me options on how to have the tiles installed. Cleaned up daily and maintained the area clean. Always kept me informed of the progress and next steps. They both worked very hard to get the job done. The finished work was brilliant ! Tiles were level and flat against the surface (no bumps) tightly installed and properly finished. I had all the materials except some trim work and the window ledge which he picked up and provided a detail receipt. Amazing no hassle work. Impeccable !" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold tracking-tight">What Our Clients Say</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">Trusted by hundreds of homeowners across Florida. Excellence in every project.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
              <div className="mb-4">
                <p className="text-gray-800 text-lg leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-neutral-500 text-sm">{t.service} – {t.date}</p>
                </div>
                <div className="text-yellow-500 flex space-x-1">{Array.from({ length: t.rating }).map((_, i) => <span key={i}>★</span>)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
