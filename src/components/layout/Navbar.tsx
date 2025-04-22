
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Subha</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-primary-600 transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link to="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              <Link
                to="/features"
                className="text-gray-700 hover:text-primary-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-primary-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/signin"
                className="text-gray-700 hover:text-primary-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                Sign In
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
