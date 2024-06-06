import HoverSpring from "@/components/ui/HoverSpring";
import RippleLoader from "@/components/ui/RippleLoader";

const EnterPage = () => {
  return (
    <main className="flex flex-col h-screen min-h-screen items-center justify-evenly">
      <h1>Enter Page</h1>
      <HoverSpring />
      <RippleLoader />
    </main>
  );
};

export default EnterPage;
