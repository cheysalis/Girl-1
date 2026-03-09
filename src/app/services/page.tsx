import {
  SprayCan,
  Shirt,
  Palette,
  FolderOpen,
  ShoppingCart,
  Heart,
  Cookie,
  Dog,
  Calendar,
  Gift,
  Lightbulb,
  Music,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: SprayCan,
    title: "Deep Clean Queen",
    tagline: "She cleans. You recline.",
    desc: "Your place will sparkle so hard your buddies will think you hired a wizard. Bathrooms, kitchens, floors — she handles it all while you handle the remote.",
    color: "from-pink-500/20 to-pink-600/10",
  },
  {
    icon: Shirt,
    title: "Laundry Whisperer",
    tagline: "Socks matched. Shirts folded. Mind blown.",
    desc: "She actually knows what those symbols on the tag mean. Your whites stay white, your colors stay bright, and your socks find their soulmates.",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Palette,
    title: "Decorator Extraordinaire",
    tagline: "Throw pillows that actually make sense.",
    desc: "She'll turn your man cave into something your mom would cry happy tears over. Yes, those curtains DO match the rug now. You're welcome.",
    color: "from-rose-500/20 to-rose-600/10",
  },
  {
    icon: FolderOpen,
    title: "Chaos Tamer",
    tagline: "She organizes what you didn't know was messy.",
    desc: "That junk drawer? Organized. The garage? You can park in it now. The closet? You can actually find things. Revolutionary, we know.",
    color: "from-fuchsia-500/20 to-fuchsia-600/10",
  },
  {
    icon: ShoppingCart,
    title: "Grocery Guru",
    tagline: "Actual food. In your fridge. Wild.",
    desc: "She shops, she stocks, she even buys the healthy stuff you'll pretend to eat. Your fridge will have more than beer and ketchup for once.",
    color: "from-pink-500/20 to-pink-600/10",
  },
  {
    icon: Heart,
    title: "Emotional Support Human",
    tagline: "She listens. No, really.",
    desc: "Bad day? She'll listen and say 'that sucks' at all the right moments. She'll validate your feelings without bringing up that thing you did in 2019.",
    color: "from-red-500/20 to-red-600/10",
  },
  {
    icon: Cookie,
    title: "Meal Prep Maven",
    tagline: "Tupperware with your name on it.",
    desc: "Home-cooked meals prepped and ready so you can stop eating cereal for dinner. She labels everything. Even the days of the week. Because she cares.",
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    icon: Dog,
    title: "Pet Wrangler",
    tagline: "Your dog will like her more than you.",
    desc: "Walking, feeding, belly rubs, and that voice people use when talking to dogs. Your pet gets the VIP treatment while you do... whatever it is you do.",
    color: "from-orange-500/20 to-orange-600/10",
  },
  {
    icon: Calendar,
    title: "Life Admin",
    tagline: "She remembers so you don't have to.",
    desc: "Appointments booked, bills reminded, that thing you were supposed to do last Tuesday — handled. She's basically a human calendar with better hair.",
    color: "from-violet-500/20 to-violet-600/10",
  },
  {
    icon: Gift,
    title: "Gift Whisperer",
    tagline: "Never panic-buy at a gas station again.",
    desc: "Mom's birthday? Anniversary? Random Tuesday your girl is mad? She picks out the perfect gift, wraps it, and even writes the card. You just take the credit.",
    color: "from-pink-500/20 to-pink-600/10",
  },
  {
    icon: Lightbulb,
    title: "Party Planner Lite",
    tagline: "Game day? She's got it.",
    desc: "She'll set up for your watch party, poker night, or backyard BBQ. Decorations, snacks, the works. You just show up and look like a legend.",
    color: "from-yellow-500/20 to-yellow-600/10",
  },
  {
    icon: Music,
    title: "Vibe Curator",
    tagline: "Candles. Playlist. Ambiance.",
    desc: "Need to impress someone? She'll set the mood with lighting, music, and a place that smells like a spa instead of gym socks. Wingwoman level: expert.",
    color: "from-indigo-500/20 to-indigo-600/10",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/30 via-black to-black" />
        <div className="absolute top-10 -right-40 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            The Full <span className="girl1-gradient-text">Menu of Miracles</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Every service you didn&apos;t know you desperately needed. Pick one,
            pick all — we don&apos;t judge. (Unlike your mother.)
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="glass-card rounded-2xl p-6 hover:border-pink-500/30 transition-all group hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <s.icon className="w-7 h-7 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                <p className="text-sm text-pink-400 mb-2 italic">
                  {s.tagline}
                </p>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-pink-600/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">
                Convinced Yet?
              </h2>
              <p className="text-gray-400 mb-8">
                Your couch called. It said it misses being crumb-free.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
              >
                Book Your Girl#1 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
