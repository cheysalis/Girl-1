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
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Data ─── */

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

/* ─── Scroll-reveal hook ─── */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ─── Animated counter ─── */

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericMatch = value.match(/^([\d,]+)/);
          if (numericMatch) {
            const target = parseInt(numericMatch[1].replace(/,/g, ""), 10);
            const suffix = value.replace(numericMatch[1], "");
            const duration = 1500;
            const steps = 40;
            const increment = target / steps;
            let current = 0;
            let step = 0;
            const timer = setInterval(() => {
              step++;
              current = Math.min(Math.round(increment * step), target);
              setDisplay(current.toLocaleString() + suffix);
              if (step >= steps) clearInterval(timer);
            }, duration / steps);
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-pink-500 stat-number">{display}</div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}

/* ─── Floating particles ─── */

function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 10}s`,
            animation: `particle-drift ${8 + Math.random() * 12}s linear ${Math.random() * 10}s infinite`,
            opacity: 0.15 + Math.random() * 0.25,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Reveal wrapper for sections ─── */

function RevealSection({
  children,
  className = "",
  variant = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
}) {
  const revealClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
        ? "reveal-right"
        : variant === "scale"
          ? "reveal-scale"
          : "reveal";

  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${revealClass} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/* ─── Main Page ─── */

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      <Particles />

      {/* Cursor follow glow */}
      <div
        className="fixed pointer-events-none z-10 w-[300px] h-[300px] rounded-full blur-3xl opacity-[0.04] bg-pink-500 transition-transform duration-700 ease-out"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
        }}
      />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Banner image with Ken Burns */}
        <Image
          src="/hero.jpg"
          alt="Woman cleaning"
          fill
          className="object-cover opacity-75 ken-burns"
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
              <span className="text-4xl sm:text-5xl lg:text-6xl text-gray-300">
                The Wife Experience
              </span>
              <br />
              <span className="girl1-gradient-text text-4xl sm:text-5xl lg:text-6xl">
                Without the Baggage.
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

        {/* Scanning line at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-px scan-line" />
      </section>

      {/* STATS BANNER */}
      <section className="border-y border-white/5 bg-black/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-purple-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2,500+", label: "Homes Rescued" },
              { value: "0", label: "Arguments Started" },
              { value: "4.9", label: "Avg Rating" },
              { value: "100%", label: "Sock Match Rate" },
            ].map((s) => (
              <AnimatedStat key={s.label} value={s.value} label={s.label} />
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
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 glitch-hover">
              The Menu of Miracles
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every service you didn&apos;t know you desperately needed.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <RevealSection key={h.title} delay={i * 0.1}>
                <div className="glass-card gradient-border rounded-2xl p-6 hover:border-pink-500/30 transition-all group hover:-translate-y-2 relative overflow-hidden">
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 group-hover:scale-110 transition-all">
                    <h.icon className="w-7 h-7 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{h.title}</h3>
                  <p className="text-sm text-gray-400">{h.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition-colors"
            >
              View All 12 Services <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 glitch-hover">
              The Honest Comparison
            </h2>
            <p className="text-gray-400">
              Let&apos;s lay it all out. No hard feelings.
            </p>
          </RevealSection>

          <RevealSection variant="scale">
            <div className="glass-card rounded-2xl overflow-hidden relative scan-line">
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
                        className={`border-b border-white/5 transition-colors hover:bg-pink-500/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
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
          </RevealSection>
          <p className="text-center text-xs text-gray-600 mt-4">
            * Results may vary. Girl#1 is not responsible for existential
            realizations.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 glitch-hover">
              How It Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              So simple even you can figure it out. Three steps. No assembly
              required.
            </p>
          </RevealSection>

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
            ].map((item, i) => (
              <RevealSection key={item.step} variant="scale" delay={i * 0.15}>
                <div className="glass-card gradient-border rounded-2xl p-8 hover:border-pink-500/30 transition-all hover:-translate-y-2 text-center group relative overflow-hidden">
                  <div className="text-5xl mb-4 group-hover:animate-wiggle">
                    {item.emoji}
                  </div>
                  <div className="text-sm font-mono text-pink-500/60 mb-2">
                    STEP {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-transparent via-pink-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 glitch-hover">
              Real Men. Real Clean Houses.
            </h2>
            <p className="text-gray-400">
              Actual testimonials from guys who can now find their keys.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <RevealSection
                key={t.name}
                variant={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"}
                delay={i * 0.1}
              >
                <div className="glass-card gradient-border rounded-2xl p-6 hover:border-pink-500/30 transition-all hover:-translate-y-2">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 text-pink-500 fill-pink-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    &quot;{t.text}&quot;
                  </p>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 glitch-hover">
              Questions You&apos;re Too Proud to Ask
            </h2>
            <p className="text-gray-400">
              Don&apos;t worry, we get these a lot.
            </p>
          </RevealSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <RevealSection key={i} delay={i * 0.08}>
                <div className="glass-card rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-gray-200">{faq.q}</span>
                    <span
                      className={`text-pink-400 text-xl transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4 text-sm text-gray-400">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection variant="scale">
            <div className="glass-card rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/8 rounded-full blur-3xl animate-float-delayed" />

              {/* Animated border on CTA */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div
                  className="absolute inset-[-1px] rounded-3xl"
                  style={{
                    background: "linear-gradient(270deg, #ec4899, #a855f7, #3b82f6, #ec4899)",
                    backgroundSize: "300% 300%",
                    animation: "border-flow 4s ease infinite",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                    opacity: 0.5,
                  }}
                />
              </div>

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
          </RevealSection>
        </div>
      </section>
    </>
  );
}
