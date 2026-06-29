"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const applications = [
  {
    image: "/images/waste-management.png",
    title: "Waste Management",
  },
  {
    image: "/images/construction.png",
    title: "Construction",
  },
  {
    image: "/images/municipal-services.png",
    title: "Municipal Services",
  },
  {
    image: "/images/industrial.png",
    title: "Industries",
  },
];

export default function ApplicationsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-[10px] sm:text-xs font-bold text-[#4CAF50] tracking-[0.15em] uppercase mb-4 block">BUILT FOR EVERY INDUSTRY</span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#111111] leading-[1.15]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              One Vehicle.
              <br />
              Many <span className="text-[#4CAF50]">Applications.</span>
            </h2>
          </motion.div>

          {/* Right Cards */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {applications.map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group cursor-pointer"
              >
                <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden img-zoom shadow-md">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p
                  className="mt-3 text-center text-sm font-semibold text-brand-dark group-hover:text-brand-green transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {app.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
