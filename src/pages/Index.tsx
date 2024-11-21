import { useState } from "react";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Smith",
      role: "Marketing Director",
      content: "The team at BrainBoost has transformed our digital presence. Their strategic approach and creative solutions have driven remarkable results.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "John Davis",
      role: "CEO",
      content: "Outstanding service and exceptional results. They truly understand digital marketing and deliver beyond expectations.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Business Owner",
      content: "Working with BrainBoost has been a game-changer for our business. Their expertise and dedication are unmatched.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We create <span className="text-primary">solutions</span> for your business
              </h1>
              <p className="text-gray-600 mb-8">
                Our team builds a fresh take on emerging trends, innovative solutions, and cutting-edge campaigns to help your business grow.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="https://illustrations.popsy.co/amber/digital-marketing.svg"
                alt="Hero Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            We Provide The Best Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔍",
                title: "SEO/SEM",
                description: "Optimize your online presence and reach your target audience effectively."
              },
              {
                icon: "📊",
                title: "Marketing",
                description: "Strategic marketing solutions tailored to your business goals."
              },
              {
                icon: "🎨",
                title: "Web Design",
                description: "Create stunning websites that convert visitors into customers."
              },
              {
                icon: "📱",
                title: "Others",
                description: "Comprehensive digital solutions for your business needs."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://illustrations.popsy.co/amber/remote-work.svg"
                alt="Solutions Illustration"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Simple Solutions!</h2>
              <div className="space-y-6">
                {[
                  { number: 1, title: "Contact us", description: "Reach out to discuss your needs" },
                  { number: 2, title: "Consult", description: "We analyze your requirements" },
                  { number: 3, title: "Place order", description: "Choose your perfect solution" },
                  { number: 4, title: "Payment", description: "Secure and flexible payment options" }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-x-4">
                <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                  Get Started
                </button>
                <button className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary/10 transition-colors">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Agency</h2>
              <p className="text-gray-600 mb-8">
                We believe in the power of data. Our analytics-driven approach allows us to make informed decisions and optimize your marketing efforts for maximum ROI. Let's turn your vision into Effective Solutions for Your Business!
              </p>
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                Read more
              </button>
            </div>
            <div>
              <img
                src="https://illustrations.popsy.co/amber/data-analysis.svg"
                alt="Agency Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Clients Say!
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonials[currentTestimonial].content}</p>
              <div className="flex text-yellow-400">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
            </div>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
            >
              <ChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
            >
              <ChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to get started?</h2>
          <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary pt-16 pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="/" className="text-primary font-bold text-xl flex items-center mb-4">
                <span className="text-2xl mr-2">💡</span>
                BrainBoost
              </a>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Twitter
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Web Design</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">SEO Optimization</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Digital Marketing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Help Center</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} BrainBoost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;