import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/ui/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="h-[1200px]">
      <Hero/>
      <About/>
      <Services/>
      <Work/>
    </main>
  );
}
