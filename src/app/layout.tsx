import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SmoothScrolling from "@/components/SmoothScrolling";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Sapphire Green Energy | EV Loaders & Electric Vehicles Manufacturer",
  description:
    "Manufacturer of EV Loaders & Customized Electric Vehicles for waste management, construction, municipal services and industries. Zero emissions, 120+ km range.",
  keywords: [
    "EV Loader",
    "Electric Vehicle Manufacturer",
    "Garbage Loader",
    "Flatbed EV",
    "Eco Friendly Vehicle",
    "Sapphire Green Energy",
  ],
  openGraph: {
    title: "Sapphire Green Energy",
    description: "Powering Cleaner Cities Effortlessly.",
    images: ["/images/heroimage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SmoothScrolling>
          <div className="overflow-x-clip flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
        </SmoothScrolling>
        <Analytics />
      </body>
    </html>
  );
}
