import { Navbar, Footer } from "@/components/layout";
import { Hero, CTADownload, Mission, HowItWorks } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
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

        {/* CTA Section */}
        <section id="download" className="py-0">
          <CTADownload />
        </section>

        {/* FAQ Section - Placeholder */}
        <section id="faq" className="py-16" />
      </main>
      <Footer />
    </>
  );
}
