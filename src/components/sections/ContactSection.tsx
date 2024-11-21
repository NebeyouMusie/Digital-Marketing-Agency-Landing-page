const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="animate-fadeIn">
            <img
              src="https://illustrations.popsy.co/amber/customer-support.svg"
              alt="Contact Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;