import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We create <span className="text-primary">solutions</span> for your business
            </h1>
            <p className="text-gray-600 mb-8">
              Our team builds a fresh take on emerging trends, innovative solutions, and cutting-edge campaigns to help your business grow.
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Get Started
            </Link>
          </div>
          <div className="animate-fadeIn">
            <img
              src="https://illustrations.popsy.co/amber/digital-marketing.svg"
              alt="Hero Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;