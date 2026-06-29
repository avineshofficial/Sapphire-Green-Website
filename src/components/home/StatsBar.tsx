"use client";

import { motion } from "framer-motion";
import { Zap, Package, ClipboardCheck, Leaf } from "lucide-react";

const stats = [
  { icon: Zap, value: "120+", unit: "", label: "Kilometers Range", bgColor: "bg-[#7db343]" },
  { icon: Package, value: "1000", unit: "kg", label: "Payload Capacity", bgColor: "bg-[#1d6cb5]" },
  { icon: ClipboardCheck, value: "8-10", unit: "Hrs", label: "Full Charge Time", bgColor: "bg-[#7db343]" },
  { icon: Leaf, value: "0", unit: "%", label: "Emissions", bgColor: "bg-[#1d6cb5]" },
];

export default function StatsBar() {
  return (
    <section className="relative z-20 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b1c14] rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 justify-start sm:justify-center border-r border-white/10 last:border-0"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 ${stat.bgColor}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-white text-xl sm:text-2xl lg:text-3xl font-bold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-white/80 text-sm font-medium">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5 uppercase tracking-wide">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
