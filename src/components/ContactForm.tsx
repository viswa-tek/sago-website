"use client";

import { useState, type FormEvent } from "react";
import { businessInfo } from "@/content/business";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${businessInfo.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `SagO website enquiry: ${subject}`,
          _template: "table",
          _captcha: "false",
          name,
          phone,
          email: email || "Not provided",
          subject,
          message,
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 text-sm">Thank you for contacting us. We&apos;ll get back to you soon.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-surface-800 mb-1">Full Name *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors text-sm outline-none" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-surface-800 mb-1">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors text-sm outline-none" placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-surface-800 mb-1">Email (Optional)</label>
        <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors text-sm outline-none" placeholder="your@email.com" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-surface-800 mb-1">Subject *</label>
        <select id="subject" name="subject" required className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors text-sm outline-none bg-white">
          <option value="">Select a subject</option>
          <option value="Product Inquiry">Product Inquiry</option>
          <option value="Price Inquiry">Price Inquiry</option>
          <option value="Availability Check">Availability Check</option>
          <option value="Bulk Order">Bulk Order</option>
          <option value="Feedback">Feedback</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-surface-800 mb-1">Message *</label>
        <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors text-sm outline-none resize-none" placeholder="Tell us how we can help you..." />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-700 text-sm">
          We couldn&apos;t send your message right now. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-3.5 bg-primary-500 text-white rounded-xl font-semibold text-sm hover:bg-primary-600 transition-colors btn-shine shadow-lg shadow-primary-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
        id="contact-submit-btn"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
