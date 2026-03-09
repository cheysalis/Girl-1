"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/30 via-black to-black" />
        <div className="absolute top-10 -right-40 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s <span className="girl1-gradient-text">Talk</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Questions? Custom requests? Just want to tell us about your junk
            drawer situation? We&apos;re here for it.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* CONTACT INFO */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Reach Out</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "(555) 420-GIRL",
                    sub: "Mon-Fri 9am-6pm",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@girl1service.com",
                    sub: "We reply within 24 hours",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Based in California",
                    sub: "Expanding nationwide",
                  },
                  {
                    icon: Clock,
                    label: "Service Hours",
                    value: "7 Days a Week",
                    sub: "8am to 8pm local time",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 glass-card rounded-xl p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.value}</p>
                      <p className="text-sm text-gray-400">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 glass-card rounded-xl p-6">
                <h3 className="font-bold mb-2">Emergency Messes?</h3>
                <p className="text-sm text-gray-400">
                  Surprise visit from the in-laws? Date coming over in 2 hours?
                  We offer same-day emergency services for those &quot;oh no&quot;
                  moments. Call us. We&apos;ve seen worse.
                </p>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              {submitted ? (
                <div className="glass-card rounded-2xl p-10 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    We&apos;ll get back to you faster than you can find matching
                    socks. (So, pretty fast.)
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={50}
                        pattern="[A-Za-z\s\-']+"
                        title="Letters, spaces, hyphens, and apostrophes only"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none transition-colors"
                      />
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
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      What do you need help with?
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-pink-500/50 focus:outline-none transition-colors">
                      <option value="" className="bg-gray-900">
                        Select a topic
                      </option>
                      <option value="booking" className="bg-gray-900">
                        I want to book a Girl#1
                      </option>
                      <option value="custom" className="bg-gray-900">
                        Custom service request
                      </option>
                      <option value="emergency" className="bg-gray-900">
                        Emergency clean (ASAP!)
                      </option>
                      <option value="join" className="bg-gray-900">
                        I want to join the team
                      </option>
                      <option value="other" className="bg-gray-900">
                        Other / Just saying hi
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      maxLength={1000}
                      placeholder="Tell us about your situation. No judgment. We've heard it all."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      How bad is it? (1-10)
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      defaultValue="5"
                      className="w-full accent-pink-500"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Just dusty</span>
                      <span>Call FEMA</span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
