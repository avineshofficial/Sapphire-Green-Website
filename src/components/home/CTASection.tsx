"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function CTASection() {
  return (
    <>
      {/* ─── DESKTOP CTA (lg and above) ─── */}
      <section className="hidden lg:block relative overflow-hidden" style={{ minHeight: "480px" }}>
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg.png"
            alt="Electric vehicle scenery background"
            fill
            className="object-cover object-center"
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
          {/* Top fade from white */}
          <div
            className="absolute top-0 left-0 right-0 h-28"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)",
            }}
          />
          {/* Bottom fade to white */}
          <div
            className="absolute bottom-0 left-0 right-0 h-28"
            style={{
              background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0) 40%)",
            }}
          />
        </div>

        {/* Content — left aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex items-center" style={{ minHeight: "480px" }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[520px] py-20"
          >
            <div className="flex items-center gap-2 mb-5">
              <Play className="w-4 h-4 text-[#4CAF50] fill-[#4CAF50]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d0d] leading-tight mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Drive the Change.
              <br />
              <span className="text-[#4CAF50]">Go Electric.</span>
            </h2>
            <p className="text-[#333333] text-[15px] leading-[1.65] max-w-[400px] mb-9 font-medium">
              Join the movement towards a sustainable and cleaner future with
              Sapphire Green Energy.
            </p>
            <Link
              href="/contact"
              className="bg-[#0b1c14] hover:bg-black text-white px-7 py-3.5 rounded text-sm font-semibold inline-flex items-center gap-2 transition-all"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── MOBILE / TABLET CTA (below lg) ─── */}
      <section className="lg:hidden bg-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-5">
              <Play className="w-4 h-4 text-[#4CAF50] fill-[#4CAF50]" />
            </div>
            <h2
              className="text-[2.25rem] sm:text-4xl font-bold text-[#0d0d0d] leading-tight mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Drive the Change.
              <br />
              <span className="text-[#4CAF50]">Go Electric.</span>
            </h2>
            <p className="text-[#333333] text-sm leading-[1.65] max-w-sm mb-8 font-medium">
              Join the movement towards a sustainable and cleaner future with
              Sapphire Green Energy.
            </p>
            <Link
              href="/contact"
              className="bg-[#0b1c14] hover:bg-black text-white px-6 py-3.5 rounded text-sm font-semibold inline-flex items-center gap-2 transition-all"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Mobile Vehicle Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full"
          >
            <div className="relative w-full h-[240px] sm:h-[320px]">
              <Image
                src="/images/image3.png"
                alt="Sapphire Green Energy Electric Vehicle"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 0vw"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
