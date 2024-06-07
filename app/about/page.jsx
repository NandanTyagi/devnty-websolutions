import HoverSpring from "@/components/ui/HoverSpring";
import RippleLoader from "@/components/ui/RippleLoader";

const AboutPage = () => {
  return (
    <main className="page flex h-screen min-h-screen flex-col items-center justify-evenly p-4">
      <div className="">
        <h1 className="mb-6 text-2xl font-bold">About Us</h1>
        <section className="card">
          <h2 className="mb-6 text-xl">Our Mission</h2>
          <p className="mb-6 text-gray-500">
            At DEVNTY Websolutions, our mission is to transform ideas into
            impactful digital experiences. We strive to leverage the latest in
            AI and web technologies to create applications that not only meet
            our clients' needs but also exceed their expectations.
          </p>
        </section>
        <section className="card">
          <h2 className="mb-6 text-xl">Who We Are</h2>
          <p className="mb-6 text-gray-500">
            Founded by a team of passionate developers and innovators, DEVNTY
            Websolutions is dedicated to delivering high-quality, customized web
            solutions. Our expertise spans a variety of industries, enabling us
            to craft tailored applications that drive success and growth for our
            clients.
          </p>
        </section>
        <section className="card">
          <h2 className="mb-6 text-xl">What We Do</h2>
          <p className="mb-6 text-gray-500">
            We design and build web applications with integrated AI tools to
            enhance productivity, education, and user engagement. Our solutions
            range from educational platforms and productivity trackers to unique
            applications that explore ancient wisdom through modern technology.
          </p>
        </section>
        <section className="card">
          <h2 className="mb-6 text-xl">Why Choose Us</h2>
          <div className="scrolling-wrapper">
            <ul className="mb-6 ">
              <li className="mini">
                <strong>Innovative Solutions</strong>: We combine creativity and
                technology to develop cutting-edge web applications.
              </li>
              <li className="mini">
                <strong>Customization</strong>: Each project is tailored to meet
                the specific needs of our clients.
              </li>
              <li className="mini">
                <strong>Expertise</strong>: Our team of skilled developers and
                AI specialists brings extensive experience to every project.
              </li>
              <li className="mini">
                <strong>Commitment</strong>: We are dedicated to delivering
                exceptional results and ensuring client satisfaction.
              </li>
            </ul>
          </div>
        </section>
        <section className="card">
          <h2 className="mb-6 text-xl">Our Vision</h2>
          <p className="mb-6 text-gray-500">
            We envision a world where technology seamlessly integrates with
            everyday life, empowering individuals and businesses to achieve
            their fullest potential. At DEVNTY Websolutions, we are committed to
            driving this vision forward through innovation, quality, and
            excellence.
          </p>
        </section>
        <section className="card">
          <h2 className="mb-6 text-xl">Get in Touch</h2>
          <p className="mb-6 text-gray-500">
            Interested in working with us? <a href="/contact">Contact us</a> to
            discuss your project and discover how DEVNTY Websolutions can help
            bring your ideas to life.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
