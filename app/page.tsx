import { Navbar, Footer } from "@/components/layout";
import { Hero, Histoire, CTADownload, Mission, HowItWorks } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* Mission Section */}
        <section id="mission">
          <Mission />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works">
          <HowItWorks />
        </section>

        {/* Histoire Section */}
        <section id="histoire">
          <Histoire />
        </section>

        {/* CTA Section */}
        <section id="download" className="py-[clamp(80px,10vw,140px)]">
          <CTADownload />
        </section>

        {/* FAQ Section - Placeholder */}
        <section id="faq" className="py-16" />
      </main>
      <Footer />
    </>
  );
}
