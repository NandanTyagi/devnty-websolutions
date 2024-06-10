import IntroThreeDExperience from "@/components/IntroThreeDExperience";
import { ShineButtonLink } from "@/components/ui/ShineButton";

export default function Home() {
  return (
    <main className="relative flex h-[100dvh] flex-col items-center justify-end pb-20">
      <ShineButtonLink text="ENTER" href="/solutions" />
      <IntroThreeDExperience />
    </main>
  );
}
