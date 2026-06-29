"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, DollarSign, Leaf, Bolt, Droplets, Monitor, CircleDot } from "lucide-react";

const aboutFeatures = [
  {
    icon: Shield,
    title: "Strong & Durable",
    desc: "Heavy duty build quality for tough working conditions.",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    desc: "Lower operating costs and minimal maintenance.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    desc: "Contributing to a cleaner and greener environment.",
  },
];

const keyFeatures = [
  {
    icon: Bolt,
    title: "Powerful Motor",
    desc: "High torque motor for superior gradeability and performance.",
  },
  {
    icon: Droplets,
    title: "Hydraulic Dump",
    desc: "Effortless unloading with advanced hydraulic system.",
  },
  {
    icon: Monitor,
    title: "Digital Display",
    desc: "Smart dashboard with all essential information.",
  },
  {
    icon: CircleDot,
    title: "Heavy Duty Tyres",
    desc: "Built for stability, durability and all terrains.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#fafafa]" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* LEFT — About Us Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <span className="text-[10px] sm:text-xs font-bold text-[#4CAF50] tracking-[0.15em] uppercase mb-4 block">ABOUT US</span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#111111] leading-[1.15] mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Built for Performance.
              <br />
              Designed for <span className="text-[#4CAF50]">Tomorrow.</span>
            </h2>
            <p className="text-[#555555] text-sm leading-[1.7] mb-8 max-w-sm font-medium">
              We are manufacturer of EV Loaders & Customized Electric Vehicles
              built to meet the growing demands of modern cities and industries.
              Reliable, durable and eco-friendly solutions for a sustainable
              future.
            </p>
            <Link
              href="/about"
              className="bg-[#0b1c14] hover:bg-black text-white px-6 py-3.5 rounded text-sm font-semibold inline-flex items-center gap-2 transition-all"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* MIDDLE — About Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col justify-center gap-10 lg:pl-4 pt-4 lg:pt-14"
          >
            {aboutFeatures.map((feat, i) => (
              <div key={feat.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                  <feat.icon className="w-5 h-5 text-[#4CAF50]" />
                </div>
                <div>
                  <h4
                    className="font-bold text-[#111111] mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {feat.title}
                  </h4>
                  <p className="text-[#555555] text-xs leading-relaxed max-w-[200px] font-medium">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* RIGHT — Key Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5"
            id="features"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full relative overflow-hidden">
              <span className="text-[10px] sm:text-xs font-bold text-[#4CAF50] tracking-[0.15em] uppercase mb-3 block">KEY FEATURES</span>
              <h3
                className="text-2xl sm:text-[1.75rem] font-bold text-[#111111] leading-tight mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Engineered for
                <br />
                <span className="text-[#4CAF50]">Excellence</span>
              </h3>

              {/* Product Image */}
              <div className="absolute top-4 right-0 w-[55%] h-48 sm:h-56 hidden sm:block">
                <Image
                  src="/images/image2.png"
                  alt="Sapphire Green Energy EV Loader vehicle"
                  fill
                  className="object-contain object-right"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>

              {/* 2x2 Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 sm:mt-48 relative z-10">
                {keyFeatures.map((feat, i) => (
                  <div key={feat.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                      <feat.icon className="w-5 h-5 text-[#333333]" />
                    </div>
                    <div>
                      <h5
                        className="font-bold text-xs text-[#111111] mb-1"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {feat.title}
                      </h5>
                      <p className="text-[#555555] text-[10px] leading-relaxed font-medium">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
