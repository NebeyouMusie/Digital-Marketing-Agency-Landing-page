import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-scroll";

const FooterSection = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="home" smooth={true} duration={500} className="text-primary font-bold text-xl flex items-center mb-4 cursor-pointer">
              <span className="text-2xl mr-2">💡</span>
              BrainBoost
            </Link>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="about" smooth={true} duration={500} className="text-gray-600 hover:text-primary cursor-pointer">About</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="services" smooth={true} duration={500} className="text-gray-600 hover:text-primary cursor-pointer">Web Design</Link></li>
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
  );
};

export default FooterSection;