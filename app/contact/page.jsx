const ContactPage = () => {
  return (
    <main className="page flex h-screen min-h-screen flex-col items-center justify-evenly p-4">
      <div className="card">
        <h1 className="mb-6 text-2xl font-bold">Contact DEVNTY Websolutions</h1>
        <h2 className="mb-6 text-xl">
          We are here to help you with your digital transformation.
        </h2>
        <p className="mb-6 text-gray-500">
          If you have any questions or would like to discuss a potential
          project, please do not hesitate to reach out to us. We are looking
          forward to hearing from you.
        </p>
      </div>
      <div className="card">
        <h2 className="mb-6 text-xl">Contact Information</h2>
        <p className="mb-6 text-gray-500">
          <a href="mailto:info@devnty.com">Email: info@devnty.com</a>
        </p>
      </div>
      {/* <ContactForm /> */}
    </main>
  );
};

export default ContactPage;
