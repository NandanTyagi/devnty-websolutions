import IntroThreeDExperience from "@/components/IntroThreeDExperience";
import RippleLoader from "@/components/ui/RippleLoader";
import { ShineButtonLink } from "@/components/ui/ShineButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex h-[100dvh] flex-col items-center justify-end pb-20">
      <ShineButtonLink text="ENTER" href="/solutions" />
      <IntroThreeDExperience />
    </main>
  );
}
