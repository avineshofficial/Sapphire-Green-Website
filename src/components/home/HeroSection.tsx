"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Leaf, Settings, Gauge, ArrowRight, Download } from "lucide-react";

const highlights = [
  { icon: Zap, label: "100% Electric" },
  { icon: Leaf, label: "Zero Emission" },
  { icon: Settings, label: "Low Maintenance" },
  { icon: Gauge, label: "High Performance" },
];

export default function HeroSection() {
  return (
    <>
      {/* ─── DESKTOP HERO (lg and above) ─── */}
      <section className="hidden lg:block relative overflow-hidden" style={{ minHeight: "100vh" }}>
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/heroimage.png"
            alt="Sapphire Green Energy EV Loader with city skyline"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* White gradient fade from left so text is readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 22%, rgba(255,255,255,0.7) 36%, rgba(255,255,255,0.1) 44%, rgba(255,255,255,0) 48%)",
            }}
          />
          {/* Bottom fade to white for smooth transition into stats bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40"
            style={{
              background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>

        {/* Content — left aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex items-center" style={{ minHeight: "100vh" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[560px] pt-24 pb-20"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-7">
              <Leaf className="w-4 h-4 text-[#4CAF50]" />
              <span className="text-[10px] font-bold text-[#4CAF50] tracking-[0.2em] uppercase">
                NEXT GENERATION ELECTRIC VEHICLES
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[3.2rem] xl:text-[4rem] font-bold leading-[1.05] mb-6 text-[#0d0d0d]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Powering
              <br />
              Cleaner Cities
              <br />
              <span className="text-[#4CAF50]">Effortlessly.</span>
            </h1>

            {/* Subtext */}
            <p className="text-[#333333] text-[15px] leading-[1.65] max-w-[420px] mb-9">
              EV Loaders &amp; Customized Electric Vehicles built for heavy duty
              performance with zero emissions and maximum efficiency.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link
                href="/#features"
                className="bg-[#0f1714] text-white hover:bg-black px-7 py-3.5 rounded text-sm font-semibold flex items-center gap-2 transition-all"
              >
                Explore Features
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/90 border border-gray-300 text-[#111111] hover:border-[#4CAF50] px-7 py-3.5 rounded text-sm font-semibold flex items-center gap-2 transition-all shadow-sm"
              >
                Download Brochure
                <Download className="w-4 h-4" />
              </Link>
            </div>

            {/* Icon Row */}
            <div className="flex items-start gap-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="w-10 h-10 rounded-full border border-gray-200 bg-white/70 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#333333] stroke-[1.5]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#111111] leading-tight max-w-[58px]">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MOBILE / TABLET HERO (below lg) ─── */}
      <section className="lg:hidden relative bg-white pt-24 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5">
              <Leaf className="w-4 h-4 text-[#4CAF50]" />
              <span className="text-[10px] font-bold text-[#4CAF50] tracking-[0.2em] uppercase">
                NEXT GENERATION ELECTRIC VEHICLES
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[2.5rem] sm:text-5xl font-bold leading-[1.08] mb-5 text-[#0d0d0d]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Powering
              <br />
              Cleaner Cities
              <br />
              <span className="text-[#4CAF50]">Effortlessly.</span>
            </h1>

            {/* Subtext */}
            <p className="text-[#333333] text-sm leading-[1.65] max-w-sm mb-8">
              EV Loaders &amp; Customized Electric Vehicles built for heavy duty
              performance with zero emissions and maximum efficiency.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                href="/#features"
                className="bg-[#0f1714] text-white hover:bg-black px-6 py-3 rounded text-sm font-semibold flex items-center gap-2 transition-all"
              >
                Explore Features
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-gray-300 text-[#111111] hover:border-[#4CAF50] px-6 py-3 rounded text-sm font-semibold flex items-center gap-2 transition-all shadow-sm"
              >
                Download Brochure
                <Download className="w-4 h-4" />
              </Link>
            </div>

            {/* Icon Row */}
            <div className="flex flex-wrap items-start gap-x-7 gap-y-5">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="w-9 h-9 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-[#333333] stroke-[1.5]" />
                  </div>
                  <span className="text-[9px] font-bold text-[#111111] leading-tight max-w-[55px]">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Vehicle Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full"
          >
            <div className="relative w-full h-[260px] sm:h-[340px]">
              <Image
                src="/images/image1.png"
                alt="Sapphire Green Energy EV Loader Electric Vehicle"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 0vw"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
