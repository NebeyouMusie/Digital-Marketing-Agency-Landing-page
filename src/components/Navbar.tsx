import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-primary font-bold text-xl flex items-center">
              <span className="text-2xl mr-2">💡</span>
              BrainBoost
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary">Home</a>
            <a href="#" className="text-gray-600 hover:text-primary">About us</a>
            <a href="#" className="text-gray-600 hover:text-primary">Services</a>
            <a href="#" className="text-gray-600 hover:text-primary">Contact us</a>
            <a href="#" className="text-gray-600 hover:text-primary">Blog</a>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">About us</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">Contact us</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary">Blog</a>
              <button className="w-full text-center bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;