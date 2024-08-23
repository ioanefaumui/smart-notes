import { Features, HeroMain, Logos, Quote, VideoLarge } from "@/sections";

export default function Home() {
  return (
    <main>
      <HeroMain />
      <Logos />
      <Quote
        author="Sarah Johnson"
        company="TechSavvy Solutions"
        quote="The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. "
      />
      <Features />
      <Quote
        author="Sarah Johnson"
        company="TechSavvy Solutions"
        quote="The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. "
      />
      <VideoLarge />
    </main>
  );
}
