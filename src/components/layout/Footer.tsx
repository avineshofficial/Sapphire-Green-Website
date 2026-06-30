import Link from "next/link";
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Features", href: "/#features" },
  { name: "Benefits", href: "/#benefits" },
  { name: "Contact", href: "/contact" },
];

const products = [
  { name: "EV Loaders", href: "/products/ev-garbage-loader" },
  { name: "Garbage Loader", href: "/products/ev-garbage-loader" },
  { name: "Flatbed Loader", href: "/products/flatbed-ev-loader" },
  { name: "Customized Vehicles", href: "/products/customized-electric-vehicles" },
];

const support = [
  { name: "Service & Warranty", href: "/contact" },
  { name: "FAQ", href: "/contact" },
  { name: "Downloads", href: "/contact" },
  { name: "Privacy Policy", href: "/contact" },
  { name: "Terms & Conditions", href: "/contact" },
];

const socialLinks = [
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    href: "#",
    label: "Facebook",
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    href: "#",
    label: "Instagram",
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
    href: "#",
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-green rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span
                  className="font-bold text-sm text-white leading-tight block"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  SAPPHIRE GREEN ENERGY
                </span>
                <span className="text-gray-400 text-[9px] leading-tight block">
                  EV Loaders & Customized Electric<br />
                  Vehicles Manufacturer.
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building smart, sustainable and efficient electric mobility solutions
              for a better tomorrow.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold text-sm mb-5 text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand-green transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4
              className="font-semibold text-sm mb-5 text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand-green transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              className="font-semibold text-sm mb-5 text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Support
            </h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand-green transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4
              className="font-semibold text-sm mb-5 text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 text-sm hover:text-brand-green transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@sapphiregreenenergy.com"
                  className="text-gray-400 text-sm hover:text-brand-green transition-colors"
                >
                  info@sapphiregreenenergy.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Green Avenue,
                  <br />
                  Eco City, India - 560001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Sapphire Green Energy. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Powering a cleaner tomorrow, one vehicle at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}


