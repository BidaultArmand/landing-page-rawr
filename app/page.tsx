import { Navbar, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* Mission Section */}
        <section
          id="mission"
          className="bg-rawr-beige py-[clamp(80px,10vw,140px)]"
        >
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-rawr-black">
              Mission Section (To be built)
            </h2>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="bg-rawr-white py-[clamp(80px,10vw,140px)]"
        >
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-rawr-black">
              How It Works Section (To be built)
            </h2>
          </div>
        </section>

        {/* Histoire Section */}
        <section
          id="histoire"
          className="bg-rawr-beige py-[clamp(80px,10vw,140px)]"
        >
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-rawr-black">
              Our Story Section (To be built)
            </h2>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="download"
          className="bg-rawr-purple-lt py-[clamp(80px,10vw,140px)]"
        >
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-rawr-black">
              CTA Section (To be built)
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
