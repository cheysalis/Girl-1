"use client";

import { CheckCircle, Crown, ArrowRight } from "lucide-react";
import { useState } from "react";

const plans = [
  { id: "starter", name: "The Starter Boyfriend", price: "$500/mo" },
  { id: "whole", name: "The Whole Package", price: "$1,000/mo" },
  { id: "trophy", name: "The Trophy Life", price: "$2,000/mo" },
];

const addOns = [
  { id: "pet", label: "Pet Wrangling", price: "+$75/visit" },
  { id: "meal", label: "Extra Meal Prep (10 meals)", price: "+$200/week" },
  { id: "party", label: "Party Setup", price: "+$175/event" },
  { id: "emergency", label: "Emergency Clean Priority", price: "+$65/mo" },
  { id: "gift", label: "Gift Shopping Service", price: "+$50/gift" },
  { id: "vibe", label: "Date Night Vibe Setup", price: "+$125/session" },
];

export default function BookPage() {
  const [selectedPlan, setSelectedPlan] = useState("whole");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const [booked, setBooked] = useState(false);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  if (booked) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="glass-card rounded-3xl p-10 sm:p-16 text-center max-w-lg">
          <div className="text-6xl mb-6">👑</div>
          <h1 className="text-3xl font-bold mb-4">You Did It, King!</h1>
          <p className="text-gray-400 mb-2">
            Your Girl#1 booking request has been submitted. We&apos;ll reach out
            within 24 hours to confirm your plan and schedule.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            In the meantime, maybe throw out that pizza box on the counter. Just
            as a warm-up.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/30 via-black to-black" />
        <div className="absolute top-10 -right-40 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Book Your <span className="girl1-gradient-text">Girl#1</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Three steps to becoming a functioning adult. You got this. Probably.
          </p>
        </div>
      </section>

      {/* STEP INDICATORS */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            {[
              { num: 1, label: "Pick Plan" },
              { num: 2, label: "Add-Ons" },
              { num: 3, label: "Your Info" },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step >= s.num
                      ? "bg-pink-600 text-white"
                      : "bg-white/5 text-gray-500"
                  }`}
                >
                  {step > s.num ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    s.num
                  )}
                </div>
                <span
                  className={`text-sm hidden sm:block ${step >= s.num ? "text-white" : "text-gray-500"}`}
                >
                  {s.label}
                </span>
                {s.num < 3 && (
                  <div
                    className={`w-12 h-0.5 ${step > s.num ? "bg-pink-600" : "bg-white/10"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP CONTENT */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* STEP 1: PICK PLAN */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Choose Your Level of Adulting
              </h2>
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full glass-card rounded-xl p-6 text-left transition-all hover:-translate-y-0.5 ${
                    selectedPlan === plan.id
                      ? "border-pink-500/50 shadow-lg shadow-pink-500/10"
                      : "hover:border-pink-500/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{plan.name}</h3>
                      <p className="text-sm text-gray-400">{plan.price}</p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        selectedPlan === plan.id
                          ? "border-pink-500 bg-pink-500"
                          : "border-gray-600"
                      }`}
                    >
                      {selectedPlan === plan.id && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
              <button
                onClick={() => setStep(2)}
                className="w-full mt-6 inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl transition-all hover:scale-[1.02]"
              >
                Next: Add-Ons <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: ADD-ONS */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-2 text-center">
                Power-Ups (Optional)
              </h2>
              <p className="text-gray-400 text-center text-sm mb-6">
                Like DLC, but for your actual life.
              </p>
              {addOns.map((addon) => (
                <button
                  key={addon.id}
                  onClick={() => toggleAddOn(addon.id)}
                  className={`w-full glass-card rounded-xl p-5 text-left transition-all hover:-translate-y-0.5 ${
                    selectedAddOns.includes(addon.id)
                      ? "border-pink-500/50"
                      : "hover:border-pink-500/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{addon.label}</h3>
                      <p className="text-sm text-gray-400">{addon.price}</p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                        selectedAddOns.includes(addon.id)
                          ? "border-pink-500 bg-pink-500"
                          : "border-gray-600"
                      }`}
                    >
                      {selectedAddOns.includes(addon.id) && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 px-6 py-3.5 border border-white/10 hover:border-pink-500/40 text-white font-semibold rounded-xl transition-all hover:bg-white/5"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl transition-all hover:scale-[1.02]"
                >
                  Next: Your Info <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: INFO */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-2 text-center">
                Almost There, Champ
              </h2>
              <p className="text-gray-400 text-center text-sm mb-6">
                Just need a few details. We promise not to judge your zip code.
              </p>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setBooked(true);
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={50}
                      pattern="[A-Za-z\s\-']+"
                      title="Letters, spaces, hyphens, and apostrophes only"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={50}
                      pattern="[A-Za-z\s\-']+"
                      title="Letters, spaces, hyphens, and apostrophes only"
                      placeholder="Last name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={100}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={20}
                    pattern="[\d\s\-\(\)\+]+"
                    title="Valid phone number characters only"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={10}
                    pattern="[0-9\-]+"
                    title="Numbers and dashes only"
                    placeholder="Your zip code"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Anything we should know?
                  </label>
                  <textarea
                    rows={3}
                    maxLength={500}
                    placeholder="Pets, allergies, how many pizza boxes are we looking at..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none resize-none"
                  />
                </div>

                {/* Summary */}
                <div className="glass-card rounded-xl p-5 mt-4">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <Crown className="w-5 h-5 text-pink-400" /> Your Order
                  </h3>
                  <p className="text-sm text-gray-300">
                    Plan:{" "}
                    <span className="text-pink-400 font-semibold">
                      {plans.find((p) => p.id === selectedPlan)?.name}
                    </span>
                  </p>
                  {selectedAddOns.length > 0 && (
                    <p className="text-sm text-gray-400 mt-1">
                      Add-ons:{" "}
                      {selectedAddOns
                        .map(
                          (id) => addOns.find((a) => a.id === id)?.label
                        )
                        .join(", ")}
                    </p>
                  )}
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 px-6 py-3.5 border border-white/10 hover:border-pink-500/40 text-white font-semibold rounded-xl transition-all hover:bg-white/5"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20"
                  >
                    Book My Girl#1 <Crown className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
