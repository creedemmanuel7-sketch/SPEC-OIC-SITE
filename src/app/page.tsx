import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Impact } from "@/components/Impact";
import { About } from "@/components/About";
import { Network } from "@/components/Network";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Impact />
      <About />
      <Network />
      <Testimonials />
      <CTA />
    </>
  );
}
