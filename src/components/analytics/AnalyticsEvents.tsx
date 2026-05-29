"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, string>) => void;
  }
}

function track(eventName: string, params: Record<string, string> = {}) {
  window.gtag?.("event", eventName, params);
}

function getLinkEvent(href: string) {
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (href.includes("wa.me") || href.includes("whatsapp")) return "whatsapp_click";
  if (href.includes("google.com/maps")) return "directions_click";
  if (href.includes("/products") || href.startsWith("#")) return "product_navigation_click";
  return "";
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      const href = link?.getAttribute("href");
      if (!link || !href) return;

      const eventName = getLinkEvent(href);
      if (!eventName) return;

      track(eventName, {
        link_url: href,
        link_text: link.textContent?.trim().slice(0, 80) || "",
      });
    }

    function onSubmit(event: SubmitEvent) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      if (form.id !== "contact-form") return;

      track("contact_form_submit", {
        form_id: form.id,
      });
    }

    window.addEventListener("click", onClick);
    window.addEventListener("submit", onSubmit);

    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("submit", onSubmit);
    };
  }, []);

  return null;
}
