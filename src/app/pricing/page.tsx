import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "The Starter Boyfriend",
    tagline: "Baby steps, champ",
    price: "500",
    features: [
      "Bi-weekly deep clean",
      "Basic laundry service",
      "Grocery list (you still shop though)",
      "1 emotional support session/month",
      "Text reminders for important dates",
    ],
    cta: "Start Adulting",
    popular: false,
  },
  {
    name: "The Whole Package",
    tagline: "Most popular. Obviously.",
    price: "1,000",
    features: [
      "Weekly deep clean",
      "Full laundry service",
      "Grocery shopping & stocking",
      "Home organization blitz",
      "Unlimited emotional support",
      "Gift buying assistance",
      "Meal prep (5 meals/week)",
      "Basic decor consultation",
    ],
    cta: "Level Up",
    popular: true,
  },
  {
    name: "The Trophy Life",
    tagline: "For the man who has everything except his life together",
    price: "2,000",
    features: [
      "Everything in Whole Package",
      "Daily cleaning visits",
      "Full home decoration",
      "Party planning",
      "Vibe curation sessions",
      "Pet care included",
      "Life admin management",
      "24/7 text support for 'where is my...'",
    ],
    cta: "Live Like a King",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/30 via-black to-black" />
        <div className="absolute top-10 -right-40 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Pick Your Plan, <span className="girl1-gradient-text">King</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            All plans include zero nagging, zero passive-aggressive sighs, and a
            100% satisfaction guarantee. Cancel anytime — no guilt trip included.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card rounded-2xl p-8 transition-all hover:-translate-y-1 relative ${
                  plan.popular
                    ? "border-pink-500/50 shadow-lg shadow-pink-500/10"
                    : "hover:border-pink-500/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-pink-600 text-white text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4 italic">
                  {plan.tagline}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-pink-400">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all hover:scale-105 ${
                    plan.popular
                      ? "bg-pink-600 hover:bg-pink-500 text-white shadow-lg shadow-pink-500/20"
                      : "border border-white/10 hover:border-pink-500/40 text-white hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* FINE PRINT */}
          <div className="mt-16 glass-card rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">The Fine Print (But Fun)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div>
                <p className="font-semibold text-white mb-1">No Contracts</p>
                <p>Cancel anytime. We won&apos;t cry. (Okay, maybe a little.)</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Satisfaction Guaranteed</p>
                <p>If your place isn&apos;t cleaner than your conscience, we&apos;ll fix it.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Custom Plans Available</p>
                <p>Need something weird? We&apos;ve heard it all. Just ask.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
