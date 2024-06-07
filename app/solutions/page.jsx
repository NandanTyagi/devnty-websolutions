import HoverSpring from "@/components/ui/HoverSpring";
import RippleLoader from "@/components/ui/RippleLoader";

const EnterPage = () => {
  return (
    <main className="page flex h-screen min-h-screen flex-col items-center justify-evenly p-4">
      <div className="">
        <h1 className="mb-6 text-2xl font-bold">
          Welcome to DEVNTY Websolutions
        </h1>
        <h2 className="mb-6 text-xl">
          At DEVNTY Websolutions, we specialize in creating innovative and
          tailored web applications that leverage cutting-edge AI technologies.
        </h2>
        <p className="mb-6 text-gray-500">
          Our diverse portfolio showcases a range of solutions designed to meet
          various needs, from educational tools and productivity trackers to
          platforms that explore ancient wisdom through modern interfaces.
          Explore our solutions below and discover how DEVNTY Websolutions can
          empower your digital transformation.
        </p>
      </div>
      <HoverSpring />
      {/* <RippleLoader /> */}
    </main>
  );
};

export default EnterPage;
