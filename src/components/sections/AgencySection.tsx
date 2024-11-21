const AgencySection = () => {
  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6">Our Agency</h2>
            <p className="text-gray-600 mb-8">
              We believe in the power of data. Our analytics-driven approach allows us to make informed decisions and optimize your marketing efforts for maximum ROI. Let's turn your vision into Effective Solutions for Your Business!
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
              Read more
            </button>
          </div>
          <div className="animate-fadeIn">
            <img
              src="https://illustrations.popsy.co/amber/creative-team.svg"
              alt="Agency Illustration"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencySection;