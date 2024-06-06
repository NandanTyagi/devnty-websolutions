import IntroThreeDExperience from "@/components/IntroThreeDExperience";
import RippleLoader from "@/components/ui/RippleLoader";
import { ShineButtonLink } from "@/components/ui/ShineButton";


export default function Home() {
  return (
    <main className="relative flex flex-col justify-end items-center h-screen pb-20">
      <ShineButtonLink text="ENTER" href="/enter" />
      <IntroThreeDExperience />
    </main>
  );
}
