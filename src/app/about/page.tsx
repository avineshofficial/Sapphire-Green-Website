"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  DollarSign,
  Leaf,
  Award,
  Factory,
  Users,
  Target,
  Zap,
  Heart,
  Globe,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    desc: "Heavy duty build quality designed to withstand the toughest working conditions day after day.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "100% electric vehicles with zero emissions, contributing to a cleaner and greener planet.",
  },
  {
    icon: DollarSign,
    title: "Affordability",
    desc: "Lower operating costs, minimal maintenance, and maximum ROI for your business.",
  },
  {
    icon: Award,
    title: "Innovation",
    desc: "Cutting-edge technology including smart dashboards, hydraulic systems, and powerful motors.",
  },
];

const capabilities = [
  { icon: Factory, label: "Modern Manufacturing", value: "25,000 sq ft" },
  { icon: Users, label: "Expert Team", value: "100+" },
  { icon: Target, label: "Vehicles Delivered", value: "5,000+" },
  { icon: Globe, label: "Cities Served", value: "50+" },
];

const whyChoose = [
  "Purpose-built EV loaders for Indian conditions",
  "Customizable configurations for every industry",
  "Comprehensive after-sales service & warranty",
  "Pan-India dealer network & spare parts availability",
  "Government subsidy assistance (FAME II)",
  "Quick delivery & flexible payment options",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-dark to-[#0f2a1f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-brand-green blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-brand-green blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="section-label mb-4 block">ABOUT US</span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Building a{" "}
              <span className="text-brand-green italic">Sustainable</span>
              <br />
              Future on Wheels
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Sapphire Green Energy is a leading manufacturer of EV Loaders &
              Customized Electric Vehicles, committed to revolutionizing
              last-mile logistics with zero-emission solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label mb-3 block">OUR STORY</span>
              <h2
                className="section-heading text-3xl sm:text-4xl mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                From Vision to{" "}
                <span className="text-brand-green italic">Revolution</span>
              </h2>
              <div className="space-y-4 text-text-muted text-sm leading-relaxed">
                <p>
                  Founded with a singular mission to electrify India&apos;s commercial
                  vehicle segment, Sapphire Green Energy began as a small
                  workshop with big ambitions. Today, we are a recognized name in
                  the EV industry.
                </p>
                <p>
                  Our journey started when we witnessed the environmental toll of
                  diesel-powered loaders and utility vehicles in cities across
                  India. We knew there had to be a better way — cleaner, more
                  efficient, and more affordable.
                </p>
                <p>
                  Today, our electric loaders serve waste management companies,
                  construction firms, municipal corporations, and industrial
                  facilities across 50+ cities, helping them reduce their carbon
                  footprint while improving operational efficiency.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/heroimage.png"
                alt="Sapphire Green Energy EV Loader"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full border-2 border-brand-green/40 flex items-center justify-center mx-auto mb-3">
                  <cap.icon className="w-6 h-6 text-brand-green" />
                </div>
                <p
                  className="text-white text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {cap.value}
                </p>
                <p className="text-gray-400 text-xs">{cap.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label mb-3 block">WHY CHOOSE US</span>
              <h2
                className="section-heading text-3xl sm:text-4xl mb-8"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                The Sapphire{" "}
                <span className="text-brand-green italic">Advantage</span>
              </h2>
              <div className="space-y-4">
                {whyChoose.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span className="text-sm text-text-muted">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-white p-6 rounded-xl card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <h4
                    className="font-semibold text-sm text-brand-dark mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {v.title}
                  </h4>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label mb-3 block">OUR VALUES</span>
          <h2
            className="section-heading text-3xl sm:text-4xl mb-12"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            What Drives <span className="text-brand-green italic">Us</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "Performance", desc: "Every vehicle is engineered for maximum power, range, and durability." },
              { icon: Heart, title: "Customer First", desc: "We listen, adapt, and deliver solutions that exceed expectations." },
              { icon: Globe, title: "Impact", desc: "Every EV we sell removes diesel emissions from our cities." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-8 rounded-xl bg-card-bg card-hover"
              >
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-brand-green" />
                </div>
                <h4
                  className="font-semibold text-brand-dark mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {v.title}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Go <span className="text-brand-green">Electric?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us today to learn how Sapphire Green Energy can transform
            your fleet operations.
          </p>
          <Link href="/contact" className="btn-primary bg-brand-green border-brand-green hover:bg-[#43a047]">
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
