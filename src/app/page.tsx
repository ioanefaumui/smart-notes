import { Features, HeroMain, Logos, Quote1 } from "@/sections";

export default function Home() {
  return (
    <main>
      <HeroMain />
      <Logos />
      <Quote1
        author="Sarah Johnson"
        company="TechSavvy Solutions"
        quote="The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. "
      />
      <Features />
    </main>
  );
}
