import { Shield, Heart, Sparkles, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/30 via-black to-black" />
        <div className="absolute top-10 -right-40 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            The <span className="girl1-gradient-text">Origin Story</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            How one woman&apos;s trip to her brother&apos;s apartment changed everything.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 sm:p-12 space-y-6 text-gray-300 leading-relaxed">
            <p>
              It started with a visit to her brother&apos;s apartment. The sink had
              dishes from what appeared to be the Bush administration. There were
              no towels — just a collection of oversized t-shirts draped over
              the shower rod. The &quot;spice rack&quot; was a bottle of ketchup and some
              mysterious powder that may have once been oregano.
            </p>
            <p>
              She cleaned his place in three hours. He stared at his own
              apartment like he&apos;d never seen it before. &quot;I didn&apos;t know the
              counter was white,&quot; he whispered.
            </p>
            <p>
              That&apos;s when she realized: there are a LOT of guys out there
              living like this. Not because they&apos;re bad people — they just
              never learned, don&apos;t have time, or genuinely believe Febreze
              counts as cleaning.
            </p>
            <p>
              <span className="text-pink-400 font-semibold">Girl#1</span> was
              born. A professional service that gives guys (and honestly,
              anyone) the household help they need without the judgment, the
              drama, or the passive-aggressive Post-it notes on the fridge.
            </p>
            <p className="text-gray-500 italic">
              Today, we&apos;ve helped thousands of homes go from &quot;health hazard&quot;
              to &quot;hey, this is actually nice.&quot; And we&apos;re just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-gradient-to-b from-transparent via-pink-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-400">
              (Besides clean countertops.)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Vetted Professionals",
                desc: "Every Girl#1 is background checked, trained, and genuinely good at what she does. No randos.",
              },
              {
                icon: Heart,
                title: "Zero Judgment",
                desc: "We've seen it all. Your place could look like a tornado hit a frat house and we'd just smile and get to work.",
              },
              {
                icon: Sparkles,
                title: "Actually Good at This",
                desc: "Our team doesn't just clean — they transform spaces. It's kind of their superpower.",
              },
              {
                icon: Users,
                title: "Built for Real Life",
                desc: "We designed every service around what people actually need, not what sounds fancy on a brochure.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="glass-card rounded-2xl p-6 hover:border-pink-500/30 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-4 mx-auto">
                  <v.icon className="w-7 h-7 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Join the Team?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            If you&apos;re amazing at making spaces look incredible and you
            don&apos;t judge people for owning 47 identical black t-shirts, we
            want to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl transition-all hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
