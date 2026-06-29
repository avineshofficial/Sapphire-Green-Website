"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  city: z.string().min(2, "City/State is required"),
  product: z.string().min(1, "Select a product"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const products = [
  "EV Garbage Loader",
  "Flatbed EV Loader",
  "Customized Electric Vehicle",
  "Other",
];

export default function InquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const msg = `New Inquiry from Website:\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nCity: ${data.city}\nProduct: ${data.product}\nMessage: ${data.message || "N/A"}`;
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register("name")}
            placeholder="Your Name *"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("phone")}
            placeholder="Phone Number *"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address *"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("city")}
            placeholder="City / State *"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
          )}
        </div>
      </div>

      <div>
        <select
          {...register("product")}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
          defaultValue=""
        >
          <option value="" disabled>
            Product Interest *
          </option>
          {products.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {errors.product && (
          <p className="text-red-500 text-xs mt-1">{errors.product.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Your Message (optional)"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full justify-center"
      >
        Send Inquiry via WhatsApp
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
