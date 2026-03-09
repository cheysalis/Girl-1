"use client";

import {
  SprayCan,
  Shirt,
  Palette,
  FolderOpen,
  ShoppingCart,
  Heart,
  ArrowRight,
  Star,
  CheckCircle,
  XCircle,
  Crown,
  Sparkles,
  Phone,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    icon: SprayCan,
    title: "Deep Clean Queen",
    desc: "Your place will sparkle so hard your buddies will think you hired a wizard.",
  },
  {
    icon: Shirt,
    title: "Laundry Whisperer",
    desc: "She actually knows what those symbols on the tag mean.",
  },
  {
    icon: Palette,
    title: "Decorator Extraordinaire",
    desc: "Throw pillows that actually make sense. Revolutionary.",
  },
  {
    icon: FolderOpen,
    title: "Chaos Tamer",
    desc: "That junk drawer? Organized. The garage? You can park in it now.",
  },
  {
    icon: ShoppingCart,
    title: "Grocery Guru",
    desc: "Actual food. In your fridge. Not just beer and ketchup.",
  },
  {
    icon: Heart,
    title: "Emotional Support",
    desc: "She listens and says 'that sucks' at all the right moments.",
  },
];

const comparisonItems = [
  { feature: "Cleans your house", girl1: true, wife: true, you: false },
  { feature: "Does your laundry", girl1: true, wife: true, you: false },
  { feature: "Argues about nothing", girl1: false, wife: true, you: false },
  { feature: "Remembers your mom's birthday", girl1: true, wife: true, you: false },
  { feature: "Shares your Netflix password", girl1: false, wife: true, you: false },
  { feature: "Judges your diet", girl1: false, wife: true, you: false },
  { feature: "Actually leaves when the job is done", girl1: true, wife: false, you: false },
  { feature: "Brings up that one time 3 years ago", girl1: false, wife: true, you: false },
  { feature: "Makes your place look amazing", girl1: true, wife: true, you: false },
  { feature: "Requires couples therapy", girl1: false, wife: true, you: false },
];

const testimonials = [
  {
    name: "Brad T.",
    text: "My mom visited and asked if I got a girlfriend. I said no. She said 'Well somebody is taking care of you.' Thanks Girl#1.",
    rating: 5,
  },
  {
    name: "Derek S.",
    text: "I found my socks. Both of them. Matching. In a drawer. I didn't know drawers could do that.",
    rating: 5,
  },
  {
    name: "Mike R.",
    text: "She organized my garage and I cried. Not because it was beautiful, but because I forgot I owned a bicycle.",
    rating: 5,
  },
  {
    name: "Jason K.",
    text: "My fridge had vegetables in it. VEGETABLES. I'm basically a new person now.",
    rating: 5,
  },
  {
    name: "Tyler W.",
    text: "She listened to me complain about fantasy football for 20 minutes. No eye rolls. No sighing. Is this what heaven feels like?",
    rating: 5,
  },
  {
    name: "Chris B.",
    text: "I used to think 'throw pillows' was an action. Now I know they're decorative. Growth.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Is this a dating service?",
    a: "Absolutely not. This is professional household help with personality. She shows up, makes your life better, and leaves. Like a superhero, but with cleaning supplies.",
  },
  {
    q: "What if my actual girlfriend/wife gets jealous?",
    a: "Show her your place after a Girl#1 visit. She'll be so impressed she'll want to hire one too. Problem solved. You're welcome.",
  },
  {
    q: "Can she teach me how to do this stuff myself?",
    a: "Technically yes. Realistically, you've had 30+ years to learn and you're still eating cereal over the sink. Let the professionals handle it.",
  },
  {
    q: "Do you do background checks?",
    a: "Every Girl#1 is thoroughly vetted, background checked, and certified in the ancient art of making grown men's lives easier. They're professionals, not your ex.",
  },
  {
    q: "What areas do you serve?",
    a: "We're expanding fast because apparently a LOT of guys need help. Check our booking page for current service areas.",
  },
  {
    q: "Can I request the same Girl#1 every time?",
    a: "Yes! Consistency is key. Once she learns where you hide your pizza boxes, the whole process gets faster.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Banner image */}
        <Image
          src="https://images.pexels.com/photos/6195198/pexels-photo-6195198.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Woman cleaning"
          fill
          className="object-cover opacity-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/40 via-black/60 to-black/80" />
        <div className="absolute top-20 -right-40 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 -left-40 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/5 rounded-full blur-3xl animate-pulse-slow" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm mb-6 animate-fade-in-up">
              <Crown className="w-4 h-4 animate-bounce-slow" />
              All the perks. None of the drama.
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Girl
              <span className="text-pink-500">#1</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-300">
                The Wife Experience
              </span>
              <br />
              <span className="girl1-gradient-text text-4xl sm:text-5xl lg:text-6xl">
                Without the WiFi Password.
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-gray-400 max-w-xl mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Professional household services that make your life feel like you
              have it together. Cleaning, cooking, organizing, emotional
              support — all the good stuff, zero arguments about the thermostat.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
              >
                Get Your Girl#1 <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 hover:border-pink-500/40 text-white font-semibold rounded-xl transition-all hover:bg-white/5"
              >
                <Sparkles className="w-4 h-4" /> See Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="border-y border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2,500+", label: "Homes Rescued" },
              { value: "0", label: "Arguments Started" },
              { value: "4.9", label: "Avg Rating" },
              { value: "100%", label: "Sock Match Rate" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-pink-500">
                  {s.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              So simple even you can figure it out. Three steps. No assembly
              required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                emoji: "📱",
                title: "Book Online",
                desc: "Pick your services like you're building a fantasy team. Except this one actually helps you win at life.",
              },
              {
                step: "02",
                emoji: "🦸‍♀️",
                title: "Girl#1 Arrives",
                desc: "A vetted professional shows up with supplies, skills, and zero judgment about your current situation.",
              },
              {
                step: "03",
                emoji: "👑",
                title: "Live Like Royalty",
                desc: "Your place is clean, your fridge is full, and you look like a functioning adult. Incredible.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="glass-card rounded-2xl p-8 hover:border-pink-500/30 transition-all hover:-translate-y-1 text-center group"
              >
                <div className="text-5xl mb-4 group-hover:animate-wiggle">
                  {item.emoji}
                </div>
                <div className="text-sm font-mono text-pink-500/60 mb-2">
                  STEP {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-transparent via-pink-950/10 to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The Menu of Miracles
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every service you didn&apos;t know you desperately needed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="glass-card rounded-2xl p-6 hover:border-pink-500/30 transition-all group hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 group-hover:scale-110 transition-all">
                  <h.icon className="w-7 h-7 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{h.title}</h3>
                <p className="text-sm text-gray-400">{h.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition-colors"
            >
              View All 12 Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The Honest Comparison
            </h2>
            <p className="text-gray-400">
              Let&apos;s lay it all out. No hard feelings.
            </p>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-gray-400 font-medium">
                      Feature
                    </th>
                    <th className="p-4 text-center">
                      <span className="text-pink-400 font-bold">Girl#1</span>
                    </th>
                    <th className="p-4 text-center">
                      <span className="text-gray-300 font-bold">
                        Actual Wife
                      </span>
                    </th>
                    <th className="p-4 text-center">
                      <span className="text-gray-500 font-bold">
                        You, Alone
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonItems.map((item, i) => (
                    <tr
                      key={item.feature}
                      className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                    >
                      <td className="p-4 text-sm text-gray-300">
                        {item.feature}
                      </td>
                      <td className="p-4 text-center">
                        {item.girl1 ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {item.wife ? (
                          <CheckCircle className="w-5 h-5 text-yellow-400 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {item.you ? (
                          <CheckCircle className="w-5 h-5 text-blue-400 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-xs text-gray-600 mt-4">
            * Results may vary. Girl#1 is not responsible for existential
            realizations.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-transparent via-pink-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Real Men. Real Clean Houses.
            </h2>
            <p className="text-gray-400">
              Actual testimonials from guys who can now find their keys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="glass-card rounded-2xl p-6 hover:border-pink-500/30 transition-all hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-pink-500 fill-pink-500"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  &quot;{t.text}&quot;
                </p>
                <div className="text-sm font-semibold text-white">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Questions You&apos;re Too Proud to Ask
            </h2>
            <p className="text-gray-400">
              Don&apos;t worry, we get these a lot.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-200">{faq.q}</span>
                  <span
                    className={`text-pink-400 text-xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-gray-400 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/8 rounded-full blur-3xl animate-float-delayed" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Live Your Best Life?
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Your future self (the one with matching socks and a stocked
                fridge) is waiting. Don&apos;t let him down.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:5554201111"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 hover:border-pink-500/40 text-white font-semibold rounded-xl transition-all hover:bg-white/5"
                >
                  <Phone className="w-4 h-4" /> (555) 420-GIRL
                </a>
              </div>
              <p className="text-xs text-gray-600 mt-6">
                * Girl#1 services do not include relationship advice, couples
                therapy, or telling you what you did wrong. That&apos;s a
                separate business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
