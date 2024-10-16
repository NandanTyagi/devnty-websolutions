import Link from "next/link";

export const ShineButtonLink = ({ text, href = "/" }) => {
  return (
    <Link href={href}>
      <button className="group/button relative z-10 inline-flex items-center justify-center overflow-hidden rounded-md bg-black px-4 py-1.5 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-white">
        <span className="text-lg">{text}</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20" />
        </div>
      </button>
    </Link>
  );
};

export const ShineButton = ({ text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className="group/button relative z-10 inline-flex items-center justify-center overflow-hidden rounded-md bg-red-500 px-4 py-1.5 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
      type={type}
    >
      <span className="text-sm">{text}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
    </button>
  );
};
