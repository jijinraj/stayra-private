// src/content/pricing.content.js
export const plans = [
  {
    title: "Free",
    price: "£0",
    features: [
      "Up to 3 active properties",
      "Basic tenant portal",
      "Email support",
    ],
    cta: { href: "#get-started", label: "Get started" },
  },
  {
    title: "Starter",
    price: "£19/mo",
    mostPopular: true,
    features: [
      "Up to 25 active properties",
      "Rent reminders & late fees",
      "Landlord & tenant messaging",
      "Priority email support",
    ],
    cta: { href: "#get-started", label: "Start 14-day trial" },
  },
  {
    title: "Pro",
    price: "£49/mo",
    features: [
      "Unlimited properties",
      "Multi-user (team & roles)",
      "Payouts & reconciliations",
      "API access (beta)",
      "Priority support",
    ],
    cta: { href: "#get-started", label: "Contact sales" },
  },
];
