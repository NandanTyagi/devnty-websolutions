import IntroThreeDExperience from "@/components/IntroThreeDExperience";
import RippleLoader from "@/components/ui/RippleLoader";
import { ShineButtonLink } from "@/components/ui/ShineButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex h-[100dvh] flex-col items-center justify-end pb-20">
      {/* <div className="logo z-20 flex items-center justify-between text-sm absolute top-8 left-20">
        <Link
          href="/"
          className="text-md flex items-center justify-center gap-4 font-semibold text-white md:text-2xl"
        >
          DEVNTY Websolutions
        </Link>
      </div> */}
      <ShineButtonLink text="ENTER" href="/solutions" />
      <IntroThreeDExperience />
    </main>
  );
}
